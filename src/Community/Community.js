import React from "react";
import "./Community.css";

import Header from "../Header/header";
import Footer from "../Footer/footer";

import "../App.css";

import service1 from "../img/service-1.jpg";
import service2 from "../img/service-2.jpg";
import service3 from "../img/service-3.jpg";

function Community() {
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
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1609252509229-364936a1d1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Images Used"
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h1 class="display-1 text-white mb-5 animated slideInDown">
                        Dive in to know more!
                      </h1>
                      <a
                        href="https://natural-farming-community.netlify.app/"
                        class="btn btn-primary btn-carousel py-sm-3 px-sm-4"
                      >
                        Join Our Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1609252509229-364936a1d1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Images Used"
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-1 text-white mb-5 animated slideInDown">
                        Join a community of enthusiasts!
                      </h1>
                      <a
                        href="https://natural-farming-community.netlify.app"
                        class="btn btn-primary btn-carousel py-sm-3 px-sm-4"
                      >
                        Join Our Community
                      </a>
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
                  <h4 class="mb-3">Health</h4>
                  <p class="mb-4">
                    Discuss about the health benefits of adopting natural farming based
                    products
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
                  <h4 class="mb-3">Environment</h4>
                  <p class="mb-4">
                    See how natural farming benefits the environment through Its 
                    simplistic approaches
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
                  <h4 class="mb-3">Farmers</h4>
                  <p class="mb-4">
                    Discuss on why natural farming is the need of the hour for Indian 
                    farmers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;
