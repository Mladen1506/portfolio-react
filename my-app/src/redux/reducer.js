import { DRAWER_CLOSE, DRAWER_OPEN, ROUTE_SET, ROUTE_WITH_FRAGMENT_SET } from "./actions";

const initialState = {
  route: 'HOME',
  routeFreshness: 0,
  routeFragment: null,
  drawerOpened: false
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    
    case ROUTE_SET:
      return {
        ...state,
        route: action.payload,
        routeFreshness: state.routeFreshness + 1,
        routeFragment: ''
      };

    case ROUTE_WITH_FRAGMENT_SET:
      return {
        ...state,
        route: action.payload.name,
        routeFreshness: state.routeFreshness + 1,
        routeFragment: action.payload.fragment
      };
      

    case DRAWER_OPEN:
      return {
        ...state,
        drawerOpened: true
      };

    case DRAWER_CLOSE:
      return {
        ...state,
        drawerOpened: false
      };


    default:
      return state;
  }
};

export default rootReducer;