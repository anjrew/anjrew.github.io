/* eslint-disable no-mixed-spaces-and-tabs */
export default function reducer(state = {}, action) {
    // console.log('IN reducer with action ', action, ' and state ', state);

    switch (action.type) {
        case "SHOW_PROJECT":
            return { ...state, showProject: action.project };
        case "DISSMISS_ALL":
            return { ...state, showProject: null };
        case "SET_APP_SIZE":
            return { 
                ...state, 
                mobileApp: action.mobileApp,
                smallScreen: action.smallScreen
			 };
        default:
            return state;
    }
    
}