import React from 'react'
import './PropertyMenu.css';
import cardImage1 from '../../../images/menuImage1.jpg';
import cardImage2 from '../../../images/menuImage2.jpg';
import cardImage3 from '../../../images/menuImage3.jpg';
import cardImage4 from '../../../images/menuImage4.jpg';
import cardImage5 from '../../../images/menuImage5.jpg';
import cardImage6 from '../../../images/menuImage6.jpg';
import PropertyCard from './PropertyCard';


function PropertyMenu() {
    const propertyData = [
        {
            cardImage: cardImage1,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            cardImage: cardImage2,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            cardImage: cardImage3,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            cardImage: cardImage4,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            cardImage: cardImage5,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            cardImage: cardImage6,
            cardTitle: "Property Name",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },

    ]
    return (
        <div className="propertyMenu" id="property">
            <h1 className="text-center pt-5">Our Property Menu</h1>
            <div className="PropertyMenu_row">

                {
                    propertyData.map((propertyData) => (
                        <PropertyCard propertyCard={propertyData} />
                    ))
                }

            </div>

        </div>
    )
}

export default PropertyMenu
