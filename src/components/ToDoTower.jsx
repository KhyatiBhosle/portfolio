import React, {useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function ToDoTower(){
    const data = {
        "title": "To-Do Tower",
        "skills": ["HTML5", "CSS","JAVASCRIPT", "BOOTSTRAP", "NODE.JS", "EXPRESS.JS", "REACT.JS", "API", "GIT", "MONGODB"],
        "description": "'To-Do Tower' is a full MERN stack task management app with Node.js and Express.js for the backend and React.js for the frontend. It handles tasks, subtasks, and statuses across various boards, demonstrating my ability to develop advanced productivity tools.",
        "video": "../videos/ToDo.mp4",
        "webframe": "../images/todo-webframe.png",
        "problem": "Many people struggle to manage and categorize their tasks effectively, needing a robust solution that allows for detailed task management, including subtasks and status tracking across multiple boards.",
        "solution": "Many people struggle to manage and categorize their tasks effectively, needing a robust solution that allows for detailed task management, including subtasks and status tracking across multiple boards.",
        "link": ["https://github.com/KhyatiBhosle/todoTower", "https://majestic-pasca-0d9260.netlify.app"]
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

export default ToDoTower;