import React from 'react';
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { staticFolder } from '../utils/url-lib';
import PortfolioItem from './PortfolioItem';
import SliderItem from './SliderItem';


const PageHome = (props) => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 50,
      showCursor: true,
      strings: ["Full Stack Web Developer"]
    })
  }, [])

  return (
    <div className="sections">
      <section className="intro" id="intro">
        <div className="imgContainer">
        </div>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mladen Makivic</h1>
          <h3><span ref={textRef}></span><span className="ityped-cursor"></span></h3>
          <div className="social"><a href="https://www.linkedin.com/feed/" target="_blank">
            <img className="icone" src={staticFolder() + "/img/linkedin.png"} alt="" />
          </a>
            <a href="https://github.com/Mladen1506" target="_blank">
              <img className="icone" src={staticFolder() + "/img/github.png"} alt="" />
            </a>
            <a href="https://www.facebook.com/home.php" target="_blank">
              <img className="icone" src={staticFolder() + "/img/facebook.png"} alt="" />
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
              <img className="icone inst" src={staticFolder() + "/img/insta.png"} alt="" />
            </a>
          </div>
          <div className="buttons">
            <a href="/#portfolio" >Portfolio</a>
            <a href="/resume">Resume</a>
          </div>
        </div>
        <a href="#portfolio" id="arrow">
          <img src={staticFolder() + "/img/arrow.png"} alt="" /></a>
      </section>

      <section className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <div className="container">

          <PortfolioItem title="Weather App" imagePath="/img/weather.png" fragment="weatherapp" />
          <PortfolioItem title="Horizeon" imagePath="/img/horizeon.png" fragment="horizeon" />
          <PortfolioItem title="Budget Tracker" imagePath="/img/budget.png" fragment="budgettracker" />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </section>

      <section className="slider-container">
        <div className="slider">
          <SliderItem />
        </div>
        <img src={staticFolder() + "/img/arrow.png"} className="arrow left" alt="" />
        <img src={staticFolder() + "/img/arrow.png"} className="arrow right" alt="" />
      </section>

      <section className="contact" id="contact">
        <div className="left">
          <img src={staticFolder() + "/img/shake.svg"} alt="hand shake" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form id="myForm"><label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Your email..."
              required=""
            />
          </label>
            <label>
              <textarea
                name="text"
                id="text"
                placeholder="Write something..."
                required=""
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
    //   </div>



    // </div>
  );
}

export default PageHome;