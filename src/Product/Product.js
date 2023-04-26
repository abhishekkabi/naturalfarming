import React from "react";
import "./Product.css";

import Header from "../Header/header";
import Footer from "../Footer/footer";

import "../App.css";
import pb from "../img/pbanner.png";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import product5 from "../img/product5.jpg";
import product6 from "../img/product6.jpg";
import product7 from "../img/product7.jpg";
import product8 from "../img/product8.png";

function Product() {
  return (
    <div>
      <Header />
      <section class="p-c-bnr">
        <img src={pb} alt="Images Used" class="d-none d-md-block w-100" />
      </section>
      <section class="products-categories-sec">
        <div class="container">
          <h3 class="heading-new-green">OUR PRODUCTS</h3>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product1} alt="Images Used" class="img-fluid w-100" />
                <h3>Kala Jeera</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product2} alt="Images Used" class="img-fluid w-100" />
                <h3>Hari Ballabh</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product4} alt="Images Used" class="img-fluid w-100" />
                <h3>Swarna Masoori</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product3} alt="Images Used" class="img-fluid w-100" />
                <h3>Dhusara</h3>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product5} alt="Images Used" class="img-fluid w-100" />
                <h3>Raw Honey</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product6} alt="Images Used" class="img-fluid w-100" />
                <h3>A2 milk</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product7} alt="Images Used" class="img-fluid w-100" />
                <h3>Desi A2 Ghee</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="essentials-crd">
                <img src={product8} alt="Images Used" class="img-fluid w-100" />
                <h3>Jowar</h3>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
