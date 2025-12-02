/**
 * file App.tsx
 * @author OPIE
 */
import "./styles/app.css"
import FirstPage from "./FirstPage.tsx";
import SecondPage from "./SecondPage.tsx";


/**
 * @function App
 * @constructor
 * @description an app page
 */
export default function App(){
    return (
        <div id={"app"}>
            <FirstPage />
            <SecondPage />
        </div>
    )
}