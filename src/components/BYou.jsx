import React, {useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function BYou(){
    const data = {
        "title": "B-You",
        "skills": ["HTML5", "CSS","JAVASCRIPT", "BOOTSTRAP", "NODE.JS", "EXPRESS.JS", "GIT"],
        "description": "This simple blogging platform was my first full-stack project, enhancing both my front-end and backend skills. It utilizes HTML5, CSS, JavaScript, Bootstrap, Node.js, Express.js, and Git, demonstrating my ability to build functional web applications.",
        "video": "../videos/BYou.mp4",
        "webframe": "../images/BYou-webframe.png",
        "problem": "Aspiring bloggers often need a simple yet functional platform to publish their thoughts and experiences without dealing with overly complex setups.",
        "solution": "This simple blogging platform offers a straightforward and efficient way for users to publish their blog posts. Utilizing HTML5, CSS, JavaScript, Bootstrap, Node.js, Express.js, and Git, it provides a user-friendly interface and reliable backend, making it easy for bloggers to focus on content creation without technical hassles.",
        "link": ["https://github.com/KhyatiBhosle/blogging", "https://blogging-7hre.onrender.com"]
     
     }


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    return(
        <><div id="project">
        <div>
            <h1>{data.title}</h1>
            <hr/>
        </div>
        <div className="row align-items-center">
            <div className="col-6">
                <p>
                    {data.description}
                </p>
            </div>
            <div className="col-6">
                <p>
                    <ul>
                        {data.skills.map((skill, index)=>(
                            <li key={index}>
                                {skill}
                            </li>
                        ))}
                        <br/>
                        <br/>
                        <Link className="link" to={data.link[0]} target="_blank">View Code</Link>
                        <Link className="link" to={data.link[1]} target="_blank">Live Project</Link>
                    </ul>
                </p>
            </div>
        </div>
        <br/>
        <div>
            <video className="laptop" src={data.video} autoPlay playsInline muted loop/>      
        </div>
        <div className="row description align-items-center">
            <div className="col-6 ">
                <img className="webframe" src={data.webframe} alt={data.description}/>
            </div>
            <div className="col-6">
                <p>
                    PROBLEM
                    <hr/>
                    {data.problem}<br/><br/>
                    SOLUTION
                    <hr/>
                    {data.solution}
                </p>
            </div>
        </div>
        <hr/>
    </div>
    <Footer/>
    </>
)
}

export default BYou;