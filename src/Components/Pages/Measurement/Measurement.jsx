import React from "react";
import classes from './Measurement.module.css'
import MeasurementForm from "./MeasurementForm/MeasurementForm";


function Measurement() {
    return (
        <div className={classes.measurementContainer}>
            <h1>Записаться на замер</h1>
            <MeasurementForm />
        </div>
    )
}

export default Measurement