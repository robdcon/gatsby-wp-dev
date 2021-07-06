import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from "../themes/globalStyles";
import Theme from '../themes/Theme';
import { ThemeProvider } from "styled-components";
import CollapsableNavigation from "./CollapsableNavigation";

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    allWpPage: {
     edges
    }
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      },
      allWpPage {
        edges {
          node {
            title
            link
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="wrapper" data-is-root-path={isHomePage}>
        <header className="header">
        <CollapsableNavigation pages={edges} />
          {/* {isHomePage ? (
            <h1 className="main-heading">
              <Link to="/">{parse(title)}</Link>
            </h1>
          ) : (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
          )} */}
        </header>

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
