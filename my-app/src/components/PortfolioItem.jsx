import { useDispatch } from "react-redux";
import { actionRouteSet, actionRouteWithHashSet } from "../redux/actions";
import { staticFolder } from "../utils/url-lib";

const PortfolioItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(actionRouteSet('PROJECTS'));
    dispatch(actionRouteWithHashSet('PROJECTS', props.fragment));
  };
  return (
    <a href="/projects#horizeon" onClick={handleClick}>
      <div className="item">
        <img src={staticFolder() + props.imagePath} alt="test horizeon" />
        <h3>{props.title}</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;