import React, { useEffect } from "react";
import init3D from "./threejs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const App = () => {
  useEffect(() => {
    init3D();
  }, []);
  const handleContact = () => {
    const email = document.querySelector(".lets-work-email").value.trim();
    if (!email) {
      alert("Please enter your email before contacting.");
      return;
    }
    const subject = encodeURIComponent("Let's Work Together");
    const body = encodeURIComponent(
      `Hi, I'm interested in working together. My email is ${email}`
    );
    window.location.href = `mailto:gregor.ten1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="body">
      <nav className="nav">
        <a className="nav-link" href="#about-me">
          About Me
        </a>
        <a className="nav-link" href="#services">
          Services
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#contact">
          Contacts
        </a>
        <a
          href="./assets/CV-Gregoire-Careme.pdf"
          download
          className="download-btn"
          onClick={() => {
            const plus = document.querySelector(".plus");
            plus.classList.add("rotate");
            setTimeout(() => plus.classList.remove("rotate"), 800);
          }}
        >
          Download CV
        </a>
      </nav>

      <div className="jobs">
        <div className="jobs-left">
          <h1 className="jobs-left_name">
            Gregoire <br />
            Careme
          </h1>
        </div>
        <div className="jobs-right">
          <h2 className="jobs-left_web">Web Developer</h2>
          <h2 className="jobs-left_sound">Sound Design</h2>
          <h2 className="jobs-left_game">Game Design</h2>
          <h2 className="jobs-left_game plus">+</h2>
        </div>
      </div>

      <div id="about-me" className="about-me">
        <div className="about-me-left">
          <div
            id="threejs-container"
            className="threejs-container"
            style={{ width: "40rem", height: "40rem" }}
          ></div>
        </div>
        <div className="about-me-right">
          <h2 className="about-me-right_tittle">About Me</h2>
          <h3 className="about-me-right_text">
            I am a creative Web Developer with a background in Sound
            engineering, game design and optimization—crafting engaging digital
            experiences across platforms.
          </h3>
          <h4 className="about-me-right_jobs">Web Developer</h4>
          <img
            className="about-me-right_progress-bar"
            src="./assets/progress-bar-3.png"
            alt="Progress Bar"
          />
          <h4 className="about-me-right_jobs">Website Optimization</h4>
          <img
            className="about-me-right_progress-bar"
            src="./assets/progress-bar-2.png"
            alt="Progress Bar"
          />
          <h4 className="about-me-right_jobs">Game developer</h4>
          <img
            className="about-me-right_progress-bar"
            src="./assets/progress-bar-1.png"
            alt="Progress Bar"
          />
          <h4 className="about-me-right_jobs">Sound Engineer</h4>
          <img
            className="about-me-right_progress-bar"
            src="./assets/progress-bar-4.png"
            alt="Progress Bar"
          />
        </div>
      </div>

      <div id="services" class="services">
        <h2 className="services-title">Services</h2>
        <h3 class="services-text">
          I offer modern web development with a focus on performance, clean
          design, and SEO. I also provide custom 3D experiences, game
          development, and professional sound engineering for web and media
          projects. Whether you’re launching a website, showcasing art, or
          building immersive content—I help bring your vision to life.
        </h3>
      </div>
      <div class="services-cards">
        <div class="services-card">
          <i class="fa-solid fa-computer services-card-logo"></i>
          <h4 class="services-card-tittle">
            Full Stack <br />
            Web Applications
          </h4>
          <h3 class="services-card-text">
            Full stack web applications using modern technologies—focusing on
            speed, security, and user experience.
          </h3>
        </div>
        <div class="services-card">
          <i class="fa-solid fa-rocket services-card-logo"></i>
          <h4 class="services-card-tittle">
            Website <br />
            Optimization
          </h4>
          <h3 class="services-card-text">
            Optimize websites for faster load times, better SEO, and smoother
            performance across all devices and browsers.
          </h3>
        </div>
        <div class="services-card">
          <i class="fa-solid fa-gamepad services-card-logo"></i>
          <h4 class="services-card-tittle">
            Game <br />
            Development
          </h4>
          <h3 class="services-card-text">
            Create interactive game experiences using Unreal Engine, blending
            design, logic, and fun gameplay.
          </h3>
        </div>
        <div class="services-card">
          <i class="fa-solid fa-headphones services-card-logo"></i>
          <h4 class="services-card-tittle">
            Sound <br />
            Design
          </h4>
          <h3 class="services-card-text">
            Design and mix audio for games, web, and media—enhancing immersion
            with custom sound effects and rich textures.
          </h3>
        </div>
      </div>

      <div id="projects" class="projects">
        <h2 className="projects-tittle">My Projects</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000, // Time between slides in ms
            disableOnInteraction: true, // Continue autoplay after interaction
          }}
          className="mySwiper"
        >
          {/* Centrl */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="http://app.centrl.studio">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />

                  <video
                    src="/portafolio-gregg/assets/projects/centrl.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mockup-video"
                  />
                </div>
              </a>

              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">CENTRL</h1>
                <h2 className="swiper-slide-content-text">
                  Centrl is a full-featured web platform connecting musicians
                  with studios and sound engineers for rehearsal, recording,
                  mixing, and mastering. I led the entire front-end development,
                  building a responsive UI, real-time calendar with booking
                  display, multilingual support, messaging, and a secure payment
                  system. I also focused on SEO and performance optimization to
                  ensure the site is fast, discoverable, and user-friendly.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          {/* Artiom*/}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="http://app.centrl.studio">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />

                  <video
                    src="/portafolio-gregg/assets/projects/artiom.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mockup-video"
                  />
                </div>
              </a>

              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">ARTIOM</h1>
                <h2 className="swiper-slide-content-text">
                  Artiom is a fully custom virtual art gallery built in Unreal
                  Engine, designed to offer an immersive experience for
                  exploring digital art. I handled the complete architectural
                  design, character setup, and environment creation. All
                  artworks were curated and integrated into the 3D space, with
                  custom logic developed for viewing pieces in both 2D and 3D. I
                  also implemented all interactions and UI, produced
                  high-quality renders for promotional use, and deployed the
                  project online for public access.
                </h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Image Buddy */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="https://d3mmom5lrew750.cloudfront.net/">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />
                  <iframe
                    src="https://d3mmom5lrew750.cloudfront.net/"
                    title="Image Buddy"
                    className="mockup-iframe"
                  ></iframe>
                </div>
              </a>
              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">IMAGE BUDDY</h1>
                <h2 className="swiper-slide-content-text">
                  Image Buddy is a brutalist-style image search engine powered
                  by the Unsplash API. I designed and developed the entire front
                  end, creating a fast and intuitive interface for users to
                  search, view, download, and save images. The app includes
                  features like responsive search, image preview, and a system
                  to like and store favorite images, delivering a seamless and
                  functional user experience.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          {/* Hotel Miranda */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="https://greggcarem.github.io/Hotel-Miranda/">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />
                  <iframe
                    src="https://greggcarem.github.io/Hotel-Miranda/"
                    title="Hotel Miranda"
                    className="mockup-iframe"
                  ></iframe>
                </div>
              </a>
              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">Hotel Miranda</h1>
                <h2 className="swiper-slide-content-text">
                  Hotel Miranda is a fully responsive hotel website showcasing
                  available rooms, amenities, and services, built for an optimal
                  user experience. I developed the complete front end, focusing
                  on clean design and usability, and integrated a dynamic
                  booking system that allows users to check availability and
                  make reservations directly through the site.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          {/* Hotel Miranda Dashbaord */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="https://d2z2habo6fctjo.cloudfront.net/">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />
                  <iframe
                    src="https://d2z2habo6fctjo.cloudfront.net/"
                    title="Hotel Miranda"
                    className="mockup-iframe"
                  ></iframe>
                </div>
              </a>
              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">
                  Hotel Miranda Dashboard
                </h1>
                <h2 className="swiper-slide-content-text">
                  The Hotel Miranda Dashboard is a backend platform for hotel
                  staff to manage bookings, check room availability, and view
                  customer profiles. I developed the entire site and API, with
                  data securely hosted on AWS S3. It streamlines hotel
                  operations with real-time access to reservations and guest
                  info.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          {/* Oxygen Shop */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="https://greggcarem.github.io/OxygenShop/">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />
                  <iframe
                    src="https://greggcarem.github.io/OxygenShop/"
                    title="Oxygen Shop"
                    className="mockup-iframe"
                  ></iframe>
                </div>
              </a>
              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">Oxygen Shop</h1>
                <h2 className="swiper-slide-content-text">
                  Oxygen Shop is a stylish sales page built to promote a web
                  hosting system with dynamic features and customizable
                  packages. I designed and developed the full site using Swiper
                  for interactive image sliders and JavaScript for dynamic
                  behavior and form logic, creating a seamless, responsive user
                  experience.
                </h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Periodic Table */}
          <SwiperSlide>
            <div className="swiper-slide-main">
              <a href="https://greggcarem.github.io/Periodic-Table-/">
                <div className="mockup-wrapper">
                  <img
                    src="/portafolio-gregg/assets/projects/mockup.png"
                    alt="Mockup"
                    className="mockup-img"
                  />
                  <iframe
                    src="https://greggcarem.github.io/Periodic-Table-/"
                    title="Centrl App"
                    className="mockup-iframe"
                  ></iframe>
                </div>
              </a>
              <div className="swiper-slide-content">
                <h1 className="swiper-slide-content-tittle">Periodic Table</h1>
                <h2 className="swiper-slide-content-text">
                  Periodic Table is a fully interactive web project I developed
                  to strengthen my JavaScript skills. Built entirely with JS, it
                  displays all chemical elements with dynamic styling and
                  interactivity, showcasing real-time element information and
                  smooth transitions for an engaging educational experience.
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="lets-work">
        <h2 class="lets-work-tittle">Let’s Work Together</h2>
        <div class="lets-work-input">
          <input
            class="lets-work-email"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email "
          />

          <button className="lets-work-btn" onClick={handleContact}>
            Contact Me
          </button>
        </div>
      </div>

      <footer className="footer" id="contact">
        <div className="footer-links">
          <a
            href="https://www.instagram.com/gregg.rott/"
            target="_blank"
            rel="linked"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://es.linkedin.com/in/gregoirecareme"
            target="_blank"
            rel="linked"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://github.com/GreggCarem" target="_blank" rel="linked">
            <i class="fa-brands fa-github"></i>
          </a>

          <a href="gregor.ten1@gmail.com">
            {" "}
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p className="footer-credit">
          © {new Date().getFullYear()} Gregoire Careme. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
