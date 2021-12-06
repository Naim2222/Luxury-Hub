import React from 'react'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import PhoneIcon from '@material-ui/icons/Phone'
import OfferCard from './OfferCard';
import './WeOffer.css'

function WeOffer() {
    const OfferInfo = [
        {
            Icon: LoyaltyIcon,
            text: 'Loyalty Programs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum cum dolorum quidem!'
        },
        {
            Icon: LoyaltyIcon,
            text: '10 Years Experience',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum cum dolorum quidem!'
        },
        {
            Icon: LoyaltyIcon,
            text: 'Always the best value',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum cum dolorum quidem!'
        },
        {
            Icon: PhoneIcon,
            text: '24 Hours custom services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquam accusantium eum cum dolorum quidem!'
        },
        {
            Icon: LoyaltyIcon,
            text: 'Always the best value',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum cum dolorum quidem!'
        },
        {
            Icon: PhoneIcon,
            text: '24 Hours custom services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquam accusantium eum cum dolorum quidem!'
        },
    ]
    return (
        <div className="weOffer" id="offers">
            <h1 className="pt-4 text-center" style={{ color: "rgb(3, 167, 153)" }}>What we offer</h1>
            <div>


                <div className="offer_row">

                    {
                        OfferInfo.map((offerItem) => (
                            <OfferCard offerItem={offerItem} />
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default WeOffer
