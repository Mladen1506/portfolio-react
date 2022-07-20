import { useEffect } from "react";
import { useState } from "react";
import { staticFolder } from "../utils/url-lib";
import ProjectBudgetTracker from "./ProjectBudgetTracker";
import ProjectHorizeon from "./ProjectHorizeon";
import ProjectWeather from "./ProjectWeather";
import SliderItem from "./SliderItem";


const SliderProjects = (props) => {

  const [slideIndex, setSlideIndex] = useState(0);

  let jsxSlides = [
    (
      <SliderItem key={0}>
        <ProjectHorizeon />
      </SliderItem>
    ),
    (
      <SliderItem key={2}>
        <ProjectWeather />
      </SliderItem>
    ),
    (
      <SliderItem key={3}>
        <ProjectBudgetTracker />
      </SliderItem>
    ),
  ];

  const handleClickNext = (e) => {
    // console.log('click slider next');
    setSlideIndex(slideIndex => {
      if (slideIndex < (jsxSlides.length - 1)) {
        // setSlideIndex(slideIndex + 1);
        return slideIndex + 1;
      } else {
        // if last slide
        return 0;
        // setSlideIndex(0); // go to first
      }
    });
  };

  const handleClickPrev = (e) => {
    // console.log('click slider prev');
    setSlideIndex(slideIndex => {
      if (slideIndex === 0) {
        // if first
        // setSlideIndex(jsxSlides.length - 1); // go to last slide
        return jsxSlides.length - 1
      } else {
        // setSlideIndex(slideIndex - 1);
        return slideIndex - 1;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // AUTO ADVANCE NEXT SLIDE
      handleClickNext();
      return () => clearInterval(intervalId);
    }, 5000);
  }, []);

  let offset = (slideIndex * -100) + '%'; // offset in percents

  return (
    <section className="slider-container">
      <div className="slider" style={{ left: offset }}>
        <div className="slides" >
          {jsxSlides}
        </div>
      </div>
      <img src={staticFolder() + "/img/arrow.png"} className="arrow left" alt="" onClick={handleClickPrev} />
      <img src={staticFolder() + "/img/arrow.png"} className="arrow right" alt="" onClick={handleClickNext} />
    </section>
  );
};

export default SliderProjects;