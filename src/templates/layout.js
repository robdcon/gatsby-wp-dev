import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GlobalStyles } from "../themes/global-styles";
import Theme from '../themes/theme';
import { ThemeProvider } from "styled-components";
import CollapsableNavigation from "../components/organisms/CollapsableNavigation";
import Footer from "../components/organisms/Footer";
import Seo from "../components/seo";
import {Helmet} from "react-helmet";


const Layout = ({ isHomePage, children }) => {
  const {
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
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Seo>
        <div className="wrapper" data-is-root-path={isHomePage}>
          <header className="header">
            <CollapsableNavigation pages={edges} />
          </header>

          <main>{children}</main>

          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.com">Gatsby</Link>
            {` `}
            And <Link to="https://wordpress.org/">WordPress</Link>
          </Footer>
        </div>
      </Seo>
    </ThemeProvider>
  )
}

export default Layout
