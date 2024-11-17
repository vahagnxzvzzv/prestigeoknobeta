import React, { useEffect } from "react";
import classes from './Reviews.module.css'
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import { useState } from "react";
import axios from 'axios'
import { Helmet } from "react-helmet-async";


function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ reviewCreator: '', reviewGrade: '', reviewDescription: ''})

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:3000/reviews');
            setReviews(response.data)
        } catch(error) {
            console.log('fetch error',error)
        }
    }

    const addReview = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/reviews', newReview);
            setNewReview({reviewCreator: '', reviewGrade: '', reviewDescription: '' });
            fetchReviews()
        } catch (error) {
            console.log('adding review error', error)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    return (
        <div className={classes.reviews}>
          <Helmet>
        <title>Prestige Okno - Reviews</title>
        <meta
          name="description"
          content="Let us know your opinion about our service and products!"
        />
        <link rel="canonical" href="localhost:3000/reviews" />
      </Helmet>
        <div>
                {reviews.map((review) => {
                    return (<ReviewsCard 
                        reviewAuthor={review.reviewCreator}
                        reviewGrade={review.reviewGrade}
                        reviewDescription={review.reviewDescription}
                        reviewDate={review.reviewDate}
                    />
                    )
                })}
        </div>
        <form onSubmit={addReview} className={classes.review_form}>
            <h2>Оставьте отзыв</h2>
        <input
          type="text"
          name="name"
          value={newReview.reviewCreator}
        //   onChange={handleChange}
          onChange={(e) => setNewReview({ ...newReview, reviewCreator: e.target.value })}
          placeholder="Имя*"
          required
        />
        <input
          type="text"
          name="grade"
          value={newReview.reviewGrade}
        //   onChange={handleChange}
          onChange={(e) => setNewReview({ ...newReview, reviewGrade: e.target.value })}

          placeholder="Оценка*"
          required
        />
        <textarea
          type="text"
          name="review"
          value={newReview.reviewDescription}
          onChange={(e) => setNewReview({ ...newReview, reviewDescription: e.target.value })}
          
          placeholder="Отзыв*"
          required
        />
        <button type="submit">Отправить</button>
      </form>

        </div>
    )
}


export default Reviews