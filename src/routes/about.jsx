import Header from "../components/header"
import { useEffect } from "react"
import prof from "../assets/lmaopic.png"
import res from "../assets/resume.pdf"
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
                                <a target="_blank" href={res}><button>Resume {<IoCloudDownloadOutline className="res" />}</button></a>
                            </div>
                        </div>
                        <p>
                        Frontend developer heavily influenced by interactions, and UX. Addicted to music, visual arts, and games.
                        </p>
                        <p>
                        From India, based in Mumbai.
                        </p>
                        <div>
                          <p>Main Skills:</p>
                          <ul>
                            <li>Frontend, UX/UI</li>
                            <li>JavaScript, CSS, HTML, React, SVG</li>
                            <li>Figma, Photoshop</li>
                          </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hidden material">
              <p>Made With</p>
              <div className="cols">
                <ul className="col">
                  <li className="title">⌨</li>
                  <li>react.js</li>
                  <li>css3</li>
                  <li>figma</li>
                  <li>Photoshop</li>
                  <li>Figma</li>
                </ul>

                <ul className="col">
                  <li className="title">☠</li>
                  <li>100+ cups of tea</li>
                  <li>endless references</li>
                  <li>figma</li>
                </ul>

                <ul className="col music">
                  <li className="title">♫</li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/0Yt7UjpW2AJojjZrgGysUl?si=9d10lQXPRD-Ot2PDtshJRQ">gab3</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb?si=pCjEkOkjRp2X0dCbzJFHpw">radiohead</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf?si=y6axc2-sR1m-gpSCjrERKQ">megadeath</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/1bPflBX5bS3e7GIf6mzmT3?si=kke79FrfSk6VnpOOfCij-g">Uli K</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/2KZogWZPYcACVe4NK80dmc?si=Jg5hec2TRGCLs9vvSCJG1g">d0llywood1</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/1XpDYCrUJnvCo9Ez6yeMWh?si=qIoGKu3eTSeXwmCVJ7uLRg">TenaciousD</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/41X1TR6hrK8Q2ZCpp2EqCz?si=i1sUetEHRxKsGhfm8esyWQ">bbno$</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/1ng3xz2dyz57Z1WpnzM2G7?si=BzHjmrccSru-Alen-0WZoQ">pogo</a></li>
                  <li><a className="artists" target="_blank" href="https://open.spotify.com/artist/7jOY91ZU7kn86slH3fBbaD?si=tWpvDNPRTKWeoZY0AvuTDQ">Louie Zong</a></li>
                </ul>
              </div>
            </section>
        </>
    )
}
export default About