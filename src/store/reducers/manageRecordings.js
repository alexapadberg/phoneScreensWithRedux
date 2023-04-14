import {SEARCH_NAME, SELECT_RECORDING} from "../actionTypes";


const initialState = {
    //settings properties
    recordings: [],
    is_recording_selected: false

}
export const manageRecordings = (state = initialState, action = {}) => {
    switch (action.type) {
        case SEARCH_NAME: {
            return JSON.parse(JSON.stringify(initialState));
        }
        case SELECT_RECORDING: {
            console.log(`[UPDATE_SETTINGS] ${action.value}`);
            return {
                ...state,
                //variables to pass
                recordings: action.recordings,
                is_recording_selected: action.recordings
            }
        }
        default:
            return state
    }
}