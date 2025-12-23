/**
 * @file SecondPage.tsx
 * @author OPIE
 */
import "./styles/second_page.css"
import InfoSection from "./InfoSection.tsx";
import Title from "./Title.tsx";
import "./styles/animations.css"
import type {PageProps} from "../core.ts";

/**
 * @function SecondPage
 * @constructor
 * @description Component of the second page that contains a little bit of information about Warsaw railway
 * @param props{PageProps} - a params of component
 */
export default function SecondPage(props: PageProps){
    return (
        <div ref={props.ref} id={"second-page"} className={props.visible? "animation-page" :"none"} style={{
            display: !props.is_book_open ? "flex" : "none",
        }}>
           <Title color={"white"} className={"title-second"} title={"О Вокзале"} icon={1}/>
            <div id={"second-img"}>
                <img src={"/railway_5.jpg"} rel="preload"/>
            </div>
            <div id={"second-info"}>
                {[1,2,3,4].map(
                    el=><InfoSection key={el} mode={el}/>
                )}
            </div>
        </div>
    )
}