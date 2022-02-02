import { GET_DATA } from "./Actions";
const initialState = {
    apiData: [],
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                apiData: action.payload
            };
        default:
            return state;
    }
}
export default userReducer;