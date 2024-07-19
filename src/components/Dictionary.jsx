import React, {useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Dictionary(){
    const data = {
        "title": "Dictionary",
        "skills": ["HTML5", "CSS","JAVASCRIPT", "BOOTSTRAP", "REACT.JS", "API", "GIT"],
        "description": "The 'Dictionary' project uses a dictionary API to render word information. This was my first React project, incorporating HTML5, CSS, JavaScript, Bootstrap, React.js, API, and Git. Inspired by frontendmentor.io, it highlights my ability to transform designs into functional pages.",
        "video": "../videos/dictionary.mp4",
        "webframe": "../images/dictionary-webframe.png",
        "problem": "People frequently need quick and reliable definitions and information about words, requiring a user-friendly application that provides accurate and immediate results.",
        "solution": "The 'Dictionary' project leverages a dictionary API to deliver instant word definitions and information. Built with React, HTML5, CSS, JavaScript, Bootstrap, and Git, it offers a clean and responsive interface. Inspired by frontendmentor.io, it ensures a seamless user experience by effectively transforming design into functionality.",
        "link": ["https://github.com/KhyatiBhosle/dictionary", "https://dictionary-kh77.onrender.com"]
     };
     
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
export default Dictionary;