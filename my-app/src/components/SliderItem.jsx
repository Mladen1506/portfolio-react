import { prependOnceListener } from "process";
import { staticFolder } from "../utils/url-lib";

const SliderItem = (props) => {
  return (
    <div className="slider-item">
      {props.children}
    </div>
  );
};

export default SliderItem;