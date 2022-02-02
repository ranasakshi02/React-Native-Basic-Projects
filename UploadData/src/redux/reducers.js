import { GET_ALL_DATA,CREATE_DATA,SET_DATA } from './actions';

const initialState = {
    allData: [],
    newData:'',
    
}

function allDataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return { ...state, allData: action.payload };
        case CREATE_DATA:
            return{...state,newData:action.payload}
        default:
            return state;
    }
}
export default allDataReducer;