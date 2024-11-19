import React from "react";
import classes from './OfferCard.module.css'
import { Link } from "react-router-dom";

function OfferCard(props) {
    return (
        <div className={classes.card}>
            <img src={props.offer_image} />
            <Link to={props.offer_link}>{props.offer_button_title}</Link>
        </div>
    )
}

export default OfferCard