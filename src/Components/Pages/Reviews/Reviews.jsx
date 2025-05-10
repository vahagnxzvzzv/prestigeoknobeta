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
            const response = await axios.get('https://api.okna-prestige34.ru/reviews');
            setReviews(response.data)
        } catch(error) {
            console.log('fetch error',error)
        }
    }

    const addReview = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://api.okna-prestige34.ru/reviews', newReview);
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
          <title>Отзывы клиентов о Okna-Prestige34 | Балконы, окна, входные группы</title>
        <meta
          name="description"
          content="Читай отзывы клиентов о компании Okna-Prestige34. Узнай, почему нас выбирают для установки окон, балконов, лоджий и входных групп в Волгограде."
        />
        <meta
          name="keywords"
          content="отзывы о компании Okna-Prestige34 Волгоград, отзывы о пластиковых окнах и их установке, клиенты о ремонте балконов и лоджий, отзывы о входных группах на заказ, реальные отзывы клиентов о строительных услугах, положительные отзывы об остеклении балконов, честные отзывы об установке окон и дверей, что говорят клиенты о Okna-Prestige34, пользовательские отзывы о пластиковых окнах в Волгограде, впечатления клиентов от ремонта лоджий, качественные балконы отзывы клиентов, опыт клиентов об установке входных групп Волгоград, мнение пользователей о пластиковых окнах и утеплении, комментарии о профессиональном остеклении лоджий, отзывы о надежности компании Okna-Prestige34, отзывы о компании Okna-Prestige34, отзывы о пластиковых окнах, балконах, лоджиях, входных группах, отзывы о строительных услугах"
        />
        <meta property="og:title" content="Отзывы клиентов о Okna-Prestige34" />
        <meta
          property="og:description"
          content="Посмотрите отзывы наших довольных клиентов о компании Okna-Prestige34. Мы предлагаем качественные услуги по установке окон, дверей, балконов и лоджий."
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