import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./routes/App"
import Video from "./routes/video"
const RouteSwitch = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/video" element={<Video/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch