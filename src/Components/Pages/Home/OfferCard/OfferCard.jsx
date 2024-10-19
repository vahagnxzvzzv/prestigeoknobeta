import React from "react";
import classes from './OfferCard.module.css'

function OfferCard(props) {
    return (
        <div className={classes.card}>
            <img src={props.offer_image} />
            <a href={props.offer_link}>{props.offer_button_title}</a>
        </div>
    )
}

export default OfferCard