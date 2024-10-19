import React from "react";
import classes from './Discount.module.css'
import bargain from '../../../Assets/bargain.svg'


function DiscountCard(props) {
    return (
        // <a href='/discount_item'>
        <div className={classes.cardContainer}>
            <h1>{props.discountLabel}</h1>
            <div className={classes.discountDescription}>
                <img src={props.discountImage} />
                <div className={classes.discountInfo}>
                <h2>{props.discountDescription}</h2>
                <p>{props.discountDate}</p>
                </div>
            </div>
        </div>
        // </a>
    )
}


export default DiscountCard