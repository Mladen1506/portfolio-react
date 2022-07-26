import React from 'react';
import { staticFolder } from '../utils/url-lib';
import PortfolioItem from './PortfolioItem';
import { ajax } from '../utils/ajax-adapter';
import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import SliderProjects from './SliderProjects';


const PageHome = (props) => {

  const preset = {
    youremail: '',
    text: ''
  };

  const [state, setState] = useState(preset);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.location.href = "mailto:address@gmail.com";
    /*
    const formData = {
      readme: 'Temp data',
      youremail: 'test@gmail.com',
      text: 'Hello this is test...'
    };
    */
    const formData = state;
    ajax.sendContactEmail(formData);
  };

  return (
    <div className="sections">
      <section className="intro" id="intro">
        <div className="imgContainer">
        </div>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mladen Makivic</h1>
          <h3><ReactTypingEffect
            text={["Full Stack Web Developer"]}
          /></h3>
          <div className="social"><a href="https://www.linkedin.com/in/mladen-makivic-181782198/" target="_blank">
            <img className="icone" src={staticFolder() + "/img/linkedin.png"} alt="" /></a>
            <a href="https://github.com/Mladen1506" target="_blank">
              <img className="icone" src={staticFolder() + "/img/github.png"} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005717924831" target="_blank">
              <img className="icone" src={staticFolder() + "/img/facebook.png"} alt="" />
            </a>
            <a href="https://www.instagram.com/mladen_makivic1/" target="_blank">
              <img className="icone inst" src={staticFolder() + "/img/insta.png"} alt="" />
            </a>
          </div>
          <div className="buttons">
            <a href="/#portfolio" >Portfolio</a>
            <a target="_blank" href="/static/resume/Mladen_Makivic_Resume.pdf">Resume</a>
          </div>

        </div>
        <a href="#portfolio" id="arrow">
          <img src={staticFolder() + "/img/arrow.png"} alt="" /></a>
      </section>

      <section className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <div className="container">
          <PortfolioItem title="Azure Dream Day Spa" imagePath="/img/azure.png" fragment="azureapp" />
          <PortfolioItem title="Hiking App" imagePath="/img/hiking.png" fragment="hikingapp" />
          <PortfolioItem title="My Portfolio" imagePath="/img/portfolio.png" fragment="portfolio" />
          <PortfolioItem title="Weather App" imagePath="/img/weather.png" fragment="weatherapp" />
          <PortfolioItem title="Horiseon" imagePath="/img/horizeon.png" fragment="horizeon" />
          <PortfolioItem title="Budget Tracker" imagePath="/img/budget.png" fragment="budgettracker" />
        </div>
      </section>


      <SliderProjects />


      <section className="contact" id="contact">
        <div className="left">
          <img src={staticFolder() + "/img/shake.svg"} alt="hand shake" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form id="myForm" onSubmit={handleSubmit}><label>
            <input
              disabled
              name="youremail"
              value={state.email}
              onChange={handleChange}
              type="email"
              id="email"
              placeholder="Your email..."
              required=""
            />
          </label>
            <label>
              <textarea
                disabled
                name="text"
                value={state.text}
                onChange={handleChange}
                id="text"
                placeholder="Write something..."
                required=""
              />
            </label>
            <button type="submit" disabled>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PageHome;