import React from 'react';
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { staticFolder } from '../utils/url-lib';
import PortfolioItem from './PortfolioItem';
import SliderItem from './SliderItem';


const Layout = () => {

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
    <div className="layout">


      <div className="topbar false">
        <div className="wrapper">
          <div className="left">
            <a href="/portfolio#intro">
              <div className="logo">m.</div>
            </a>
            <div className="itemContainer"><svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
              <span>
                <a href="callto:+15712963664">+1 (571) 296-3664</a>
              </span>
            </div>
            <div className="itemContainer">
              <svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
              <span>
                <a href="mailto:makivic.mladen1989@gmail.com">makivic.mladen1989@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="right">
            <div className="humburger">
              <span className="line1">
              </span>
              <span className="line2">
              </span>
              <span className="line3">
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-body">
        <div className="sections">
          <section className="intro" id="intro">
            <div className="imgContainer">
            </div>
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Mladen Makivic</h1>
              <h3><span ref={textRef}></span><span className="ityped-cursor"></span></h3>
              <div className="social"><a href="https://www.linkedin.com/in/julia-berezina/" target="_blank">
                <img className="icone" src={staticFolder() + "/img/linkedin.png"} alt="" />
              </a>
                <a href="https://github.com/Berezka-creator" target="_blank">
                  <img className="icone" src={staticFolder() + "/img/github.png"} alt="" />
                </a>
                <a href="https://www.facebook.com/yulia.berezina.16" target="_blank">
                  <img className="icone" src={staticFolder() + "/img/facebook.png"} alt="" />
                </a>
                <a href="https://www.instagram.com/julia_b_samara/" target="_blank">
                  <img className="icone inst" src={staticFolder() + "/img/insta.png"} alt="" />
                </a>
              </div>
              <div className="buttons">
                <a href="/#portfolio">Portfolio</a>
                <a href="/resume">Resume</a>
              </div>
            </div>
            <a href="#portfolio" id="arrow">
              <img src={staticFolder() + "/img/arrow.png"} alt="" /></a>
          </section>

          <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="container">

              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
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
      </div>



    </div>
  );
}

export default Layout;
