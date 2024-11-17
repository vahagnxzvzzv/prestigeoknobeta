import React from "react";
import classes from "./BalconiasLoggias.module.css";
import ProductDescription from "../../../ProductDescription/ProductDescription";
import ProductExtendedDescription from "../../../ProductExtendedDescription/ProductExtendedDescription";
import YandexMaps from "../../../YandexMaps/YanexMaps";
import ContactInfo from "../../../ContactInfo/ContactInfo";
import balconies_loggias_image from "../../../Assets/balconies_loggias.svg";
import { Helmet } from "react-helmet-async";

var extendedDescription =
  "Остекление балконов и лоджий:Алюминиевая система.Пластиковая система KBE, PROPLEX, DECEUNINCKОстекление балкона с крышей (гофролист, ондулин)Вынос остекленияАнтимоскитные сеткиОтделка:Практически любые панели из ПВХ, дерева, МДФПодоконники и оконные откосыУтепление балкона различными материаламиШкафы с фасалом из алюминия (раздвижные и распашные)Потолочные и настенные сушилки для белья";

function BalconiasLoggias() {
  return (
    <div>
      <Helmet>
        <title>Prestige Okno - Balconies and Loggias</title>
        <meta
          name="description"
          content="Stylish and Functional Solutions for Your Balconies and Loggias: "
        />
        <link rel="canonical" href="localhost:3000/balcony_lodges" />
      </Helmet>
      <ProductDescription
        productName={"Балконы и лоджии"}
        productImage={balconies_loggias_image}
        productDescription={
          "Принято считать, что остекление балконов или утепление лоджий лучше всего выполнять в теплое время года, так как это мероприятие предполагает монтаж на открытом воздухе. Многие думают, что заниматься данными работами зимой, ранней весной или поздней осенью — это неудобство для жильцов и проигрыш в качестве.На самом деле, имеют значение только конкретные погодные условия и, конечно, используемые материалы, а также квалификация монтажников. Не рекомендуется заниматься утеплением, отделкой, остеклением балконов и лоджий или работой c пластиком лишь при температуре ниже —10°C. Серьезным ограничением в этом плане считается и сильный дождь. Процесс установки конструкций в стандартном исполнении занимает обычно 2-3 часа и квартира не успевает сильно охладиться. Зато в «неблагоприятные» периоды времени работы по остеклению балкона обойдутся дешевле в связи с действием программ дополнительных скидок."
        }
      />
      <ProductExtendedDescription
        extendedDescription={`Остекление балконов и лоджий:Алюминиевая система.Пластиковая система KBE, PROPLEX, DECEUNINCKОстекление балкона с крышей (гофролист, ондулин)Вынос остекленияАнтимоскитные сеткиОтделка:Практически любые панели из ПВХ, дерева, МДФПодоконники и оконные откосыУтепление балкона различными материаламиШкафы с фасалом из алюминия (раздвижные и распашные)Потолочные и настенные сушилки для белья`}
      />
      <YandexMaps />
      {/* <ContactInfo /> */}
      <ContactInfo productName={"балконов и лоджии"} />
    </div>
  );
}

export default BalconiasLoggias;
