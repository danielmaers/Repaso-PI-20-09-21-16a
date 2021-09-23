import axios from 'axios'
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const RESET_ALL_CHARACTERS = "RESET_ALL_CHARACTERS"

export const getCharacters = ({page, order, name})=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/characters?page=${page?page:1}&order=${order?order:""}&name=${name?name:""}`)
        .then(characters =>{
            return dispatch({
                type: GET_ALL_CHARACTERS,
                payload: characters.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}





