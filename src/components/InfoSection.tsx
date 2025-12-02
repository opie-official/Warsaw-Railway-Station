/**
 * @file InfoSection.tsx
 * @author OPIE
 */
import "./styles/info_section.css"
import React from "react";

/**
 * @interface Props
 * @param mode {number} a mode of the content
 */
interface Props {
    mode: number;
}

/**
 * @interface Content
 * @description contains an information about content (image path and text)
 */
interface Content{
    [key: number]: string[]
}

const content: Content={
    1:[
        "/station.svg",
        "Варшавский вокзал в Санкт-Петербурге — здание середины XIX века в стиле строгой классики и раннего историзма с симметричным фасадом и арочными окнами."
    ],
    3:[
        "/clock.svg",
        "С момента открытия в 1853 году Варшавский вокзал пережил расширения, утрату железнодорожной функции и последующую реставрацию."
    ],
    2:[
        "/location.svg",
        "Он расположен на Загородном проспекте рядом с Обводным каналом, в южной части исторического центра Петербурга."
    ],
    4:[
        "/people.svg",
        "Сегодня вокзал утратил транспортную роль и функционирует как торгово-развлекательный комплекс при сохранённом историческом фасаде."
    ],
}


/**
 * @function InfoSection
 * @param mode {Props} a mode of content
 * @constructor
 * @description a component of section with information about railway such as location or date of creation
 */
export default function InfoSection({mode}:Props) {

    return (<div className={"info-section"}>
        <div className={"info-section-img"}>
            <img src={content[mode][0]} alt={""}/>
        </div>
        <p className={"info-section-text"}>
            {content[mode][1]}
        </p>
    </div>)
}