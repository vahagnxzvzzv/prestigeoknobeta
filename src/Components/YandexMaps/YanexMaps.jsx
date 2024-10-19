import React from "react";
import classes from './YandexMaps.module.css'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";


function YandexMaps() {
    return (
        <YMaps>
            <div className={classes.yandexMaps}>
                <Map defaultState={{ center: [48.772430, 44.800322], zoom: 14 }} width='100%' height='320px'>
                    <Placemark geometry={[48.776296, 44.796450]} />
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMaps