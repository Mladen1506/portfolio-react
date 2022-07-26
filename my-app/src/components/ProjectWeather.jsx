import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectWeather = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="weatherapp">Weather Dashboard</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/weather.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/weather-app" rel="">GitHub</a>
            <a target="_blank" href="https://mladen1506.github.io/weather-dashboard/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JavaScript</li>
              <li className="project-tools__item">jQuery</li>
              <li className="project-tools__item">OpenWeatherApi</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">A weather dashboard that provides current and future weather forecasts.App runs in browser, localStorage used to store data.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectWeather;