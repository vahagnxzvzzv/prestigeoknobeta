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
            <title>Контактная информация | Okna-Prestige34</title>
        <meta
          name="description"
          content="Свяжитесь с компанией Okna-Prestige34 для получения консультации по установке окон, балконов, лоджий и входных групп. Мы всегда рады помочь!"
        />
        <meta
          name="keywords"
          content="контакты Okna-Prestige34 в Волгограде, как связаться с Okna-Prestige34, консультация по установке пластиковых окон и дверей, консультации по ремонту балконов и лоджий Волгоград, заказать входные группы на сайте Okna-Prestige34, телефон и адрес Okna-Prestige34, поддержка клиентов Okna-Prestige34, отправить запрос в компанию по остеклению окон и балконов, форма связи с Okna-Prestige34, контактные данные для установки окон и балконов в Волгограде, быстрый ответ на вопросы по ремонту лоджий и дверей, профессиональная консультация Okna-Prestige34, доступная связь с монтажниками пластиковых окон, помощь и поддержка по проектам остекления лоджий и балконов, консультация по выбору энергоэффективных окон, контакты Okna-Prestige34, как связаться с компанией Okna-Prestige34, консультация по установке окон, балконов, лоджий, входных групп"
        />
        <meta property="og:title" content="Контактная информация | Okna-Prestige34" />
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