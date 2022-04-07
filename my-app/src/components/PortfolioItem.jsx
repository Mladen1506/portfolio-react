import { useDispatch } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import { staticFolder } from "../utils/url-lib";

const PortfolioItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(actionRouteSet('PROJECTS'));
  };
  return (
    <a href="/projects#burger" onClick={handleClick}>
      <div className="item">
        <img src={staticFolder() + "/img/burger.png"} alt="test burger" />
        <h3>React Burger Builder</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;