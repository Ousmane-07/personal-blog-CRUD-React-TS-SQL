import { Link } from "react-router-dom"
import profilePic from '../assets/images/image-avatar.jpg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import './Nav.css'

type NavProperties = { 
    toggleTheme: () => void;
    isDark: boolean;
}

function Nav({toggleTheme, isDark}: NavProperties) { 


    return(
        <>
        <div className="nav-wrapper">
            <div className="nav-container">
             <div className="profile-pic">
                <img src={profilePic} alt="" />
             </div>
             <div className="links">
                <Link to= "/" className="route">Home</Link>
                <Link to= "blog" className="route">Blog</Link>
                <Link to= "about" className="route">About</Link>
                <Link to= "newsletter" className="route">Newsletter</Link>
                <div className="theme-container" onClick={toggleTheme}>
                {!isDark ? <img src={moon} alt="" /> : <img src={sun} alt="" /> }
                </div>
             </div>
            </div>
        </div>
        </>
    )
}

export default Nav