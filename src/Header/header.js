import React from "react";
import "./header.css";

function Header() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Landing">
          <h3 class="my-heading ">Natural Farms</h3>
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars mfa-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Product">
                {" "}
                PRODUCTS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Blogs">
                BLOGS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Community">
                COMMUNITY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
