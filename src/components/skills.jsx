import "../styles/skills.scss"
import { IoLogoReact, IoLogoJavascript, IoLogoChrome } from "react-icons/io5";
const Skills = ()=>{
    return(
        <div className="myskills"> 
            <h1 className="skilltit">My Skills</h1>
            <div className="skills">
                <div className="skilltable hidden">
                    <IoLogoReact size='70px'/>
                    <h2>Frontend Dev</h2>
                    <h3>Passionate about UI/UX. Over a year of development experience in HTML, CSS, JS, React and NextJS frameworks.</h3>
                </div>
                <div className="skilltable hidden">
                    <IoLogoJavascript size='70px'/>
                    <h2>Languages</h2>
                    <h3>Experienced in both functional and OOP: Python, Java, JavaScript.</h3>
                </div>
                <div className="skilltable hidden">
                    <IoLogoChrome size='70px'/>
                    <h2>Development Tools</h2>
                    <h3>Have a lot of experience with git, github, chrome developer tools and many development environments</h3>
                </div>
            </div>
        </div>
    )
}
export default Skills