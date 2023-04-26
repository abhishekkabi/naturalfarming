import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer bg-dark">
      <div class="info_section">
        <div class="footbox">
          <h5>
            Goujata Supply <br /> Management <br /> Private Limited
          </h5>
          <p>
            15 (P), 5 Green Park, <br /> Chandrasekharpur, <br /> Bhubaneswar,
            751021, Odisha
          </p>
        </div>
        <div class="footbox">
          <div class="info_info">
            <h5>Contact Us</h5>
          </div>
          <div class="info_contact">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>
              15 (P), 5 Green Park, <br /> Chandrasekharpur, <br /> Bhubaneswar,
              751021, Odisha
            </span>

            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>Call : 9711713330</span>

            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>demo@gmail.com</span>
          </div>
        </div>
        <div class="footbox">
          <div class="info_form ">
            <h5>Newsletter</h5>
            <form action="#">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
            <div class="social_box">
              <i class="fa fa-facebook" aria-hidden="true"></i>

              <i class="fa fa-twitter" aria-hidden="true"></i>

              <i class="fa fa-youtube" aria-hidden="true"></i>

              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
