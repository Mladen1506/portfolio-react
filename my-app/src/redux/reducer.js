const initialState = {
    route: 'HOME',
    nesto: 'bla bla'
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ROUTE_SET':
            return {
                ...state,
                route: action.payload
            };


        default:
            return state;
    }
};

export default rootReducer;