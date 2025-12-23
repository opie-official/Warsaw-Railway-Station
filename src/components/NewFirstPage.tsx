import "./styles/new_first_page.css"
import type {PageProps} from "../core.ts";








export default function newFirstPage(props: PageProps) {



    return (
        <div ref={props.ref} id={"new-first-page"} className={props.visible ? "animation-page" : "none"} style={{
            display: !props.is_book_open ? "flex" : "none",
        }}>
            <div id={"new-first-p"}>
                <img src={"/logosvg.svg"}/>
            </div>
            <div id={"new-first-img"}>
                <img src={"/railway_6.jpg"}/>
            </div>
        </div>
    )
}