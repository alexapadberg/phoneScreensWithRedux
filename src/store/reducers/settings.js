import {SETTINGS_RESET, UPDATE_SETTINGS} from "../actionTypes";


const initialState = {
   //settings properties
    selected_microphones: [],
    store_on_sd_card: false

}
export const settings = (state = initialState, action = {}) => {
    switch (action.type) {
        case SETTINGS_RESET: {
            return JSON.parse(JSON.stringify(initialState));
        }
         case UPDATE_SETTINGS: {
             console.log(`[UPDATE_SETTINGS] ${action.value}`);
             return {
                 ...state,
                 //variables to pass
                 selected_microphones: action.selected_microphones,
                 store_on_sd_card: action.store_on_sd_card
             }
         }
        default:
            return state
    }
}