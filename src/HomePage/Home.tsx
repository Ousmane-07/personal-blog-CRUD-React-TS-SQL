import { useEffect, useState } from "react";
import Twitter from '../assets/images/logo-x.svg?react'
import GitHub from '../assets/images/logo-github.svg?react'
import LinkedIn from '../assets/images/logo-linkedin.svg?react'
import FrontEnd from '../assets/images/logo-frontend-mentor.svg?react'
'./Home.css'

type Post = { 
    id: number;
    title: string; 
    slug: string;
    published_at: string;
}

function Home() { 

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => { 

        async function getPosts() { 
            const response = await fetch("http://localhost:3000/api/posts")

            const data = await response.json();

            setPosts(data);
        }
    })
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
                <div className="latest-articles">
                    <h1>Latest Articles</h1>

                    {posts.map((post) => (
                        <div className="article" key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.published_at}</p>
                        </div>
                    ))}
                    </div>
        </div>
        </>
    )
}

export default Home