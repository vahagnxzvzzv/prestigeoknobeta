import React from "react";
import classes from './Measurement.module.css'
import MeasurementForm from "./MeasurementForm/MeasurementForm";
import { Helmet } from "react-helmet-async";

function Measurement() {
    return (
        <div className={classes.measurementContainer}>
            <Helmet>
        <title>Prestige Okno - Measurement</title>
        <meta
          name="description"
          content="Send us our measurements and needs"
        />
        <link rel="canonical" href="localhost:3000/measurement" />
      </Helmet>
            <h1>Записаться на замер</h1>
            <MeasurementForm />
        </div>
    )
}

export default Measurement