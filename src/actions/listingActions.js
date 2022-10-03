import { actionTypes } from "./action-types";

export const setListing = (listing)=> {
   return{
        type: actionTypes.SET_LISTING,
        payload: listing,
   } 
};
