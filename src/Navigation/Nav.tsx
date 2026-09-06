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
                <p>Home</p>
                <p>Blog</p>
                <p>About</p>
                <p>Newsletter</p>
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