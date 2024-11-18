import React from "react";
import classes from "./EntranceGroups.module.css";
import ProductDescription from "../../../ProductDescription/ProductDescription";
import ProductExtendedDescription from "../../../ProductExtendedDescription/ProductExtendedDescription";
import YandexMaps from "../../../YandexMaps/YanexMaps";
import ContactInfo from "../../../ContactInfo/ContactInfo";
import entrance_groups_image from "../../../Assets/entrance_groups.svg";
import { Helmet } from "react-helmet-async";

function EntranceGroups() {
  return (
    <div>
      <Helmet>
      <title>Входные группы в Волгограде | Изготовление и установка</title>
        <meta
          name="description"
          content="Проектирование, изготовление и установка входных групп в Волгограде от Okna-Prestige34. Надежные материалы и современные технологии!"
        />
        <meta
          name="keywords"
          content="входные группы Волгоград, установка входных групп, проектирование входных групп, входные группы на заказ"
        />
        <meta property="og:title" content="Входные группы в Волгограде | Okna-Prestige34" />
        <meta
          property="og:description"
          content="Okna-Prestige34 предлагает изготовление входных групп под ключ. Дизайн, прочность и долговечность. Закажите входную группу сегодня!"
        />
        <link rel="canonical" href="localhost:3000/entrance_groups" />
      </Helmet>
      <ProductDescription
        productName={"Входные группы"}
        productImage={entrance_groups_image}
        productDescription={
          "Компания «Престиж» в кратчайшие сроки изготовит и установит любые цельностеклянные конструкции и алюминиевые конструкции, в том числе сложные входные группы.Входные группы: производство, доставка и установка (монтаж)Сегодня входные группы, являющиеся в некотором роде показателем статуса компании – владельца здания, уже стали обязательной архитектурной частью современных магазинов, бизнес-центров, баров, кафе и ресторанов.Входная группа – это сложная конструкция, представляющая собой вход в здание и включающая в себя стеклянные двери или целый комплекс входных стеклянных дверей. При этом сами двери могут быть различного типа: обычные распашные двери или стеклянные раздвижные двери. Все зависит лишь от пожеланий Заказчика и конкретных архитектурных особенностей."
        }
      />
      <ProductExtendedDescription
        extendedDescription={
          "Учитывая все ваши пожелания, мы спроектируем и изготовим входные группы любой сложности. Большой опыт работы, комплексный подход и высококачественные комплектующие, использующиеся в производстве, гарантируют безупречность исполнения вашего заказа точно в срок и по разумным ценам."
        }
      />
      <YandexMaps />
      <ContactInfo productName={"входных групп"} />
    </div>
  );
}

export default EntranceGroups;
