// ACTION TYPES CONSTANTS

export const ROUTE_SET = 'ROUTE_SET';
export const DRAWER_OPEN = 'DRAWER_OPEN';

// ACTION CREATORS
export const actionRouteSet = (name) => {
    return {
        type: ROUTE_SET,
        payload: name
    };
};

export const actionDrawerOpen = () => {
    return {
        type: DRAWER_OPEN,
    };

};