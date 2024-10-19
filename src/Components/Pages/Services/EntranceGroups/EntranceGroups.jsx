import React from "react";
import classes from './EntranceGroups.module.css'
import ProductDescription from "../../../ProductDescription/ProductDescription";
import ProductExtendedDescription from "../../../ProductExtendedDescription/ProductExtendedDescription";
import YandexMaps from "../../../YandexMaps/YanexMaps";
import ContactInfo from "../../../ContactInfo/ContactInfo";
import entrance_groups_image from '../../../Assets/entrance_groups.svg'


function EntranceGroups() {
    return (
        <div>
            <ProductDescription 
                    productName={'Входные группы'}
                    productImage={entrance_groups_image}
                    productDescription={'Компания «Престиж» в кратчайшие сроки изготовит и установит любые цельностеклянные конструкции и алюминиевые конструкции, в том числе сложные входные группы.Входные группы: производство, доставка и установка (монтаж)Сегодня входные группы, являющиеся в некотором роде показателем статуса компании – владельца здания, уже стали обязательной архитектурной частью современных магазинов, бизнес-центров, баров, кафе и ресторанов.Входная группа – это сложная конструкция, представляющая собой вход в здание и включающая в себя стеклянные двери или целый комплекс входных стеклянных дверей. При этом сами двери могут быть различного типа: обычные распашные двери или стеклянные раздвижные двери. Все зависит лишь от пожеланий Заказчика и конкретных архитектурных особенностей.'}
            />
            <ProductExtendedDescription 
                extendedDescription={'Учитывая все ваши пожелания, мы спроектируем и изготовим входные группы любой сложности. Большой опыт работы, комплексный подход и высококачественные комплектующие, использующиеся в производстве, гарантируют безупречность исполнения вашего заказа точно в срок и по разумным ценам.'}
            />
            <YandexMaps />
            <ContactInfo 
                productName={'входных групп'}
            />
        </div>
    )
}

export default EntranceGroups