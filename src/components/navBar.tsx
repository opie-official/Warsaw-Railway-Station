/**
 * @file navBar.tsx
 * @author OPIE
 */


import "./styles/nav_bar.css"
import React from "react";


/**
 * @interface BtProps
 * @desc interface for NavButton props
 */
interface BtProps{
    index: number;
    ref_: React.RefObject<HTMLDivElement|null>;
    app: React.RefObject<HTMLDivElement | null>;
    is_current: boolean
}

/**
 * @function NavButton
 * @param props
 * @constructor
 * @desc a component of navigation bar button
 */
function NavButton(props: BtProps){

    function click(){

        const box = props.ref_.current;
        const app = props.app.current
        if (!box || !app)return;
        app.scroll({
            top: box.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }
    return (
        <button className={props.is_current? "nav-button-cur":"nav-button"} onClick={click}>
            {props.index + 1}
        </button>
    )
}

/**
 * @interface MainProps
 * @desc interface for props of NavBar
 */
interface MainProps{
    refs: React.RefObject<HTMLDivElement|null>[]
    app: React.RefObject<HTMLDivElement|null>
    is_book_open:boolean
    current: number
}


/**
 * @function NavBar
 * @param props
 * @constructor
 * @desc a component of navigation panel
 */
export default function NavBar(props: MainProps){
    return (
        <div id={"nav-bar"} className={props.is_book_open? "none":""}>
            {props.refs.map((elem, i)=>{
                return <NavButton is_current={props.current==i} key={i} index={i} ref_={elem} app={props.app}/>
            })}
        </div>
    )
}