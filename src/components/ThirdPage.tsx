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
            <Title title={"О Проекте"} icon={"book.svg"}/>
            <p id={"project-info"}>
                Этот проект — нечто большее, чем простой урок истории. Он переосмысливает цифровое повествование, суть
                которого заключается в четырех историях, ожидающих в архивах ниже
            </p>
            <div id={"project-aspects"}>
                <ProjectInfo icon={"/script.svg"} label={"Глубокое повествование"}
                             text={"Четыре отдельные истории, сплетенные в единое целое"}/>
                <ProjectInfo icon={"/cursor.svg"} label={"Интерактивный UX"}
                             text={"Тактильная книга, которая превращает пассивное чтение в активное изучение истории"}/>
                <ProjectInfo icon={"/pallete.svg"} label={"Точность воспроизведения"} text={"ну тип патом добавлю"}/>
            </div>
        </div>
    )
}





