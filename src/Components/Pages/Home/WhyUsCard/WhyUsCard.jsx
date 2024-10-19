import React from "react";
import classes from './WhyUsCard.module.css'


function WhyUsCard(props) {
    return (
        <div className={classes.whyus}>
            <img src={props.whyus_img} />
            <h3>{props.whyus_title}</h3>
        </div>
    )
}

export default WhyUsCard