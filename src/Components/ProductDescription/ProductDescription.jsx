import React from "react";
import classes from './ProductDescription.module.css'
import plasticwindow from '../Assets/plasticwindow_img.svg'

function ProductDescription(props) {
    return (
        <div className={classes.productDescriptionContainer}>
            <h1>{props.productName}</h1>
            <div className={classes.productDescriptionInfo}>
                <img src={props.productImage} />
                <p>{props.productDescription}</p>
            </div>
        </div>
    )
}

export default ProductDescription