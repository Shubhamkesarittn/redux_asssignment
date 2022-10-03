import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CardComponent = () =>{
    const listings = useSelector((state) => state.allListing.listing);
    
    // const { id, title } = products[0];
    const renderList = listings.map((listing) => {
        const {id, title, body } = listing;
        return(
            <div className='col-sm-12' key={id}>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5 className="card-title text-uppercase">{ title }</h5>
                        {/* <h4 className="text-uppercase">{ title }</h4> */}
                        <p className="card-text"> { body }</p>
                    </div>
                </div>
            </div>
        )
    });
    return <>{ renderList }</>;
}

export default CardComponent;