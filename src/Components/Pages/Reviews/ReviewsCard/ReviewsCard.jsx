import React from "react";
import classes from './ReviewsCard.module.css'



function ReviewsCard(props) {
    return (
        <div className={classes.reviewsCard}>
            <h3>Имя: {props.reviewAuthor}</h3>
            <h3>Оценка: {props.reviewGrade}</h3>
            <p className={classes.reviewDescription}>Отзыв: {props.reviewDescription}</p>
            <p className={classes.reviewDate}>{props.reviewDate}</p>
        </div>
    )
}


export default ReviewsCard