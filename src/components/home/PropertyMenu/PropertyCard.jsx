import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ propertyCard }) => {
    const { cardImage, cardText, cardTitle } = propertyCard
    return (
        <div className="card">
            <img src={cardImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text"> {cardText} </p>
                <Link to="/error" className="btn">More Details</Link>
            </div>
        </div>
    )
}

export default PropertyCard
