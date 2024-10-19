import React from "react";
import classes from './Reviews.module.css'
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import { useState } from "react";


function Reviews() {


    const [formData, setFormData] = useState({
        name: '',
        grade: '',
        review: '',
        date: '',
    })

    const [reviews, setReviews] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString();
        setReviews([...reviews, {...formData, date: currentDate}])
        setFormData({
            name: '',
            grade: '',
            review: '',
            date: '',
        })
    }

    return (
        <div className={classes.reviews}>

        <div>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <ReviewsCard
                            reviewAuthor={review.name}
                            reviewGrade={review.grade}
                            reviewDate={review.date}
                            reviewDescription={review.review}
                         />
                    ))
                ) : (
            <p className={classes.noRivewsAlert}>Пока нет отзывов.</p>
                )}
        </div>
        <form onSubmit={handleSubmit} className={classes.review_form}>
            <h2>Оставьте отзыв</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Имя*"
          required
        />
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          placeholder="Оценка*"
          required
        />
        <textarea
          type="email"
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Отзыв*"
          required
        />
        <button type="submit">Отправить</button>
      </form>

        </div>
    )
}


export default Reviews