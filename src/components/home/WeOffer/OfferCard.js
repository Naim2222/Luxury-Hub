import React from 'react'

function OfferCard({ offerItem }) {
    const { Icon, text, description } = offerItem
    return (
        <div className="offerCard">
            <div>
                <Icon className="offerCard_icon" />
            </div>


            <h3>{text}</h3>
            <p>{description}</p>

        </div>
    )
}

export default OfferCard
