import cv from "../assets/cv-builder.webp"
import todo from "../assets/todo-app.png"
import etch from "../assets/etch-a-sketch.png"
import mem from "../assets/memory-card.png"
import wea from "../assets/weather-app.png"
import bit from "../assets/bit-hunter.gif"
import "../styles/project.scss"
import "../styles/index.scss"
const Projects = ()=>{
    return(
        <>
            <p>Check out some of my</p>
            <h1>Projects</h1>
            <div className="container">
                <div className="skilltable item1">
                    <img src={cv} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>CV Builder</h2>
                        <div>
                            <button><a href="https://cv-builder-lac.vercel.app/">Preview</a></button>
                            <button><a href="https://github.com/gweryf/cv-builder">Github</a></button>
                        </div>
                    </div>
                </div>
                <div className="skilltable item2">
                    <img src={todo} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>To-Do App</h2>
                        <div>
                            <button><a href="https://gweryf.github.io/to-do-app/">Preview</a></button>
                            <button><a href="https://github.com/gweryf/to-do-app">Github</a></button>
                        </div>
                    </div>
                </div>
                <div className="skilltable item3">
                    <img src={etch} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>Etch-a-Sketch</h2>
                        <div>
                            <button><a href="https://gweryf.github.io/etch-a-sketch/">Preview</a></button>
                            <button><a href="https://github.com/gweryf/etch-a-sketch">Github</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="skilltable item1">
                    <img src={wea} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>Weather App</h2>
                        <div>
                            <button><a href="https://gweryf.github.io/weather-app/">Preview</a></button>
                            <button><a href="https://github.com/gweryf/weather-app">Github</a></button>
                        </div>
                    </div>
                </div>
                <div className="skilltable item2">
                    <img src={mem} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>Memory Card</h2>
                        <div>
                            <button><a href="https://memory-card-kappa.vercel.app/">Preview</a></button>
                            <button><a href="https://github.com/gweryf/memory-card">Github</a></button>
                        </div>
                    </div>
                </div>
                <div className="skilltable item3">
                    <img src={bit} alt="screenshoit of the project cv-builder" />
                    <div className="details"> 
                        <h2>Bit Hunter</h2>
                        <div>
                            <button><a href="https://github.com/gweryf/105_BigBitPirates_Hackover3.0">Github</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects