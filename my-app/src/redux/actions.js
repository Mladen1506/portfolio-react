// ACTION TYPES CONSTANTS

export const ROUTE_SET = 'ROUTE_SET';
export const ROUTE_WITH_FRAGMENT_SET = 'ROUTE_WITH_FRAGMENT_SET';
export const DRAWER_OPEN = 'DRAWER_OPEN';
export const DRAWER_CLOSE = 'DRAWER_CLOSE';

// ACTION CREATORS
export const actionRouteSet = (name) => {
    return {
        type: ROUTE_SET,
        payload: name
    };
};

export const actionRouteWithHashSet = (name, fragment) => {
  // window.location.hash = fragment;
    return {
      type: ROUTE_WITH_FRAGMENT_SET,
        payload: {
          name,
          fragment
        },
    };
};

export const actionDrawerOpen = () => {
    return {
        type: DRAWER_OPEN,
    };
};

export const actionDrawerClose = () => {
    return {
        type: DRAWER_CLOSE,
    };
};