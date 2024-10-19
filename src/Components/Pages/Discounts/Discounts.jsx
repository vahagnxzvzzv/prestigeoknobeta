import React from "react";
import classes from './Discounts.module.css'
import DiscountCard from "./DiscountCard/DiscountCard";
import bargain from '../../Assets/bargain.svg'


function Discounts() {
    return (
        <div className={classes.discountContainer}>
            <h1 className={classes.discountsLabel}>Новости и акции</h1>
            <DiscountCard 
                discountLabel={'Выгодная покупка'}
                discountImage={bargain}
                discountDescription={'5-камерный профиль по цене 3-камерного!'}
                discountDate={'01.07.2021'}
            />
            <DiscountCard 
                discountLabel={'Рассрочка'}
                discountImage={bargain}
                discountDescription={'Мы понимаем, что покупка новых окон сопровождается определёнными вложениями, и порой не всегда удобно сразу выделять всю сумму. Специально для таких случаев компания «Престиж» внедрила собственную программу рассрочки.'}
                discountDate={'10.01.2020'}
            />
            <DiscountCard 
                discountLabel={'Скидки молодым и многодетным семьям'}
                discountImage={bargain}
                discountDescription={'Наша компания является семейной компанией. Мы как никто другой знаем, что такое семейные ценности, забота о близких людях. В знак заботы о своем клиенте, мы подготовили специальные условия.'}
                discountDate={'17.11.2019'}
            />
            <DiscountCard 
                discountLabel={'Скидка пенсионерам'}
                discountImage={bargain}
                discountDescription={'Мы с уважением относимся к людям пожилого возраста, ветеранам ВОВ и пенсионерам, поэтому рады предложить дополнительную скидку на все виды услуг.'}
                discountDate={'03.10.2019'}
            />
        </div>
    )
}


export default Discounts