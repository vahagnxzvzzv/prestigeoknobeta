import React from "react";
import classes from './Footer.module.css'
import logo_blue from '../Assets/prestige_okno_logo_blue.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
                <a href="/">Главная</a>
                <a href="/profiles">Профили</a>
                <a href="/our_works">Наши работы</a>
                </div>
                <div className={classes.second_a_group}>
                <a>Новости и акции</a>
                <a>Отзывы</a>
                <a>Контакты</a>
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