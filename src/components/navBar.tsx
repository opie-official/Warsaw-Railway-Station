import "./styles/nav_bar.css"
import React from "react";



interface BtProps{
    index: number;
    ref_: React.RefObject<HTMLDivElement|null>;
    app: React.RefObject<HTMLDivElement | null>;
}


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
        <button className={"nav-button"} onClick={click}>
            {props.index + 1}
        </button>
    )
}


interface MainProps{
    refs: React.RefObject<HTMLDivElement|null>[]
    app: React.RefObject<HTMLDivElement|null>
}



export default function NavBar(props: MainProps){
    return (
        <div id={"nav-bar"}>
            {props.refs.map((elem, i)=>{
                return <NavButton key={i} index={i} ref_={elem} app={props.app}/>
            })}
        </div>
    )
}