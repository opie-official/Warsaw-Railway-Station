/**
 * @file Title.tsx
 * @autor OPIE
 */

import "./styles/title.css"
interface TitleProps{
    title: string,
    icon: string,
    className?: string,
    color?:string
}


/**
 * @func Title
 * @param title
 * @param icon
 * @param className
 * @param color
 * @constructor
 * @desc a component of title for all pages
 */
export default function Title({title, icon, className, color}: TitleProps) {
    return (
        <div className={["title", className??""].join(" ")}>
            <img src={`/${icon}`} />
            <p style={{
                color: color??""
            }}>{title}</p>
        </div>
    )
}
