/**
 * @file BookPage.tsx
 * @author OPIE
 */

import "./styles/book_page.css"
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion"


/**
 * @interface PageContent
 * @desc interface for page props
 */
interface PageContent {
    label: string;
    text: string;
    image: string;
}

/**
 * @var {PageContent[]} content
 * @desc an object of content for book
 */
const content: PageContent[] = [
    {
        label: "Предыстория",
        text: "Братья с самого детства жили только со своей любимой мамой. Семья была не очень-то и состоятельна, братья всегда хотели порадовать чем-нибудь маму. Узнав, что у нее скоро др, они захотели купить ей красивый подарок. Но семья их не богата, - поэтому братья решили найти работу.\n",
        image: "/brothers.png",
    },
    {
        label: "История 1 - как возвращали зонтик",
        text: "В один день, пока они работали на вокзале, их задел красиво одетый мужчина. Извинившись перед красиво-одетым мужчиной, они обратили внимание на то, что он оставил зонтик на лавочке. В их головах промелькнула мысль: «оставить ли нам его или нет?». Однако они сразу вспомнили слова мамы о том, что надо жить, по совести! Осознав ситуацию, они побежали искать его. Осмотрев толпу, Братья увидели, как он собирался сесть в поезд. Они окликнули мужчину, подбегая к нему. Он, услышав их, обернулся и решил подождать их, не протягивая свой билет проводнице. Добежав до него и запыхаясь, они передали ему его потерянную вещь.\n",
        image: "/railway2.png",
    },
    {
        label: "История 2 - как работали",
        text: "Мальчики как обычно работали: подсказывали дорогу, таскали вещи итд. Вдруг они увидели, как ко входу подъехала очень высокопоставленная дама. Братья подбежали к ней, решив, что смогу заработать денег, помогая ей донести ее вещи. Они предложили свою помощь – дама не отказала им и вдогонку сказала: «справитесь быстро – получите хорошие чаевые». Обрадовавшись, мальчики поспешили выполнить работу. Однако, в спешке они не обратили внимание, как из открытой сумки что-то выпало. Все вещи быстро принесли, и дама осталась довольна, и добавила им немного сверху (чего-то). Она села в вагон, не знав о потере дорогой ей вещи.\n",
        image: "/animation.gif",
    },
    {
        label: "История 3 - как покупали подарок",
        text: "Братья, наконец-то закончив свой рабочий день и, получив плату за работу, решили проверить, сколько они накопили денег.  Они уже мечтали, как подарят своей маме подарок. Посчитав свои накопления, им стало ясно, что денег стало достаточно для подарка. Радостно они побежали к ларьку со сладостями. И вот они уже стояли перед ним и выбирали, что можно приобрести. Из кучи разных вкусных и красивых сладостей, их взгляд пал на торт, стоящий где-то сбоку на витрине. Но его только-что купила другая женщина. Увидев, что таких больше не осталось, они расстроились, но не отчаялись, и решили сделать заказ, еще красивее купленного. Братья спросили у продавца, можно ли сделать торт по нашему описанию. Продавец сказал им идти в пекарню за углом и там сделать заказ. И вот братья, придя в пекарню, говорят свои мысли кондитеру: \n" +
            "“Мы хотим высоченный многослойный торт, чередующийся с нежным и вкусным ванильным кремом а внутри слой сметаны со сгущёнкой. Снаружи торт покрыт глазурью и украшен розочками из темного шоколада, а на самом торте написано посыпкой \\“Мы тебя любим\\”. Идеально для праздника”. \n" +
            "Мальчики на радостях от сказанного отдали все накопленные деньги кондитеру. Посчитав, кондитер понял, что немного не хватает, но, увидев счастливые лица мальчиков, он слегка улыбнулся и сказал  заходить за тортом через неделю.\n",
        image: "/candies.jpg",
    }
]

/**
 * @function Page
 * @desc a component of book page
 * @param props
 * @constructor
 */
function Page(props: {
    cov: number;
    index: number;
    onFlipEnd: () => void;
    page: number;
    isBook: boolean;
}) {

    const {cov, index, onFlipEnd, page, isBook} = props;

    const d = 0.4;

    const [state, setState] = useState<-2 | -1 | 0 | 1 | 2>(0);
    const canFinish = page === index && isBook && cov !== 0;
    const next = content[page + 1 <= 3 ? page + 1 : 3];
    const prev = content[page - 1 >= 0 ? page - 1 : 0];
    const cur = content[page];


    return (<div className={"page"} style={{
            display: page == index ? "block" : "none",
        }}>{
            <div className={"page-container"}>

                <motion.div
                    className="page1-a"
                    style={{originX: 1}}
                    initial={false}
                    animate={{
                        rotateY:
                            cov === -1 ? [0, 90] :
                                (cov === 1 && state === 1) ? [90, 0] :
                                    90
                    }}
                    transition={{
                        duration: (cov === -1 || cov == 1) && (state == -1 || state == 1) ? d :
                            cov == 1 && state == 0 ? d :
                                cov == -1 && state == 0 ? d :
                                    0,
                        delay: (cov === 1) ? d : 0,
                    }}
                    onAnimationComplete={() => {
                        if (cov === -1) setState(-1);
                        if (canFinish && cov === 1 && state === 1) {
                            setState(0);
                            onFlipEnd();
                        }
                    }}
                >
                    <div className={"page1"}>
                        <div className={"image-container"}>

                            <div className={"image-rivet top-left"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <div className={"image-rivet top"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <div className={"image-rivet top-right"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <div className={"image-rivet bot-left"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <div className={"image-rivet bot"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <div className={"image-rivet bot-right"}>
                                <img src={"/rivet.png"} loading={"eager"}/>
                            </div>
                            <img src={cov == 1 ? next.image : cur.image} rel="preload"
                                 alt={""} loading={"eager"}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="page2-a"
                    style={{originX: 0}}
                    initial={false}
                    animate={{
                        rotateY:
                            cov === 1 ? [0, -90] :
                                (cov === -1 && state === -1) ? [-90, 0] :
                                    -90
                    }}
                    transition={{
                        duration: cov !== 0 && state !== 0 ? d :
                            cov == -1 && state == 0 ? d :
                                cov == 1 && state == 0 ? d :
                                    0,
                        delay: (cov === -1) ? d : 0,
                    }}
                    onAnimationComplete={() => {
                        if (cov === 1) setState(1);
                        if (canFinish && cov === -1 && state === -1) {
                            setState(0);
                            onFlipEnd();
                        }
                    }}
                >

                    <div className={"page2"}>
                        <p className={"page-label"}>{cov == 1 ? cur.label : prev.label}</p>
                        <p className={"page-text"}>{cov == 1 ? cur.text : prev.text}</p>
                    </div>
                </motion.div>
            </div>}
            <div className={"page-other"}>
                <div className={"page1"}>

                    <div className={"image-container2"}>

                        <div className={"image-rivet top-left"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>
                        <div className={"image-rivet top"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>
                        <div className={"image-rivet top-right"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>
                        <div className={"image-rivet bot-left"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>
                        <div className={"image-rivet bot"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>
                        <div className={"image-rivet bot-right"}>
                            <img src={"/rivet.png"} loading={"eager"}/>
                        </div>

                        <img src={cov == 1 ? cur.image : cov == -1 ? prev.image : cur.image} rel="preload"
                             alt={""} loading={"eager"}
                        />
                    </div>
                </div>
                <div className={"page2"}>
                    <p className={"page-label"}>{cov == 1 ? next.label : cur.label}</p>
                    <p className={"page-text"}>{cov == 1 ? next.text : cur.text}</p>
                </div>
            </div>
        </div>
    )

}


/**
 * @interface OtherData
 * @desc interface for content of page, while animation is started
 */
interface OtherData {
    other_label: string;
    other_text:
        string;
    other_image: string;
}


/**
 * @function BookPage
 * @param props
 * @constructor
 * @desc a component of all book
 */
export default function BookPage(props: { isBook: boolean, cb: () => void, page_: number }) {
    const [page, setPage] = useState(props.page_);
    const [cov, setCov] = useState(0);

    const [prev, setPrev] = useState("Закрыть книгу");
    const [next, setNext] = useState(`Следующая`);


    function changePage(i: number) {
        if (cov !== 0) return;
        if (i > 3 || i < 0) {
            props.cb();
            return;
        }
        if (i === page) return;
        setCov(i > page ? 1 : -1);
    }

    function handleFlipEnd() {
        setPage(prev => {
            let next = prev;

            if (cov === 1) {
                next = Math.min(prev + 1, 3);
            } else if (cov === -1) {
                next = Math.max(prev - 1, 0);
            }

            return next;
        });


        setCov(0);
    }

    useEffect(() => {
        if (page <= 0) {
            setPrev("Закрыть книгу");
            setNext("Следующая");
        } else if (page >= 3) {
            setPrev("Предыдущая");
            setNext("Закрыть книгу");
        } else {
            setPrev("Предыдущая");
            setNext("Следующая");
        }
    }, [page]);

    return (
        <div id={"book-page"} style={{display: props.isBook ? "flex" : "none"}}>
            <div id={"pages"} className={props.isBook ? "animation-book" : ""}>
                {content.map((_: PageContent, index) => {
                    return <Page isBook={props.isBook} page={page} index={index} key={index}
                                 cov={cov} onFlipEnd={handleFlipEnd}/>
                })}
            </div>
            <div id={"buttons"}>
                <button className={"pageButton"} id={"page-prev"} onClick={() => changePage(page - 1)}>{prev}</button>
                <p id={"page-counter"}>{page + 1}/4</p>
                <button className={"pageButton"} id={"page-next"} onClick={() => changePage(page + 1)}>{next}</button>
            </div>
        </div>
    )
}
