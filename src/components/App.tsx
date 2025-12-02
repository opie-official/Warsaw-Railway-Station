import "./styles/app.css"
import FirstPage from "./FirstPage.tsx";
import SecondPage from "./SecondPage.tsx";
export default function App(){
    return (
        <div id={"app"}>
            <FirstPage />
            <SecondPage />
        </div>
    )
}