import "./styles/book_page.css"
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion"

interface PageContent {
    label: string;
    text: string;
    image: string;
}

const content: PageContent[] = [
    {
        label: "Предыстория",
        text: "Братья с самого детства жили только со своей любимой мамой. Семья была не очень-то и состоятельна, братья всегда хотели порадовать чем-нибудь маму. Узнав, что у нее скоро др, они захотели купить ей красивый подарок. Но семья их не богата, - поэтому братья решили найти работу.\n",
        image: "null",
    },
    {
        label: "История 1 - как возвращали зонтик",
        text: "В один день, пока они работали на вокзале, их задел красиво одетый мужчина. Извинившись перед красиво-одетым мужчиной, они обратили внимание на то, что он оставил зонтик на лавочке. В их головах промелькнула мысль: «оставить ли нам его или нет?». Однако они сразу вспомнили слова мамы о том, что надо жить, по совести! Осознав ситуацию, они побежали искать его. Осмотрев толпу, Братья увидели, как он собирался сесть в поезд. Они окликнули мужчину, подбегая к нему. Он, услышав их, обернулся и решил подождать их, не протягивая свой билет проводнице. Добежав до него и запыхаясь, они передали ему его потерянную вещь.\n",
        image: "null",
    },
    {
        label: "История 2 - как работали",
        text: "Мальчики как обычно работали: подсказывали дорогу, таскали вещи итд. Вдруг они увидели, как ко входу подъехала очень высокопоставленная дама. Братья подбежали к ней, решив, что смогу заработать денег, помогая ей донести ее вещи. Они предложили свою помощь – дама не отказала им и вдогонку сказала: «справитесь быстро – получите хорошие чаевые». Обрадовавшись, мальчики поспешили выполнить работу. Однако, в спешке они не обратили внимание, как из открытой сумки что-то выпало. Все вещи быстро принесли, и дама осталась довольна, и добавила им немного сверху (чего-то). Она села в вагон, не знав о потере дорогой ей вещи.\n",
        image: "null",
    },
    {
        label: "История 3 - как покупали подарок",
        text: "Братья, наконец-то закончив свой рабочий день и, получив плату за работу, решили проверить, сколько они накопили денег.  Они уже мечтали, как подарят своей маме подарок. Посчитав свои накопления, им стало ясно, что денег стало достаточно для подарка. Радостно они побежали к ларьку со сладостями. И вот они уже стояли перед ним и выбирали, что можно приобрести. Из кучи разных вкусных и красивых сладостей, их взгляд пал на торт, стоящий где-то сбоку на витрине. Но его только-что купила другая женщина. Увидев, что таких больше не осталось, они расстроились, но не отчаялись, и решили сделать заказ, еще красивее купленного. Братья спросили у продавца, можно ли сделать торт по нашему описанию. Продавец сказал им идти в пекарню за углом и там сделать заказ. И вот братья, придя в пекарню, говорят свои мысли кондитеру: \n" +
            "“Мы хотим высоченный многослойный торт, чередующийся с нежным и вкусным ванильным кремом а внутри слой сметаны со сгущёнкой. Снаружи торт покрыт глазурью и украшен розочками из темного шоколада, а на самом торте написано посыпкой \\“Мы тебя любим\\”. Идеально для праздника”. \n" +
            "Мальчики на радостях от сказанного отдали все накопленные деньги кондитеру. Посчитав, кондитер понял, что немного не хватает, но, увидев счастливые лица мальчиков, он слегка улыбнулся и сказал  заходить за тортом через неделю.\n",
        image: "null",
    }
]

/**
 *
 * @param props
 * @constructor
 */
function Page(props: {
    label: string;
    text: string;
    image: string;
    cov: number;
    index: number;
    onFlipEnd: () => void;
    page: number;
    other_label: string;
    other_text: string;
    other_image: string;
    isBook: boolean;
}) {

    const {label, text, image, cov, index, onFlipEnd, page, other_text, other_image, other_label, isBook} = props;

    return (

        <div className={"page"} style={{
            display: page == index ? "block" : "none",
        }}>
            <div className={"page-container"}>
                <motion.div
                    className={"page1-a"}
                    layout
                    style={{originX: 1}}
                    initial={false}
                    animate={cov === -1 && page == index && isBook ?
                        {rotateY: -180} : {rotateY: 0}
                    }
                    transition={cov == -1 ? {duration: 0.4} : {duration: 0}}
                    onAnimationComplete={() => {
                        if (cov === -1) onFlipEnd();
                    }}
                >
                    <div className={"page1"}>
                        <div className={"image-container"}>
                            <img src=
                                     {image.length != 0 ? image : `null`} rel="preload"
                                 alt={""}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="page2-a"
                    layout
                    style={{originX: 0}}
                    initial={false}
                    animate={cov === 1 && page == index && isBook ? {rotateY: 180} : {rotateY: 0}}
                    transition={cov == 1 ? {duration: 0.4} : {duration: 0}}
                    onAnimationComplete={() => {
                        if (cov === 1) onFlipEnd();
                    }}
                >
                    <div className={"page2"}>
                        <p className={"page-label"}>{label}</p>
                        <p className={"page-text"}>{text}</p>
                    </div>
                </motion.div>
            </div>
            <div className={"page-decorator"}>
                <div className={"page1"}>
                    <div className={"image-container2"}>
                        <img src=
                                 {image.length != 0 ? other_image : `null`} rel="preload"
                             alt={""}
                        />
                    </div>
                </div>
                <div className={"page2"}>
                    <p className={"page-label2"}>{other_label}</p>
                    <p className={"page-text2"}>{other_text}</p>
                </div>
            </div>

        </div>
    )

}


interface OtherData {
    other_label: string;
    other_text:
        string;
    other_image: string;
}


/**
 *
 * @param props
 * @constructor
 */
export default function BookPage(props: { isBook: boolean, cb: () => void, page_: number }) {
    const [page, setPage] = useState(props.page_);
    const [cov, setCov] = useState(0);

    const [prev, setPrev] = useState("Закрыть книгу");
    const [next, setNext] = useState(`Следующая`);

    const [other, setOther] = useState<OtherData>({
        other_label: content[1].label,
        other_text: content[1].text,
        other_image: content[1].image
    })


    function changePage(i: number) {
        if (i > 3 || i < 0) {
            props.cb();
            return;
        }

        if (i === page) return;

        if (i > page) {
            setCov(1);
        } else {
            setCov(-1);
        }

        const data = content[i];
        setOther({
            other_text: data.text ?? "",
            other_label: data.label ?? "",
            other_image: data.image,
        });
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
        console.log(page)
        // if (page <= 0) {
        //     setPrev("Закрыть книгу")
        //     // setNext(`Следующая`)
        // } else if (page >= 3) {
        //     // setPrev(`Предыдущая`)
        //     setNext("Закрыть книгу")
        // } else if (page>0 && page<3){
        //     setNext(`Следующая`)
        //     setPrev(`Предыдущая`)
        // }
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
                {content.map((obj: PageContent, index) => {
                    return <Page isBook={props.isBook} {...other} page={page} index={index} key={index}  {...obj}
                                 cov={cov} onFlipEnd={handleFlipEnd}/>
                })}
            </div>
            <div id={"buttons"}>
                <button className={"pageButton"} id={"page-prev"} onClick={() => changePage(page - 1)}>{prev}</button>
                <p id={"page-counter"}>{page+1}/4</p>
                <button className={"pageButton"} id={"page-next"} onClick={() => changePage(page + 1)}>{next}</button>
            </div>
        </div>
    )
}
