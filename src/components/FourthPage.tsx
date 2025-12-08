import "./styles/fourth_page.css"

import type {PageProps} from "../core.ts";
import React from "react";



export default function FourthPage(props: {
    visible: boolean;
    ref: React.RefObject<HTMLDivElement | null>;
    cb: ()=>void;
    is_book_open:boolean
}
) {



    return (
        <div id={"fourth-page"} ref={props.ref} className={props.visible? "animation-page":"none"} style={{
            display: !props.is_book_open ? "flex" : "none",
        }}>
            <div id={"book"} onClick={props.cb}>
                <img src={"/book_cover_1.png"} alt={""}/>
            </div>
            <p id={"book-hint"}>Нажмите на книгу, чтобы ознакомиться с 4 историями</p>
        </div>
    )
}
