import cv from "../assets/cv-builder.png"
import todo from "../assets/todo-app.png"
import etch from "../assets/etch-a-sketch.png"
import "../styles/project.scss"
import "../styles/index.scss"
const Projects = ()=>{
    return(
        <>
            <p>Check out some of my</p>
            <h1>Projects</h1>
            <div className="container">
                <div className="skilltable">
                    
                    <div className="projpic">
                        <img src={cv} alt="screenshoit of the project cv-builder" />
                    </div>
                    <div className="details"> 
                        <h2>CV Builder</h2>
                        <button><a href="https://cv-builder-lac.vercel.app/">Live Preview</a></button>
                        <button><a href="https://github.com/gweryf/cv-builder">Github</a></button>
                    </div>
                </div>
                <div className="skilltable">
                    <div className="projpic">
                        <img src={todo} alt="screenshoit of the project cv-builder" />
                    </div>
                    <div className="details"> 
                        <h2>To-Do App</h2>
                        <button><a href="https://gweryf.github.io/to-do-app/">Live Preview</a></button>
                        <button><a href="https://github.com/gweryf/to-do-app">Github</a></button>
                    </div>
                </div>
                <div className="skilltable">
                    
                    <div className="projpic">
                        <img src={etch} alt="screenshoit of the project cv-builder" />
                    </div>
                    <div className="details"> 
                        <h2>Etch-a-Sketch</h2>
                        <button><a href="https://gweryf.github.io/etch-a-sketch/">Live Preview</a></button>
                        <button><a href="https://github.com/gweryf/etch-a-sketch">Github</a></button>
                    </div>
                </div>
            </div>
            <div className="container1"></div>
        </>
    )
}
export default Projects