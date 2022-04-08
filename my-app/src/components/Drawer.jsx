import { useSelector } from "react-redux";

const Drawer = (props) => {
  const drawerOpened = useSelector(state => state.drawerOpened);
  return (
    <div className={drawerOpened ? "drawer opened" : "drawer"}>drawer...</div>
  );
};

export default Drawer;