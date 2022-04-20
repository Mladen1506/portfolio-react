import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectBudgetTracker = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="budgettracker">Budget Tracker</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/budget.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/budget-tracker" rel="">GitHub</a>
            <a target="_blank" href="https://nw-budget-app.herokuapp.com/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JavaScript</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">This project is an application that allows users to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the changes will be reflected when they're brought back online. This application uses IndexDB, Service workers, and Web Manifest for offline functionality and is deployed on Heroku.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectBudgetTracker;