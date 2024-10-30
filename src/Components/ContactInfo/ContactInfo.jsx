import React from 'react'
import classes from './ContactInfo.module.css'

function ContactInfo(props) {
  return (
    <div className={classes.contactInfo}>
        <h2>По всем вопросам установки {props.productName} и их стоимости обращайтесь по телефонам.</h2>
        <div className={classes.contactInfoPhone}>
        <h2>8 (909) 380-09-09, 8 (8443) 21-07-08</h2>
        </div>
        {/* <a href='/leave_request' className={classes.contactInfoButton}>Оставить заявку</a> */}
    </div>
  )
}

export default ContactInfo