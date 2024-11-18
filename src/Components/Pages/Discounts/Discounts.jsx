import React, { useEffect, useState } from "react";
import classes from "./Discounts.module.css";
import DiscountCard from "./DiscountCard/DiscountCard";
import bargain from "../../Assets/bargain.svg";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function Discounts() {
  // Initialize discounts as an empty array
  const [discounts, setDiscounts] = useState([]);

  // Fetch discounts from the API
  const fetchDiscounts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/discounts"); // Adjusted port if necessary
      setDiscounts(response.data); // Set the discounts state with the fetched data
    } catch (error) {
      console.error("Error occurred while fetching discounts:", error);
    }
  };

  useEffect(() => {
    fetchDiscounts(); // Fetch discounts on component mount
  }, []);

  return (
    <div className={classes.discountContainer}>
      <Helmet>
      <title>Скидки на услуги | Okna-Prestige34</title>
        <meta
          name="description"
          content="Получите скидки на услуги по установке окон, балконов, лоджий и входных групп от Okna-Prestige34. Акции и специальные предложения для наших клиентов."
        />
        <meta
          name="keywords"
          content="скидки Волгоград, скидки на окна, акции на балконы, скидки на двери"
        />
        <meta property="og:title" content="Скидки на услуги | Okna-Prestige34" />
        <meta
          property="og:description"
          content="У нас действует множество акций и скидок на услуги по установке окон, дверей, балконов и лоджий. Узнайте все подробности!"
        />
        <link rel="canonical" href="localhost:3000/discounts" />
      </Helmet>
      <h1 className={classes.discountsLabel}>Новости и акции</h1>
      

      
      {discounts.length > 0 ? (
        discounts.map((discount) => (
          <DiscountCard
            key={discount.id} 
            discountLabel={discount.discountName}
            discountImage={discount.discountImgPath}
            discountDescription={discount.discountDescription} 
            discountDate={discount.discountDate}
          />
        ))
      ) : (
        <p className={classes.noDiscountsYet}>Нет доступных скидок.</p> 
      )}
    </div>
  );
}

export default Discounts;
