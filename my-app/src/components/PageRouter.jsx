import { useSelector } from "react-redux";
import PageHome from "./PageHome";
import PageProjects from "./PageProjects";

const PageRouter = (props) => {
  const route = useSelector(state => state.route);

  let jsx = null;
  if(route === 'HOME'){
    jsx = <PageHome />
  } else if (route === 'PROJECTS') {
    jsx = <PageProjects />
  }
  else {
    jsx = (
      <div>Page Not Found</div>
    );
  }

  return (
    <>
    {jsx}
    </>
  );
};

export default PageRouter;