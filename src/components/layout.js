import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSwipeable } from "react-swipeable";

import GlobalStyle from '../layout/globalStyles';
import Header from "./header"
import Footer from "./footer"

// import "./layout.css"

const Layout = ({ page, children }) => {
  // const [isOpen, setOpen] = React.useState(false);
  // const [isSticky, setSticky] = useState(false);
  // const handlers = useSwipeable({
  //   trackMouse: true,
  //   onSwipedLeft: () => setOpen(true)
  // });
  // const ref = useRef(null);
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (ref.current) {
  //     if(ref.current.getBoundingClientRect().top>=0)
  //     {
  //         setSticky(false) 
  //     }
  //     else
  //     {
  //        setSticky(ref.current.getBoundingClientRect().top <= 100);
  //     }      
  //   }
  // };
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header page={page} siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main>{children}</main>
       
       <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
