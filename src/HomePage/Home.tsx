import Twitter from '../assets/images/logo-x.svg?react'
import GitHub from '../assets/images/logo-github.svg?react'
import LinkedIn from '../assets/images/logo-linkedin.svg?react'
import FrontEnd from '../assets/images/logo-frontend-mentor.svg?react'

import './Home.css'

function Home() { 

    return ( 
        <>
        <div className="home-wrapper">
            <div className="home-container">
                 <h1>Hi, I'm Paulina👋 </h1>
                 <p>I’m on a journey to become a front-end web developer.
                     I love building little projects, trying out new coding
                     techniques, and sharing what I learn along the way.
                     When I’m not at my desk, you’ll find me reading,
                     hiking through the mountains, or challenging myself 
                     on rock-climbing walls.
                     <br></br>
                     <br></br>
                     I started this blog to document my progress, keep 
                     myself accountable, and hopefully inspire anyone 
                     else who’s learning to code. Welcome to my corner 
                     of the internet, and thanks for stopping by!</p>
                     <div className="icons">
                        <div className="icon-container">
                        < Twitter className="icon" />
                        </div>
                        <div className="icon-container">
                        < GitHub className="icon" />
                        </div>
                        <div className="icon-container">
                        < LinkedIn className="icon" />
                        </div>
                        <div className="icon-container">
                        < FrontEnd className="icon" />
                        </div>
                     </div>
                     <div className="break-section">
                        
                     </div>
            </div>
        </div>
        </>
    )
}

export default Home