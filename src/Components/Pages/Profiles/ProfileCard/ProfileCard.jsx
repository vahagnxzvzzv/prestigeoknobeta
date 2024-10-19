import React from "react";
import classes from './ProfileCard.module.css'


function ProfileCard(props) {
    return (
        <div className={classes.profileCard}>
            <img src={props.profileCard_img}/>
            <p>{props.profileCard_paragraph}
            </p>
        </div>
    )
}

export default ProfileCard