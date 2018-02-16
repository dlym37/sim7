import axios from 'axios';

const initialState = {
    pets: [],
    pet: [],
    starwars: []
    

}

const ADD_PET = 'ADD_PET';
const GET_PET = 'GET_PET';
const GET_DETAILS = 'GET_DETAILS';
const GET_STARWARS = 'GET_STARWARS';

export function getPet(){
    const data = axios.get('/get/animals').then(response => {
        // console.log('response', response.data)
        return response.data
    })
    // console.log('data', data)
    return {
        type: GET_PET,
        payload: data
    }
}
export function getStarWars(){
    const data = axios.get('https://swapi.co/api/').then(response => {//SIM1 44C
        // console.log('response', response.data)
        return response.data
    })
    // console.log('data', data)
    return {
        type: GET_PET,
        payload: data
    }
}
export function petDetails(id){
    const data = axios.get('/get/details/'+id).then(res => {
        console.log(res);
        return res.data;
    })
    return {
        type: GET_DETAILS,
        payload: data
    }
}


export default function reducer(state = initialState, action){
    // console.log(action);
    switch (action.type) {
        case GET_PET + '_FULFILLED':
            return Object.assign({}, state, {pets: action.payload});
        case GET_DETAILS + '_FULFILLED':
            return Object.assign({}, state, {pet: action.payload});
        case GET_STARWARS + '_FULFILLED':
            return Object.assign({}, state, {starwars: action.payload});
        default:
            return state;
    }
}