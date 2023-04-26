import React from "react";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import NewsList from "../News/News";

//Calling WOWjs
import WOW from "wowjs";

//importing twitter API widgets
import {
  TwitterTimelineEmbed
} from "react-twitter-embed";

// Importing necessary media files
import overview_TR from "../img/overview_TR.png";
import overview_TL from "../img/overview_TL.png";
import overview_CN from "../img/overview_CN.png";
import overview_BL from "../img/overview_BL.png";
import overview_BR from "../img/overview_BR.png";
import story_bg from "../img/story_bg.jpg";
import bgvideo from "../img/bgvideo.mp4";

// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from "swiper/react";

// import styles bundle
import "swiper/css/bundle";

import { Navigation } from "swiper";

class Landing extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }

  render() {
    return (
      <div className="main_container">
        <header id="home">
          <video src={bgvideo} autoPlay loop muted className="videobg" />
          <div class="overlay"></div>
          <Header />
          <div class="tophead">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-7 ">
                  <h1 class="title-main wow fadeInLeft" data-wow-duration="2s">
                    Natural Farming
                  </h1>
                  <h4 class="subtitle-main wow fadeInUp" data-wow-duration="2s">
                    <span style={{ fontWeight: "900" }}>
                      "Nurture Nature, Nourish Life: The Importance of Natural
                      Farming in India"
                    </span>{" "}
                    <br /> Natural farming is a sustainable and eco-friendly
                    method of agriculture that emphasizes working with, rather
                    than against, nature. This method is particularly important
                    in India where overuse of chemical inputs has led to soil
                    degradation and decreased agricultural productivity. By
                    adopting natural farming practices, Indian farmers can help
                    conserve their land and protect the environment, while also
                    providing nourishing food for their communities.
                  </h4>
                  <div
                    class="top-btn-block wow fadeInUp"
                    data-wow-duration="2.5s"
                  >
                    <a
                      href="/Blogs"
                      class="btn-explore "
                      data-wow-duration="2.5s"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sesgoabajo"></div>
        </header>
        <main>
          {/* Code related to the overview section */}
          <section class="overview-wrap" id="overview">
            <div class="container container_overview">
              <div class="contenedor">
                <h2 class="title-overview wow fadeInUp">Overview</h2>
                <div class="hr"></div>
                <p class="subtitle-overview wow fadeInUp">
                  "Why is embracing Natural Farming crucial for securing a
                  sustainable future for our planet?"
                  <br />
                  Natural Farming is crucial as it reduces dependence on
                  synthetic inputs, improves soil health, and enhances crop
                  resilience, leading to long-term food security while also
                  preserving our natural resources for future generations.
                </p>
                <div class="row tileRow">
                  <div class="tile">
                    <div
                      class="tileBox"
                      style={{
                        backgroundImage: `url(${overview_TR})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="tileText">
                        <h2>Good Food</h2>
                        <h2>is a good life</h2>
                        <p>
                          Natural Farming produced crops are made without any
                          artificial additives. They utilize animal excreta as
                          manure to grow crops.
                        </p>
                        <button type="button" class="btn btn-light">
                          <a
                            href="/Blogs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Read More
                          </a>
                        </button>
                      </div>
                    </div>
                    <div
                      class="tileBox"
                      style={{
                        backgroundImage: `url(${overview_TL})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="tileText">
                        <h2>Beyond Commerce</h2>
                        <h2>Behind Farmers</h2>
                        <p>
                          Natural Farming is the need of the hour for the Indian
                          farmers. They will be highly empowered by adopting
                          these basic techniques.
                        </p>
                        <button type="button" class="btn btn-light">
                          <a
                            href="/Blogs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Read More
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="tile">
                    <div
                      class="tileBanner"
                      style={{
                        backgroundImage: `url(${overview_CN})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <h2>Why Natural?</h2>
                      <h2>What is it all about?</h2>
                      <p>
                        Let us know, why Natural farming products can help us
                        build a healthy lifestyle.
                      </p>
                      <button type="button" class="btn btn-light">
                        <a
                          href="/About"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Read More
                        </a>
                      </button>
                    </div>
                  </div>
                  <div class="tile">
                    <div
                      class="tileBox"
                      style={{
                        backgroundImage: `url(${overview_BL})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="tileText">
                        <h2>Organic Farming</h2>
                        <h2>An Empirial Way of Farming</h2>
                        <p>
                          Organic farming can be infeasible for small farmers
                          due to the high costs of certification, lack of access
                          to markets...
                        </p>
                        <button type="button" class="btn btn-light">
                          <a
                            href="/Blogs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Read More
                          </a>
                        </button>
                      </div>
                    </div>
                    <div
                      class="tileBox"
                      style={{
                        backgroundImage: `url(${overview_BR})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="tileText">
                        <h2>Natural Farming</h2>
                        <h2>The Way to Go</h2>
                        <p>
                          Natural farming is a cost-effective and sustainable
                          alternative for small farmers in India ...
                        </p>
                        <button type="button" class="btn btn-light">
                          <a
                            href="/Blogs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Read More
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* The blogs section brief */}
          <section class="galeria">
            <div class="imagenes">
              <div class="enmica">
                <h2>Natural Farming</h2>
                <div></div>
                <h5>
                  "Nurture Nature, Nourish Life: The Importance of Natural
                  Farming in India"
                </h5>
              </div>
            </div>
          </section>
          {/* Displaying product category section */}
          <section class="product">
            <h2 class="title-our-team">OUR PRODUCTS</h2>
            <div class="hr"></div>
            <p class="subtitle-our-team">
              Welcome to our section of natural farming-based products, where we
              bring you a carefully curated selection of the finest and freshest
              produce available. All of our products are sourced from farmers
              who use sustainable and eco-friendly methods, ensuring that you
              can enjoy the best possible quality while also supporting the
              environment. Our range of products includes fresh fruits and
              vegetables, grains, legumes, and more, all grown without the use
              of harmful chemicals or pesticides.
            </p>
            <div class="products-categories-sec main-sec">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <a href="/Product">
                      {" "}
                      <div class="categories-crd">
                        <img
                          src="https://images.unsplash.com/photo-1653580524515-77b19c176b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsbGV0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                          alt="Images Used"
                          class="img-fluid-product w-100"
                        />
                        <h3>Cereals</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="/Product">
                      {" "}
                      <div class="categories-crd">
                        <img
                          src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                          alt="Images Used"
                          class="img-fluid-product w-100"
                        />
                        <h3>Staple Food</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="/Product">
                      <div class="categories-crd">
                        <img
                          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwaG9uZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                          alt="Images Used"
                          class="img-fluid-product w-100"
                        />
                        <h3>Secondary Category</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Youtube video regarding natural farming section */}
          <section>
            <div
              class="story"
              style={{
                backgroundImage: `url(${story_bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div class="storybox">
                <iframe
                  width="370"
                  height="300"
                  src="https://www.youtube.com/embed/vF40gF-PUcs"
                  title="Zero Budget Natural Farming: An Agricultural Revolution is Taking Shape in India"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div class="storytext">
                  <h2>
                    {" "}
                    <span style={{ color: "#149a49" }}>
                      Real
                    </span> Consumers <br /> Real{" "}
                    <span style={{ color: "#149a49" }}>Stories</span>
                  </h2>
                </div>
              </div>
              <div class="storybox">
                <iframe
                  width="370"
                  height="300"
                  src="https://www.youtube.com/embed/qkqtcXuogu4"
                  title='With 10 acres of organic farm and traditional wisdom, This "family farmer" can help you eat right'
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div class="storytext">
                  <h2>
                    {" "}
                    <span style={{ color: "#149a49" }}>Stories</span> of <br />{" "}
                    our <span style={{ color: "#149a49" }}>Farmers</span>
                  </h2>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials of Natural farming product users */}
          <section class="testimonials-wrap" id="testimonials">
            <div class="container">
              <div class="contenedor">
                <h2 class="title-testimonials wow fadeInUp">Our Customers</h2>
                <div class="hr1"></div>
                <h3 class="subtitle-testimonials wow fadeInUp">
                  <span style={{ fontWeight: "900" }}>
                    "Over the Rainbow: Our Customers Share Their Joy"
                  </span>
                  <br />
                  Welcome to our happy customer review section, where we
                  showcase the experiences and satisfaction of those who have
                  chosen our natural farming products. We believe that there is
                  nothing more powerful than the voice of our customers, and we
                  are proud to share their positive stories with you.
                </h3>
                <div className="swiper_P">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide
                      className="swiperSlide"
                      style={{ marginRight: "-116px" }}
                    >
                      <div class="slide-one">
                        <div
                          id="demo"
                          class="carousel slide"
                          data-ride="carousel"
                        >
                          <ul class="carousel-indicators">
                            <li
                              data-target="#demo"
                              data-slide-to="0"
                              class="active"
                            ></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                          </ul>

                          <div class="carousel-inner">
                            <div class="carousel-item active ">
                              <div class="banner-slide">
                                <h5>Ms. Ankita Ahuja</h5>
                                <p>
                                  "I recently started using natural farming
                                  products and I am blown away by the difference
                                  in quality. The produce is fresher and tastes
                                  so much better than what I was getting at the
                                  supermarket. I feel good knowing that I am
                                  supporting sustainable and eco-friendly
                                  practices."
                                </p>
                              </div>
                            </div>
                          </div>

                          <a
                            class="carousel-control-prev "
                            href="#demo"
                            data-slide="prev"
                          >
                            <span class="carousel-control-prev-icon-c"></span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                          >
                            <span class="carousel-control-next-icon-c"></span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: "-116px" }}>
                      <div class="slide-one">
                        <div
                          id="demo"
                          class="carousel slide"
                          data-ride="carousel"
                        >
                          <ul class="carousel-indicators">
                            <li
                              data-target="#demo"
                              data-slide-to="0"
                              class="active"
                            ></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                          </ul>

                          <div class="carousel-inner">
                            <div class="carousel-item active ">
                              <div class="banner-slide">
                                <h5>Mr. Shyam Kaushal</h5>
                                <p>
                                  "I have been using natural farming products
                                  for over a year now and I have noticed a
                                  significant improvement in my overall health.
                                  I no longer suffer from digestive issues and
                                  my energy levels have increased. I would
                                  highly recommend these products to anyone
                                  looking for healthier and more sustainable
                                  options."
                                </p>
                              </div>
                            </div>
                          </div>

                          <a
                            class="carousel-control-prev "
                            href="#demo"
                            data-slide="prev"
                          >
                            <span class="carousel-control-prev-icon-c"></span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                          >
                            <span class="carousel-control-next-icon-c"></span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: "-116px" }}>
                      <div class="slide-one">
                        <div
                          id="demo"
                          class="carousel slide"
                          data-ride="carousel"
                        >
                          <ul class="carousel-indicators">
                            <li
                              data-target="#demo"
                              data-slide-to="0"
                              class="active"
                            ></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                          </ul>

                          <div class="carousel-inner">
                            <div class="carousel-item active ">
                              <div class="banner-slide">
                                <h5>Mr. Shah Rukh Khan</h5>
                                <p>
                                  "I was skeptical at first about switching to
                                  natural farming products, but I am so glad I
                                  did. The produce is incredibly fresh and I can
                                  taste the difference. Plus, I love knowing
                                  that I am supporting environmentally
                                  responsible farming practices."
                                </p>
                              </div>
                            </div>
                          </div>

                          <a
                            class="carousel-control-prev "
                            href="#demo"
                            data-slide="prev"
                          >
                            <span class="carousel-control-prev-icon-c"></span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                          >
                            <span class="carousel-control-next-icon-c"></span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: "-116px" }}>
                      <div class="slide-one">
                        <div
                          id="demo"
                          class="carousel slide"
                          data-ride="carousel"
                        >
                          <ul class="carousel-indicators">
                            <li
                              data-target="#demo"
                              data-slide-to="0"
                              class="active"
                            ></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                          </ul>

                          <div class="carousel-inner">
                            <div class="carousel-item active ">
                              <div class="banner-slide">
                                <h5>Ms. Priyanka Sharma</h5>
                                <p>
                                  "I have a family member with multiple chemical
                                  sensitivities and natural farming products
                                  have been a game-changer for them. They no
                                  longer have to worry about adverse reactions
                                  and can enjoy fresh, delicious produce without
                                  any concerns. I highly recommend these
                                  products to anyone looking for safe and
                                  sustainable options."
                                </p>
                              </div>
                            </div>
                          </div>

                          <a
                            class="carousel-control-prev "
                            href="#demo"
                            data-slide="prev"
                          >
                            <span class="carousel-control-prev-icon-c"></span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                          >
                            <span class="carousel-control-next-icon-c"></span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
          {/* News API section */}
          <section class="Newsapi">
            <h2>Latest News on Natural Farming in India</h2>
            <NewsList />
          </section>
          
          {/* Twitter Timeline of Indian Natural Farming not working due to technical issues at twitter's end */}
          <section class="tweets">
            <div class="twitternfp">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="NCONF_GZB"
                options={{ height: 400 }}
              />
            </div>
          </section>
        </main>
        
        {/* Using footer */}
        <Footer />
      </div>
    );
  }
}

export default Landing;
