import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { actionRouteSet, actionRouteWithHashSet } from "../redux/actions";

const Drawer = (props) => {
  const dispatch = useDispatch();
  const drawerOpened = useSelector(state => state.drawerOpened);
  // const navigate = useNavigate();

  const handleClickHome = (e) => {
    e.preventDefault();
    dispatch(actionRouteWithHashSet('HOME', 'intro'));
    // navigate('/');
  };
  const handleClickPortfolio = (e) => {
    e.preventDefault();
    dispatch(actionRouteWithHashSet('HOME', 'portfolio'));
    // navigate('/');
  };
  const handleClickProjects = (e) => {
    e.preventDefault();
    dispatch(actionRouteSet('PROJECTS'));
    // navigate('/projects');
  };
  const handleClickContact = (e) => {
    e.preventDefault();
    dispatch(actionRouteWithHashSet('HOME', 'contact'));
    // navigate('/');
  };
  return (
    <div className={drawerOpened ? "drawer opened" : "drawer"}>
      <ul className="menuItems">
        <li className="menuItem">
          <a href="#intro" onClick={handleClickHome}>Home</a>
        </li>
        <li className="menuItem">
          <a href="#portfolio" onClick={handleClickPortfolio}>Portfolio</a>
        </li>
        <li className="menuItem">
          <a href="#projects" onClick={handleClickProjects}>Projects Overview</a>
        </li>
        <li className="menuItem">
          <a href="#contact" onClick={handleClickContact}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;