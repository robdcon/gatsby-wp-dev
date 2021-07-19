import React, { createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from "../themes/global-styles";
import Theme from '../themes/Theme';
import { ThemeProvider } from "styled-components";
import Header from '../components/organisms/Header';
import Footer from "../components/organisms/Footer";
import Seo from "../components/seo";
import {Helmet} from "react-helmet";

export const PageContext = createContext();
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
    <PageContext.Provider value={edges}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Seo>
        <div className="wrapper" data-is-root-path={isHomePage}>
          <Header className="header" />
          <main>{children}</main>
          <Footer />
        </div>
      </Seo>
    </ThemeProvider>
   </PageContext.Provider>
  )
}

export default Layout
