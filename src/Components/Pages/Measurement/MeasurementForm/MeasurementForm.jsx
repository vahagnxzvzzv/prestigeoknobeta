import React, {useRef, useState}  from "react";
import classes from './MeasurementForm.module.css'
import emailjs, { send } from '@emailjs/browser'




function MeasurementForm() {

    const form = useRef()
    const [isSend, setIsSend] = useState(false)

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm('service_ic8322i', 'template_cjbbd88', form.current, 'zeMKUPFblTG2c84uA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            }
        )
        setIsSend(true)
    }

    return (
        <form ref={form} onSubmit={sendEmail} className={classes.measurementForm}>
            <input 
                placeholder="Ваше имя*"
                type="text"
                name="user_name"
                required
            />
            <input 
                placeholder="Ваш телефон*"
                type="number"
                name="user_phone"
                required
            />
            <textarea 
                placeholder="Комментарий*"
                type="text"
                name="user_description"
                required
            />
            { isSend && <p style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>Ваш замер был успешно отправлен</p> }
            <button type="submit">Отправить</button>
        </form>
    )
}

export default MeasurementForm