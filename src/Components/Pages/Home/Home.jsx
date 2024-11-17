import React from "react";
import Slider from "react-slick";
import carousel_img1 from '../../Assets/home_page_carousel_1.svg';
import classes from './Home.module.css'; // Import your CSS module
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferCard from "./OfferCard/OfferCard";
import AboutDescription from "../../AboutDescription/AboutDescription";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import toolsIcon from '../../Assets/tools_icon.svg'
import calculator_icon from '../../Assets/calculator_icon.svg'
import precent_icon from '../../Assets/precent_icon.svg'
import verify_icon from '../../Assets/verify_icon.svg'
import { Helmet } from "react-helmet-async";



function Home() {
  const settings = {
    dots: true,               
    infinite: true,           
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,      
  };

 

  return (
    <div className={classes.home}>
      <Helmet>
        <title>Prestige Okno - Home</title>
        <meta name="description" content="Prestige Okno is a window industry company with many years of career" />
        <link rel="canonical" href="localhost:3000/" />
      </Helmet>
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
        <div className={classes.slide}>
          <img className={classes.carouselImage} src="https://1stscenic.co.uk/wp-content/uploads/2020/01/shutters-on-upvc-windows.jpg" alt="Slide 1" />
          <div className={classes.imageOverlay}></div> 
          <div className={classes.textOverlay}><h1>Окна производства Германии<br/>по цене российских окон</h1></div>
        </div>
        <div className={classes.slide}>
          <img className={classes.carouselImage} src={carousel_img1} alt="Slide 2" />
          <div className={classes.imageOverlay}></div> 
          <div className={classes.textOverlay}><h1>Рассрочка 0% на 6 месяцев<br/>Скидки до 10%</h1></div>
        </div>
      </Slider>
      <h1 className={classes.offer_label}>Предлагаем вам</h1>
      <div className={classes.offers}>
      <OfferCard 
        offer_image='https://primetechupvc.com/wp-content/uploads/2024/09/upvc-windoww.jpg' 
        offer_button_title='Пластиковые окна'
        offer_link='./plastic_windows'
      />
      <OfferCard
        offer_image='https://s0.rbk.ru/v6_top_pics/media/img/2/04/756293100806042.jpg' 
        offer_button_title='Балконы и лоджии'
        offer_link='./balconies_loggias'
      />
      
      <OfferCard 
        offer_image='https://sds163.ru/upload/iblock/c26/c265f288eb382fc209fa4d1b21b9bddf.jpg' 
        offer_button_title='Входные группы'
        offer_link='./entrance_groups'
      />
      </div>
    </div>
      <AboutDescription
        about_paragraph='Компания «Престиж» уже более 5 лет занимается производством и установкой окон в Волжском и Волгоградской области. Мы производим различные решения: от недорогих до эксклюзивных и элитных.Компания «Престиж» производит пластиковые окна из профильных систем Deceuninck, KBE, PROPLEX, успешно зарекомендовавших себя на российском рынке. К вашим услугам широкий спектр дополнительных комплектующих и аксессуаров, а также возможность выбора оптимального варианта с учетом условий эксплуатации и ваших пожеланий. По вашей заявке мы изготовим окна практически любых размеров и форм. Конечная цена складывается из огромного количества самых разных факторов, и именно поэтому очень сложно самостоятельно произвести расчет стоимости окна. Для получения предварительной оценочной стоимости остекления предлагаем вам воспользоваться прямым звонком в офис или онлайн-заявкой на сайте'
        about_title='О нас'
      />
      <h1 className={classes.why_us_label}>Почему мы</h1>
      <div className={classes.whyus}>
      <WhyUsCard 
        whyus_title='Монтаж по ГОСТу, специалисты с большим стажем работы'
        whyus_img={toolsIcon}
      />
      <WhyUsCard 
        whyus_title='Замер, расчет стоимости, доставка — бесплатно'
        whyus_img={calculator_icon}
      />
      <WhyUsCard 
        whyus_title='Реальные скидки, беспроцентная рассрочка, кредит'
        whyus_img={precent_icon}
      />
      <WhyUsCard 
        whyus_title='Гарантия на оконные профили 5 лет'
        whyus_img={verify_icon}
      />
      </div>
    </div>
  );
}

export default Home;
