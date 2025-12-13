/**
 * @file ThirdPage.tsx
 * @author OPIE
 *
 */
import "./styles/third_page.css"
import Title from "./Title.tsx";
import ProjectInfo from "./ProjectInfo.tsx";
import type {PageProps} from "../core.ts";

/**
 * @function ThirdPage
 * @constructor
 * @desc a component of third page that contains information about project
 * @param props{PageProps} - a params of component
 */
export default function ThirdPage(props: PageProps) {

    return (
        <div ref={props.ref} id={"third-page"} className={props.visible? "animation-page" :"none"} style={{
            display: !props.is_book_open ? "flex" : "none",
        }}>
            <Title title={"О Проекте"} icon={2}/>
            <p id={"project-info"}>
                Наша цель — пробудить ваш интерес к историям Варшавского вокзала и сделать его прошлое понятным и увлекательным для каждого. В рамках проекта мы стремимся оживить былые времена, соединяя современный веб-дизайн и интерактивные инструменты.
            </p>
            <div id={"project-aspects"}>
                <ProjectInfo icon={"/script.svg"} label={"Интересные истории"}
                             text={"Четыре отдельные истории, сплетенные в единое целое"}/>
                <ProjectInfo icon={"/cursor.svg"} label={"Интерактивный UX"}
                             text={"Тактильная книга, которая превращает пассивное чтение в активное изучение истории"}/>
                <ProjectInfo icon={"/pallete.svg"} label={"Привлекательный дизайн"} text={"визуально гармоничное оформление, которое сразу привлекает внимание, легко читается и вызывает отклик благодаря удачному сочетанию цвета, композиции и шрифтов"}/>
            </div>
        </div>
    )
}





