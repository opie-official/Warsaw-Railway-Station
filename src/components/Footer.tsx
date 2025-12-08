import type {PageProps} from "../core.ts";
import "./styles/footer.css"

export default function Footer(props: PageProps) {
    return <footer id={"footer"} ref={props.ref} className={props.visible ? "animation-page" : "none"} style={{
        display: !props.is_book_open ? "flex" : "none",
    }}>
        <div id={"footer-top"}>
            <div className={"block"} id={"footer-left"}>
                <p className={"block-label"} id={"left-label"}>Истории Варшавского вокзала</p>
                <p className={"block-text"} id={"left-text"}>
                    Цифровой мемориал с цифровыми <br/>историями,
                    отсылающиеся на<br/> 20-е годы на Варшавский вокзал
                </p>
            </div>
            <div className={"block"} id={"footer-center"}>
                <p className={"block-label"} id={"center-label"}>
                    <span className={"red"}>{'</>'}</span>  Создано с помощью
                </p>
                <p className={"block-text"} id={"center-text"}>
                    <span>React</span><br/>
                    <span>Typescript</span>
                </p>
            </div>
            <div className={"block"} id={"footer-right"}>
                <p className={"block-label"} id={"right-label"}>Подготовили</p>
                <p className={"block-text"} id={"right-text"}>
                   
                </p>
            </div>
        </div>
                <hr id={"footer-hr"}/>
        <div id={"footer-bottom"}>
            <div className={"block2"} id={"footer-left2"}>
                <p className={"block2-label"} id={"left-label2"}>1853</p>
                <p className={"block2-text"} id={"left-text2"}>Год постройки</p>
            </div>
            <div className={"block2"} id={"footer-center2"}>
                <p className={"block2-label"} id={"center-label2"}>4</p>
                <p className={"block2-text"} id={"center-text2"}>Собранных рассказов</p>
            </div>
            <div className={"block2"} id={"footer-right2"}>
                <p className={"block2-label"} id={"right-label2"}>150+</p>
                <p className={"block2-text"} id={"right-text2"}>Лет истории</p>
            </div>
        </div>


    </footer>
}