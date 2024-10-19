import React from "react";
import classes from './AboutDescription.module.css'

function AboutDescription(props) {
    return (
        <div className={classes.aboutContainer}>
            <h1 className={classes.aboutTitle}>{props.about_title}</h1>
            <p>{props.about_paragraph}</p>
        </div>
    )
}

export default AboutDescription