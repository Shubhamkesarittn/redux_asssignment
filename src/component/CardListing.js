import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from './CardComponent';
import { setListing } from '../actions/listingActions';

const CardListing = () =>{

    const listing = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .catch((err) => {
                console.log("Err",err);
            });
            // console.log(response.data);
            dispatch(setListing(response.data));
    }

    useEffect(() => {
        fetchProducts();
    })
    // console.log("listing: ", listing);
    return(
        <div className='container mt-5'>
            <div className='row'>
                <CardComponent />
            </div>
        </div>
    )
}

export default CardListing;