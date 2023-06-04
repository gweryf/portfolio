import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./routes/App"
import About from "./routes/about"
const RouteSwitch = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch