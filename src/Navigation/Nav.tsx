import profilePic from '../assets/images/image-avatar.jpg'
import moon from '../assets/images/icon-moon.svg'
import './Nav.css'

function Nav() { 


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
                <div className="theme-container">
                <img src={moon} alt="" />
                </div>
             </div>
            </div>
        </div>
        </>
    )
}

export default Nav