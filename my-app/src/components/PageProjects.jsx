import ProjectBudgetTracker from "./ProjectBudgetTracker";
import ProjectHorizeon from "./ProjectHorizeon";
import ProjectWeather from "./ProjectWeather";


const PageProjects = (props) => {
  return (
    <div className="projectsPage">
      <div className="projects_container">

        <ProjectHorizeon></ProjectHorizeon>
        <ProjectWeather></ProjectWeather>
        <ProjectBudgetTracker></ProjectBudgetTracker>
      </div>
    </div>
  );
};

export default PageProjects;