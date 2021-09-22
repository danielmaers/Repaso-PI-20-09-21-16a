import {
GET_ALL_CHARACTERS,
RESET_ALL_CHARACTERS
}from '../actions/index.js'

const initialState ={
    characters:[],
    character:{},
    episodes:[]
}

export default function reducer (state = initialState, {type, payload}){

    switch (type) {
       
        case GET_ALL_CHARACTERS:
            return {
               ...state,
                characters: payload
            }
        case RESET_ALL_CHARACTERS:
            return {
               ...state,
                characters: []
            }
    
        default:
            return state
    }

}