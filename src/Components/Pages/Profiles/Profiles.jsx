import React from "react";
import classes from "./Profiles.module.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import deceunink_logo from "../../Assets/deceunink.svg";
import kbe_logo from "../../Assets/kbe.svg";
import proplex_logo from "../../Assets/proplex.svg";
import { Helmet } from "react-helmet-async";

function Profiles() {
  return (
    <div>
      <Helmet>
      <title>Профили - Okna-Prestige34</title>
        <link rel="canonical" href="localhost:3000/profiles" />
      </Helmet>
      <h1 className={classes.profile_title}>Профили</h1>
      <ProfileCard
        profileCard_img={deceunink_logo}
        profileCard_paragraph={
          "Бельгийская компания Deceuninck уже около 40 лет занимается производством полимерных профильных систем в пом числе профилей для окон ПВХ.Компания Deceuninck имеет 32 производственных и коммерческих подразделений в Европе, Азии и Северной Америке, a продукция компании известна в 60 странах мира. Помимо головного производственного предприятия, расположенного на Западе Бельгии, недалеко от города Брюгге, сегодня компания Deceuninck располагает производственными единицами в странах Европы, Азии и США. Deceuninck является одним из мировых лидеров ПВХ-индустрии и продолжает заниматься инновационными разработками новых профильных систем. Deceuninck располагает собственным «рецептом» состава исходного материала, который отличает профильные системы Deceuninck от профильных систем других производителей. После создания Deceuninck Compound в 1988 году современная технология полностью автоматизированного машинного парка сочетается с ноу-хау и деятельностью высококвалифицированной команды специалистов."
        }
      />
      <ProfileCard
        profileCard_img={kbe_logo}
        profileCard_paragraph={
          "Немецкая марка КБЕ – лидер на российском рынке производителей и поставщиков высокотехнологичного пластикового профиля для оконных и дверных систем.Для европейской части России окна из профиля KBE - универсальный и экономичный вариант при строительстве новых зданий и реконструкции уже существующих. Система подходит для жилых помещений, а также рекомендована для детских и медицинских учреждений. Практичность KBE не оставляет сомнений:Профиль не изменяет своих характеристик на солнце, не желтеет, не деформируется и имеет приятный блеск и шелковистую поверхность. Профиль не разбухает от влаги, не рассыхается, не требует покраски, легко моется.Срок службы ПВХ-конструкций из профиля KBE - более 40 лет. В течение этого времени окна сохраняют все свои характеристики!"
        }
      />
      <ProfileCard
        profileCard_img={proplex_logo}
        profileCard_paragraph={
          "Конструкция системы ПВХ профилей PROPLEX™ достаточно проста и технологична и позволяет изготавливать окна любой формы. Установленные в квартире, офисе или загородном доме окна PROPLEX™ обеспечат отличный уровень комфорта, защитят от излишнего шума и позволят значительно сэкономить в энергопотреблении. Конструкция и расположение камер исключают возможность промерзания профиля, предотвращает перетекание тепла по металлу, компенсиhetn изменения линейных размеров при изменении температуры. Производство профиля контролируется специально разработанной системой обеспечения качества."
        }
      />
    </div>
  );
}

export default Profiles;