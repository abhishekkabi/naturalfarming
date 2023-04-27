import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Calling WOWjs
import WOW from "wowjs";

// import styles bundle
import "swiper/css/bundle";

// importing pages and features
import Landing from "./Landing/Landing";
import Product from "./Product/Product";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import About from "./About/about";
import NewsList from "./News/News";
import Blogs from "./Blogs/Blogs";
import Community from "./Community/Community";

class App extends React.Component {
  // Defining WOW
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }

  render() {
    return (
     <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>
          <Route exact path='/product' element={<Product />}></Route>
          <Route exact path='/footer' element={<Footer />}></Route>
          <Route exact path='/header' element={<Header />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/News' element={<NewsList />}></Route>
          <Route exact path='/Blogs' element={<Blogs />}></Route>
          <Route exact path='/Community' element={<Community />}></Route>
        </Routes>
      </BrowserRouter>
     </>
    );
  }
}
export default App;
