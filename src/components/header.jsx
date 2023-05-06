import "../styles/navbar.scss"

const Header = ()=>{
    return(
        <nav className="navbar">
            <div className="header"><a href="/">.gweryf()</a></div>
            <div className="navlinks"> 
                <div><a href="/about">//about</a></div>
                <div><a href="/video">//video</a></div>
                <div><a href="/contact">//contact</a></div>
            </div>
        </nav>
    )
}
export default Header