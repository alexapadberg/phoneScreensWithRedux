import {SEARCH_NAME, SELECT_RECORDING} from "../actionTypes";

export const searchName = () => async (dispatch) => {
    try {
        return dispatch({ type: SEARCH_NAME })
    } catch (error) {
        console.error('[manageRecordings][searchName] Error:', error)
    }
}
export const selectRecording = (selected_microphones, store_on_sd_card) => async (dispatch) => {
    try {
        return dispatch({ type: SELECT_RECORDING, recordings:recordings, is_recording_selected: is_recording_selected })
    } catch (error) {
        console.error('[settings][updateSettings] Error:', error)
    }
}