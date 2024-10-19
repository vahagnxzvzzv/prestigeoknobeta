import React from "react";
import classes from './Contact.module.css'
import ContactInformation from "./ContactInformation/ContactInformation";
import YandexMaps from "../../YandexMaps/YanexMaps";
import ContactForm from "./ContactForm/ContactForm";


function Contact() {
    return (
        <div className={classes.contact}>
            <h1>Контакты</h1>
            <ContactInformation />
            <div className={classes.yandexMaps}>
            <YandexMaps />
            <ContactForm />
            </div>
        </div>
    )
}

export default Contact