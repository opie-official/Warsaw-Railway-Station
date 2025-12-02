/**
 * @file main.tsx
 * @author OPIE
 */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./components/App.tsx";


/**
 * @description Enter code
 */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
