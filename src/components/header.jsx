import "../styles/navbar.scss"
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Header = ()=>{
    return(
        <>
            <nav className="navbar">
                <div className="header"><a href="/">.gweryf()</a></div>
                <div className="navlinks"> 
                        <div><a href="/about">contact</a></div>
                </div>
            </nav>
            <nav className="mobnav">
                <a href="/">
                    <div className="mobnavlink">
                        <IoHomeOutline size='25px'/>
                        <div className="header">.gweryf()</div>
                    </div>
                </a>
                <a href="/about">
                    <div className="mobnavlink">
                        <IoChatbubbleEllipsesOutline size='25px'/>
                        <div>contact</div>
                    </div>
                </a>
            </nav>
        </>
    )
}
export default Header