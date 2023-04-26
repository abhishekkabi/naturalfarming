import React from "react";
import "./Blogs.css";

import Header from "../Header/header";
import Footer from "../Footer/footer";

import "../App.css";

import service1 from "../img/service-1.jpg";
import service2 from "../img/service-2.jpg";
import service3 from "../img/service-3.jpg";
import service4 from "../img/service-4.jpg";
import service5 from "../img/service-5.jpg";
import service6 from "../img/service-6.jpg";
import overview_BL from "../img/overview_BL.png";
import overview_TR from "../img/overview_TR.png";
import nf4 from "../img/nfp4.png";

function Blogs() {
  return (
    <div>
      <Header />
      <div
        class="container-fluid-carousel p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={overview_BL} alt="Images Used" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h1 class="display-1 text-white mb-5 animated slideInDown">
                        Natural Farming <br /> The Way to Go!
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={overview_TR} alt="Images Used"/>
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-1 text-white mb-5 animated slideInDown">
                        Why Natural? <br /> What is it About?
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service1} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">Livestock Integration</h4>
                  <p class="mb-4">
                    It helps integrate livestock into farming in a resourceful way
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service2} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">Saving the Soil</h4>
                  <p class="mb-4">
                    Natural Farming practices help save the soil from being 
                    nutrient deficit.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service3} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">No synthetic Inputs</h4>
                  <p class="mb-4">
                    The process is chemical-input free and sustainable
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service4} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">Use of indigenous Seeds </h4>
                  <p class="mb-4">
                    indigenous seeds are used to utilize existing resources efficiently
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service5} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">Eco-balance</h4>
                  <p class="mb-4">
                    Natural farming maintains balance in the environment sustainably
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded d-flex h-100">
                <div class="service-img rounded">
                  <img class="img-fluid" src={service6} alt="" />
                </div>
                <div class="service-text rounded p-5">
                  <h4 class="mb-3">Holistic Approach</h4>
                  <p class="mb-4">
                    Natural Farming holistically takes each and every component of the ecosystem
                    into consideration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="unique-practices-sec" id="unique-practices">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="content">
                <h3 class="heading-new-green">Organic vs Natural Farming</h3>
                <p>
                  Although, both organic and natural farming systems are
                  non-chemical systems of farming largely relying on diversity,
                  on-farm biomass management, rejuvenation of natural nutrient
                  recycling, crop rotation, multiple cropping and efficient
                  resource recycling but with following differences: <br />
                  <br />
                  <strong>Organic systems</strong>
                  in addition to above are open to use of off-farm purchased
                  organic and biological inputs and need based soil correction
                  through natural mined minerals, <br />
                  <br />• <strong>Natural farming</strong>
                  systems are based on biomass mulching, round the year green
                  cover, indigenous cow-based dung and urine formulations in
                  exclusion of all purchased inputs organic, biological or
                  otherwise. <br />
                  <br />
                  Government of India is promoting both these non-chemical
                  systems of agriculture. Natural farming, through National
                  Mission on Natural Farming (NMNF) and organic farming through
                  Paramparagat Krishi Vikas Yojna (PKVY) and Mission Organic
                  Value Chain Development for North Eastern Region (MOVCDNER).
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="img-bnr">
                <img src={nf4} class="w-100" alt="Images Used" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="farmer-care-sec" id="farmer-care">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5">
              <img
                src="https://www.datocms-assets.com/46272/1645507370-save-soil-movement.jpg?auto=format&fit=max&w=1200"
                class="w-100" alt="Images Used"
              />
            </div>
            <div class="col-md-7">
              <h3 class="heading-new-green">Need of Natural Farming</h3>
              <p>
                There is no doubt that, green revolution technologies have
                revolutionized the food production scenario and transformed the
                Indian agriculture from subsistence to surplus generating
                enterprise. But indiscriminate use of chemical inputs
                (fertilizers, pesticides and hormones) and over-exploitation of
                natural resources led to decline in soil health and fertility,
                depleting natural resources and contamination in environment,
                water and food. All these concerns have underscored the need for
                exploring alternative agricultural systems, that are
                sustainable, environment friendly, non-degrading,
                non-contaminating and offer better income opportunities to the
                farmers along with safe and healthy food to citizens.<br /><br /> Is Your
                Soil Dying? <br /><br />Non-chemical natural farming systems which rely
                largely on biomass recycling, biological rejuvenation of natural
                nutrient cycles and promote usage of on-farm plant and
                livestock-based inputs are being used with considerable success
                in various parts of the country by individual practitioners.
                Such natural farming systems, besides being sustainable, non-
                degrading, non-depleting and resource conserving are also low
                cost. They give freedom to farmers from purchased inputs, ensure
                comparable productivity, increased income and are safe to soil,
                environment and all the life forms including human and animals.
                <br /><br />Adoption of natural farming practices on farmer fields have been
                found to be enriching the soils with organic carbon, increased
                microbial activity, increased activity of earthworms leading to
                restoration of natural nutrient cycles, improved water holding
                capacity and increased biological activity. Natural farming
                fields with adequate diversity have been found to be less prone
                to insect pest attacks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blogs;
