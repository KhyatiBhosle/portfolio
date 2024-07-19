import React, {useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function BookishJourney(){
    const data = {
        "title": "Bookish Journey",
        "skills": ["HTML5", "CSS","JAVASCRIPT", "BOOTSTRAP", "NODE.JS", "EXPRESS.JS", "API", "GIT", "MONGODB"],
        "description": "'Bookish Journey' is a full-stack web application showcasing books I've read. It uses Bootstrap for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. This project highlights my skills in web development and API rendering.",
        "video": "../videos/BookishJourney.mp4",
        "webframe": "../images/bookish-webframe.png",
        "problem": "Many book enthusiasts struggle to keep track of the books they've read and wish to share their reading journey with others in a visually appealing and organized manner.",
        "solution": "'Bookish Journey' is a full-stack web application that allows users to curate and showcase their reading lists. It features an intuitive interface built with Bootstrap, a robust backend using Node.js and Express.js, and MongoDB for database management, providing a seamless experience for tracking and sharing book collections.",
        "link": ["https://github.com/KhyatiBhosle/BookishJourney", "https://bookishjourney.onrender.com"]
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

export default BookishJourney;