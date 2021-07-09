import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from "../themes/global-styles";
import Theme from '../themes/theme';
import { ThemeProvider } from "styled-components";
import CollapsableNavigation from "./CollapsableNavigation";
import Footer from "./Footer/Footer";
import Seo from "./seo";
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

          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link href="https://www.gatsbyjs.com">Gatsby</Link>
            {` `}
            And <Link href="https://wordpress.org/">WordPress</Link>
          </Footer>
        </div>
      </Seo>
    </ThemeProvider>
  )
}

export default Layout
