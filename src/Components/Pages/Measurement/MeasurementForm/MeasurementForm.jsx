import React from "react";
import classes from './MeasurementForm.module.css'



function MeasurementForm() {
    return (
        <form className={classes.measurementForm}>
            <input 
                placeholder="Ваше имя*"
                type="text"
                name="name"
                required
            />
            <input 
                placeholder="Ваш телефон*"
                type="number"
                name="phone_number"
                required
            />
            <textarea 
                placeholder="Комментарий*"
                type="text"
                name="comment"
                required
            />
            <button>Отправить</button>
        </form>
    )
}

export default MeasurementForm