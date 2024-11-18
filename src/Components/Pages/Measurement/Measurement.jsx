import React from "react";
import classes from './Measurement.module.css'
import MeasurementForm from "./MeasurementForm/MeasurementForm";
import { Helmet } from "react-helmet-async";

function Measurement() {
    return (
        <div className={classes.measurementContainer}>
            <Helmet>
            <title>Измерения | Okna-Prestige34</title>
        <meta
          name="description"
          content="Получите точные измерения для пластиковых окон, балконов и лоджий. Узнайте, как правильно провести замеры для установки."
        />
        <meta
          name="keywords"
          content="измерения окон, замеры пластиковых окон, замеры балконов, замеры лоджий, измерения для окон, как измерить окна"
        />
        <meta property="og:title" content="Измерения | Okna-Prestige34" />
        <meta
          property="og:description"
          content="Правильные измерения для установки окон, балконов и лоджий. Узнайте, как провести точные замеры для качественной установки."
        />
        <link rel="canonical" href="localhost:3000/measurement" />
      </Helmet>
            <h1>Записаться на замер</h1>
            <MeasurementForm />
        </div>
    )
}

export default Measurement