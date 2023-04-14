import {SETTINGS_RESET, UPDATE_SETTINGS} from "../actionTypes";

export const resetSettings = () => async (dispatch) => {
    try {
        return dispatch({ type: SETTINGS_RESET })
    } catch (error) {
        console.error('[settings][resetSettings] Error:', error)
    }
}
export const updateSettings = (selected_microphones, store_on_sd_card) => async (dispatch) => {
    try {
        return dispatch({ type: UPDATE_SETTINGS, store_on_sd_card:store_on_sd_card,selected_microphones: selected_microphones })
    } catch (error) {
        console.error('[settings][updateSettings] Error:', error)
    }
}