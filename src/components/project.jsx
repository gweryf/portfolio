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
            <div className="container skilltable">
                <div className="details"> 
                    <h2>CV Builder</h2>
                    <p>Welcome to our CV builder website, where you can create a professional and polished CV in just a few simple steps. We understand that crafting a perfect CV can be a daunting task, which is why our platform offers a simple and user-friendly interface that guides you through the entire process.</p>
                    <button><a href="https://cv-builder-lac.vercel.app/">Live Preview</a></button>
                    <button><a href="https://github.com/gweryf/cv-builder">Github</a></button>
                </div>
                <div className="projpic">
                    <img src={cv} alt="screenshoit of the project cv-builder" />
                </div>
            </div>
            <div className="container skilltable">
                <div className="projpic">
                    <img src={todo} alt="screenshoit of the project cv-builder" />
                </div>
                <div className="details"> 
                    <h2>To-Do App</h2>
                    <p>A todo list website is an online tool designed to help individuals organize and prioritize their tasks, projects, and daily responsibilities. Users can create task lists, set deadlines, and receive reminders to stay on track with their goals.</p>
                    <button><a href="https://gweryf.github.io/to-do-app/">Live Preview</a></button>
                    <button><a href="https://github.com/gweryf/to-do-app">Github</a></button>
                </div>
            </div>
            <div className="container skilltable">
                <div className="details"> 
                    <h2>Etch-a-Sketch</h2>
                    <p>The Etch-a-Sketch website is a fun and interactive online version of the classic toy that lets users draw and erase pictures with a simple knob control. The website is built using HTML, CSS, and JavaScript, and features a responsive design that works well on desktop</p>
                    <button><a href="https://gweryf.github.io/etch-a-sketch/">Live Preview</a></button>
                    <button><a href="https://github.com/gweryf/etch-a-sketch">Github</a></button>
                </div>
                <div className="projpic">
                    <img src={etch} alt="screenshoit of the project cv-builder" />
                </div>
            </div>
        </>
    )
}
export default Projects