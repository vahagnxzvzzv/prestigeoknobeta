import React from "react";
import classes from './Contact.module.css'
import ContactInformation from "./ContactInformation/ContactInformation";
import YandexMaps from "../../YandexMaps/YanexMaps";
import ContactForm from "./ContactForm/ContactForm";
import { Helmet } from "react-helmet-async";

function Contact() {
    return (
        <div className={classes.contact}>
            <Helmet>
        <title>Prestige Okno - Contact Us</title>
        <meta
          name="description"
          content="Let us be in touch with you!"
        />
        <link rel="canonical" href="localhost:3000/contact" />
      </Helmet>
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