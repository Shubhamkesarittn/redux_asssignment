import { actionTypes } from '../actions/action-types';
import {combineReducers} from "redux";

const intialstate = {
    listing: [
        {
            id: 1,
            title : 'shubham',
        },
    ],
};

export const ListingReducers = (state = intialstate, {type,payload}) =>{
    switch(type){
        case actionTypes.SET_LISTING:
            return {...state, listing:payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    allListing: ListingReducers,
});

export default reducers;