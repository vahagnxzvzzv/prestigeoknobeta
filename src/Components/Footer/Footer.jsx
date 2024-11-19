import React from "react";
import classes from './Footer.module.css'
import logo_blue from '../Assets/prestige_okno_logo_blue.svg'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";



function Footer() {

    const navigate = useNavigate();

    const measurementPage = () => {
        navigate('/measurement')
    }

    return (
        <footer className={classes.footer}>
            <div className={classes.navigation}>
                
                <img src={logo_blue} alt="Prestige Okno Logo"/>
                <div className={classes.first_a_group}>
                <Link to="/">Главная</Link>
                <Link to="/profiles">Профили</Link>
                <Link to="/our_works">Наши работы</Link>
                </div>
                <div className={classes.second_a_group}>
                <Link to="/discounts">Новости и акции</Link>
                <Link to="reviews">Отзывы</Link>
                <Link to="/contact">Контакты</Link>
                </div>
                <div className={classes.navigation_button}>
                <button onClick={measurementPage}>Записаться на замер</button>
                </div>
            </div>
            <p>&copy; 2024 Оконная компания «Престиж»</p>
        </footer>
    )
}

export default Footer