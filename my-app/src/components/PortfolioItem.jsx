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
    <a href="/projects#horizeon" onClick={handleClick}>
      <div className="item">
        <img src={staticFolder() + "/img/horizeon.png"} alt="test horizeon" />
        <h3>HTML AND CSS</h3>
      </div>
    </a>
  )
};

export default PortfolioItem;