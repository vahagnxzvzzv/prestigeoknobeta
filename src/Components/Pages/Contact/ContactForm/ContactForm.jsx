import React from "react";
import classes from './Contact.module.css'


function ContactForm() {
    return (
        <div className={classes.contactForm}>
            <h1>Связаться с нами</h1>

            <form>
                <input
                    placeholder="Имя*"
                    type="text"
                />
                <input
                    placeholder="Фамилия*"
                    type="text"
                />
                <input
                    placeholder="E-mail*"
                    type="email"
                />
                <textarea 
                    placeholder="Напишите....*"
                    
                />
                <a href="/contact">Отправить</a>
            </form>
        </div>
    )
}


export default ContactForm