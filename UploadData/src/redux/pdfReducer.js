import { CREATE_PDF_DATA, SET_FILE } from './actions';
const initialState = {
    file: '',
    newPdfData: '',
}
function pdfDataReducer(state = initialState, action) {
    switch (action.type) {
        // case GET_PDF_DATA:
        //     return { ...state, pdfData: action.payload };
        case CREATE_PDF_DATA:
            return { ...state, newPdfData: action.payload }
        case SET_FILE:
            return { ...state,
                 file: action.payload
                 }
            
        default:
            return state;
    }
}
export default pdfDataReducer
