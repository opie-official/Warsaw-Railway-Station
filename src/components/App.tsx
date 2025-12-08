/**
 * file App.tsx
 * @author OPIE
 */
import "./styles/app.css"
import FirstPage from "./FirstPage.tsx";
import SecondPage from "./SecondPage.tsx";
import React, {useEffect, useRef, useState} from "react";
import ThirdPage from "./ThirdPage.tsx";
import Footer from "./Footer.tsx";
import FourthPage from "./FourthPage.tsx";
import BookPage from "./BookPage.tsx";
import NavBar from "./navBar.tsx";
/**
 * @function App
 * @constructor
 * @description an app page
 */
export default function App() {

    const [firstVisible, setFirstVisible] = useState(true);
    const [secondVisible, setSecondVisible] = useState(false);
    const [thirdVisible, setThirdVisible] = useState(false);
    const [fourthVisible, setFourthVisible] = useState(false);
    const [fifthVisible, setFifthVisible] = useState(false);

    const [isBook, setIsBook]=useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);

    useEffect(() => {
            const root = ref.current;
            if (!root) {
                return;
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    if (entry.target == ref1.current) setFirstVisible(true);
                    if (entry.target == ref2.current) setSecondVisible(true);
                    if (entry.target == ref3.current) setThirdVisible(true);
                    if (entry.target == ref4.current) setFourthVisible(true);
                    if (entry.target == ref5.current) setFifthVisible(true);
                    observer.unobserve(entry.target);
                })
            }, {
                root,
                threshold: 0.3
            })
            const arr = [ref1, ref2, ref3, ref4, ref5]

            for (let i in arr) {
                if (arr[i].current){
                    observer.observe(arr[i].current);
                }
            }

            return () => observer.disconnect();
        },
        []);


    function openBook(){
        setIsBook(true);
    }

    function closeBook(){
        setIsBook(false);
    }

    const refs = [ref1,ref2,ref3,ref4]

    return (
        <>
            <NavBar refs={refs} app={ref}/>
        <div ref={ref} id={"app"}>
            <FirstPage ref={ref1} visible={firstVisible} is_book_open={isBook}/>
            <SecondPage ref={ref2} visible={secondVisible} is_book_open={isBook}/>
            <ThirdPage ref={ref3} visible={thirdVisible} is_book_open={isBook}/>
            <FourthPage visible={fourthVisible} ref={ref4} cb={openBook} is_book_open={isBook}/>
            <Footer ref={ref5} visible={fifthVisible} is_book_open={isBook}/>
            <BookPage isBook={isBook} cb={closeBook} page_={0}/>
        </div>
        </>
    )
}