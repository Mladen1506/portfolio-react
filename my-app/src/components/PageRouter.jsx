import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
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
      {/*
      <Routes>
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/" element={<PageHome />} />
      </Routes>
      */}
      {jsx}
    </>
  );
};

export default PageRouter;