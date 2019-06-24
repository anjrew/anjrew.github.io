/* eslint-disable no-mixed-spaces-and-tabs */
export default function reducer(state = {}, action) {
    console.log('IN reducer with action ', action, ' and state ', state);

    switch (action.type) {
        case "SHOW_PROJECT":
            return { ...state, showProject: action.project };
			
        default:
            return state;
    }
    
}