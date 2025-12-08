/**
 * @file FirstPage.tsx
 * @author OPIE
 */
import "./styles/first_page.css"
import "./styles/animations.css"
import type {PageProps} from "../core.ts";
// import {motion} from "framer-motion";
/**
 * @function FirstPage
 * @constructor
 * @description a component of first page
 * @param props {PageProps} a params of component
 */
export default function FirstPage(props: PageProps) {
    return (
            <div ref={props.ref} id={"first-page"} className={props.visible ? "animation-page" : "none"} style={{
                display: !props.is_book_open ? "flex" : "none",
            }}>
                <div id={"first-page-label"}>
                    <p id={"label-h"}>Варшавский вокзал</p>
                    <p id={"label-p"}>Место, где пересекаются истории</p>
                    <div id={"label-years"}>
                        <p>1920-е годы</p>
                    </div>
                </div>
            </div>
    )
}