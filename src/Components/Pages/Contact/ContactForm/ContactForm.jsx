import React, { useRef } from "react";
import classes from './Contact.module.css'
import emailjs from '@emailjs/browser'


function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_a8naffh', 'template_6wdbg1q', form.current, 'zeMKUPFblTG2c84uA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        )
    }

    return (
        <div className={classes.contactForm}>
            <h1>Связаться с нами</h1>

            <form ref={form} onSubmit={sendEmail}>
                <input
                    placeholder="Имя*"
                    type="text"
                    name="user_name"
                    required
                />
                <input
                    placeholder="Фамилия*"
                    type="text"
                    name="user_lastname"
                    required
                />
                <input
                    placeholder="E-mail*"
                    type="email"
                    name="user_email"
                    required
                />
                <textarea 
                    placeholder="Напишите....*"
                    name="user_description"
                    required
                    
                />
                <button type="submit" >Отправить</button>
            </form>
        </div>
    )
}


export default ContactForm