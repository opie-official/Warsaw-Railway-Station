/**
 * @file SecondPage.tsx
 * @author OPIE
 */
import "./styles/second_page.css"
import InfoSection from "./InfoSection.tsx";


/**
 * @function SecondPage
 * @constructor
 * @description Component of the second page that contains a little bit of information about Warsaw railway
 */
export default function SecondPage(){

    return (
        <div id={"second-page"}>
            <p id={"second-about"}>О вокзале</p>
            <div id={"second-img"}></div>
            <div id={"second-info"}>
                {[1,2,3,4].map(
                    el=><InfoSection key={el} mode={el}/>
                )}
            </div>
        </div>
    )
}