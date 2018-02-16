import axios from 'axios';

const initialState = {
    pets: [],
    pet: [],
    starwars: [],
    name: '',
    url: '',
    weight: 0
}

const ADD_PET = 'ADD_PET';
const GET_PET = 'GET_PET';
const GET_DETAILS = 'GET_DETAILS';
const GET_STARWARS = 'GET_STARWARS';
const CREATE_ANIMAL = 'CREATE_ANIMAL';
const GRAB_NAME = 'GRAB_NAME';
const GRAB_URL = 'GRAB_URL';
const GRAB_WEIGHT = 'GRAB_WEIGHT';

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

export function createAnimal(){
    console.log('name', initialState.name);
    console.log('url', initialState.url);
    console.log('weight', initialState.weight);
    const data = axios.post('/post/animal',{
        name: initialState.name,
        url: initialState.url,
        weight: initialState.weight
    }).then(res => {
        return res.data
    })
    return {
        type: CREATE_ANIMAL,
        payload: data
    }
}

export function grabName(val){
    console.log(initialState.name);
    return{
        type: GRAB_NAME,
        payload: val
    }
}
export function grabUrl(val){
    return{
        type: GRAB_URL,
        payload: val
    }
}
export function grabWeight(val){
    return{
        type: GRAB_WEIGHT,
        payload: val
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
        case CREATE_ANIMAL + '_FULFILLED':
            return Object.assign({}, state, {pets: action.payload})
        case GRAB_NAME:
            return Object.assign({}, state, {name: action.payload})
        case GRAB_URL:
            return Object.assign({}, state, {url: action.payload})
        case GRAB_WEIGHT:
            return Object.assign({}, state, {weight: action.payload})
        default:
            return state;
    }
}