import Header from "../components/header"
import { useEffect } from "react"
import prof from "../assets/lmaopic.png"
import { IoLogoGithub, IoLogoLinkedin, IoCloudDownloadOutline } from "react-icons/io5";
import "../styles/about.scss"
const About = ()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          console.log(entry);
          if(entry.isIntersecting){
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      })
    
      useEffect(()=>{
        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el)=>{observer.observe(el)})
      },[])

    const style = {width:"300px"}
    return(
        <>
            <Header/>
            <section className="hidden">
                <div className="about">
                    <img src={prof} alt="Profile pic"/>
                    <div className="details">
                        <h1>Hi, I am Priyam Shrivastava👋🏼</h1>
                        <div className="links">
                            <IoLogoGithub size='30px'/>
                            <IoLogoLinkedin size="30px"/>
                            <div className="cv">
                                Download my Resume  
                                <button>Resume {<IoCloudDownloadOutline className="res" />}</button>
                            </div>
                        </div>
                        <p>
                        Frontend developer heavily influenced by storytelling, interactions, and UX. Addicted to music, visual arts, and games.
From Brazil, based in Barcelona.
                        </p>
                    </div>
                </div>
            </section>
            <section className="hidden"></section>
        </>
    )
}
export default About