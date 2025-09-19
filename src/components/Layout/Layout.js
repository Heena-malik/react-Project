import React from "react";
// import Footer from "./Footer";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;