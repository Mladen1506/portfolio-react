import ProjectAzureDream from "./ProjectAzureDream";
import ProjectBudgetTracker from "./ProjectBudgetTracker";
import ProjectHikingApp from "./ProjectHikingApp";
import ProjectHorizeon from "./ProjectHorizeon";
import ProjectPortfolio from "./ProjectPortfolio";
import ProjectWeather from "./ProjectWeather";


const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">
        <ProjectAzureDream />
        <ProjectHikingApp />
        <ProjectPortfolio />
        <ProjectHorizeon />
        <ProjectWeather />
        <ProjectBudgetTracker />
      </div>
    </div>
  );
};

export default PageProjects;