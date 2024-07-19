import React, {useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function RCube(){
    const data = {
        "title": "Our-Cube",
        "skills": ["HTML5", "CSS","JAVASCRIPT", "BOOTSTRAP", "NODE.JS", "EXPRESS.JS", "API", "GIT", "MONGODB"],
        "description": "'OurCube' connects people offering services with those in need, covering accommodation, ride-shares, and jobs. This platform simplifies connecting offerers and requesters, showcasing my skills in creating community-driven web applications.",
        "video": "../videos/OurCube.mp4",
        "webframe": "../images/rcube-webframe.png",
        "problem": "Individuals seeking or offering services such as accommodation, ride-shares, and jobs often face difficulties in finding reliable connections through a centralized platform.",
        "solution": "'OurCube' connects service providers with those in need through a user-friendly platform. Users can post their offers or requests for various services, such as accommodation, ride-shares, and jobs, facilitating easy and reliable connections. This project simplifies the process of finding and offering services, fostering a supportive community.",
        "link": ["https://github.com/KhyatiBhosle/OurCube", "https://ourcube.onrender.com"]
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

export default RCube;