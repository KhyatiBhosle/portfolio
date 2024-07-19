import { Link } from "react-router-dom";

function Projects(){
    return (
    <div id="projects" className="row align-items-center">
        <h3>My Recent Work</h3>
        
        <div className="col-4">
            <div className="eachProject">
                <div className="hoverEffect">  
                    <h4>
                        To-Do Tower
                    </h4>
                    <p>
                       Helps you organize and visualize your day-to-day tasks.<br/>
                        <Link className="link" to="/projects/todotower">MORE INFO</Link>
                    </p>
                </div>
                <video className="laptop" src="videos/ToDo.mp4" autoPlay playsInline muted loop/>
            </div>
        </div>

        <div className="col-4">
            <div className="eachProject">
                <div className="hoverEffect">  
                    <h4>
                        Our-Cube
                    </h4>
                    <p>
                        One stop destination for accomodation, jobs and rides!<br/>
                        <Link className="link" to="/projects/rcube">MORE INFO</Link>
                    </p>
                </div>
                <video className="laptop" src="videos/OurCube.mp4" autoPlay playsInline muted loop/>

            </div>
        </div>

        <div className="col-4">
            <div className="eachProject">
                <div className="hoverEffect">  
                    <h4>
                        B-You
                    </h4>
                    <p>
                       Share what you are thinking with everyone using B-You.<br/>
                        <Link className="link" to="/projects/byou">MORE INFO</Link>
                    </p>
                </div>
                <video className="laptop" src="videos/BYou.mp4" autoPlay playsInline muted loop/>

            </div>
        </div>
      
        
        <div>
            <Link to="/projects">
            <br />
                <button className="btn">
                    View All Projects
                </button>
            </Link>
        </div>
    </div>)
}

export default Projects;