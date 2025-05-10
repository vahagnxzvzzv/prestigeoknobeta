import React from "react";
import classes from "./Profiles.module.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import deceunink_logo from "../../Assets/deceunink.svg";
import kbe_logo from "../../Assets/kbe.svg";
import proplex_logo from "../../Assets/proplex.svg";
import brusbox from '../../Assets/brusbox.svg'
import wintech from '../../Assets/wintech.svg'
import rehau from '../../Assets/rehau.svg'
import krauss from '../../Assets/krauss.svg'
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
        profileCard_img={brusbox}
        profileCard_paragraph={
          "Отечественный производитель окон BRUSBOX изготавливает ПВХ профили, которые строго соответствуют как европейским, так и отечественным стандартам качества. Окна могут устанавливаться в квартирах, коттеджах, дачных домах, на производствах, в офисах, других коммерческих помещениях, в учреждениях с повышенными санитарными и гигиеническими требованиями. Компания работает на рынке 20 лет, производя технологичный профиль из поливинилхлорида, разработанный в России. Он создан с применением новейших технологий и собственного практического опыта производства."
        }
      />
      <ProfileCard
        profileCard_img={wintech}
        profileCard_paragraph={
          "ООО «Винтек Пластик» в России – один из лидеров на российском рынке ПВХ-профилей по темпам роста и объемам инвестиций в производство. Компания обладает одним из наиболее высоких производственных потенциалов, позволяющих стабильно обеспечивать клиентов современной, высококачественной продукцией. Наша организационная структура обеспечивает максимально быстрое принятие технических и коммерческих решений. На сегодняшний день в производстве и реализации продукции занято более 200 сотрудников."
        }
      />
      <ProfileCard
        profileCard_img={rehau}
        profileCard_paragraph={
          "Портфель продуктов REHAU включает более 40 000 продуктов. Чтобы позиционировать наши компетенции по всему миру в соответствии с рынком и потребностями клиентов, мы управляем ими в рамках пяти подразделений: Window Solutions, Building Solutions, Furniture Solutions, Industrial Solutions и Automotive."
        }
      />
      <ProfileCard
        profileCard_img={krauss}
        profileCard_paragraph={
          "Профильные системы KRAUSS предназначены для использования в жилом и коммерческом секторе, обладают высокими показателями энергоэффективности и достаточным многообразием систем для остекления самых нестандартных объектов"
        }
      />
    </div>
  );
}

export default Profiles;
