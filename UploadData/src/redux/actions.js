import React from "react";
//text upload
export const GET_ALL_DATA = 'GET_ALL_DATA';
export const SET_DATA = 'SET_DATA';
export const CREATE_DATA = "CREATE_DATA";
const API_URL = 'http://api.rest7.com/v1/wikipedia_search.php?text=tiger&language=en';
export const SET_FILE = 'SET_FILE';
export const CREATE_PDF_DATA = 'CREATE_PDF_DATA';

// fetch(`https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`, {
//   method: "GET",
//   headers: headers,   
// })
export const createData = (newData) => {
    try {
        return async dispatch => {
            const result = await fetch(`http://api.rest7.com/v1/wikipedia_search.php?text=${encodeURIComponent(newData.text)}&language=${encodeURIComponent(newData.language)}`,
                {
                    method: 'POST',
                    //body: newData,
                    headers: {
                        'Content-type': 'application/json; text/plain'
                    },
                })
            console.log('--------------------')
            console.log(result);
            const json = await result.json();
        if (json) {
                dispatch({
                    type: CREATE_DATA,
                    payload: json
                });
                console.log('--------------------')
                console.log(json)
            } else {
                console.log('Unable to Upload!');
            }
            console.log('json-->'+json)
            //fetch 
            if (json.success==1) {
                dispatch({
                    type: SET_DATA,
                    payload: json
                });
                console.log(json)
            }

            else {
                console.log('Unable to fetch!');
            }
        }

    }
    catch (error) {
        console.log(error)
    }
}


export const createPdfData = pdfData => {
    try {
        return async dispatch => {
            const data = new FormData();
            data.append('file', pdfData);
            data.append('content-type', 'application/pdf');
            const pdfResult = await fetch(`http://api.rest7.com/v1/pdf_to_text.php?layout=0`,
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Content-type': 'multipart/form-data;'
                    },
                })
            console.log('--------------------')
            console.log(pdfResult);
            const pdfJson = await pdfResult.json();
            if (pdfJson) {
                dispatch({
                    type: CREATE_PDF_DATA,
                    payload: pdfJson
                });
                console.log('--------------------')
                console.log(pdfJson)
            } else {
                console.log('Unable to Upload!');
            }
            //fetch data
           console.log(pdfJson.success);
            if(pdfJson.success==1){
            dispatch({
                type: SET_FILE,
                payload: pdfJson.file,
              });
              console.log(pdfJson.file+"<--")

            }
        }

    }
    catch (error) {
        console.log(error)
    }
}


