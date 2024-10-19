import React from "react";
import classes from './ProductExtended.module.css'


function ProductExtendedDescription(props) {
    return (
        <div className={classes.extendedProductContainer}>
            <h3>{props.extendedDescription}</h3>
        </div>
    )
}

export default ProductExtendedDescription