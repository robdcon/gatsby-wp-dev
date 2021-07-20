const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities);

  const projects = await getProjects(gatsbyUtilities);

  // If there are no posts in WordPress, don't do anything
  if (!posts.length && !projects.length) {
    return
  }

  await createProjectArchive({ projects, gatsbyUtilities })

  await createIndividualProjectPages({ projects, gatsbyUtilities })

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })

}

const createIndividualProjectPages = async ({ projects, gatsbyUtilities }) =>
  Promise.all(
    projects.map(({ previous, project, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({

        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: `projects/${project.slug}`,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/project.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our project template knows which project
          // the current page is (when you open it in a browser)
          id: project.id,

          // We also use the next and previous id's to query them and add links!
          previousProjectId: previous ? previous.id : null,
          nextProjectId: next ? next.id : null,
        },
      })
    )
  );

async function createProjectArchive({ projects, gatsbyUtilities }) {
 const totalPages = projects.length;

  return Promise.all(
    projects.map(async (_project, index) => {
     console.log('index:', index)
     console.log('project:', _project)
      const pageNumber = index + 1
      const postsPerPage = 10;
      const getPagePath = (_project, page) => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/projects` : `/projects/${_project.slug}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(_project, (pageNumber)),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/project-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(_project, (pageNumber + 1)),
          previousPagePath: getPagePath(_project, (pageNumber - 1)),
        },
      })
    })
  )
}

/**
 * Get Projects (Custom Post Type)
 */
async function getProjects({graphql, reporter}) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query PersonalProjectsQuery {
      # Query all WordPress blog posts sorted by date
      allWpPersonalProject(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
            slug
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          project: node {
            id
            uri
            title
            slug
          }

          next {
            id
            slug
          }
        }
      }
    }`
  );

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPersonalProject.edges;
}


///////////////////////////////////////////////////////////////


/**
 * This function creates all the individual blog pages in this site
 */
 const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
 Promise.all(
   posts.map(({ previous, post, next }) =>
     // createPage is an action passed to createPages
     // See https://www.gatsbyjs.com/docs/actions#createPage for more info
     gatsbyUtilities.actions.createPage({
       // Use the WordPress uri as the Gatsby page path
       // This is a good idea so that internal links and menus work 👍
       path: post.uri,
 
       // use the blog post template as the page component
       component: path.resolve(`./src/templates/blog-post.js`),
 
       // `context` is available in the template as a prop and
       // as a variable in GraphQL.
       context: {
         // we need to add the post id here
         // so our blog post template knows which blog post
         // the current page is (when you open it in a browser)
         id: post.id,
 
         // We also use the next and previous id's to query them and add links!
         previousPostId: previous ? previous.id : null,
         nextPostId: next ? next.id : null,
       },
     })
   )
 );


/**
 * This function creates all the individual blog pages in this site
 */
 async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/blog` : `/blog/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
            uri
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}
