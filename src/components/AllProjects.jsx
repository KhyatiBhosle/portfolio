import { Link } from "react-router-dom";
import Footer from "./Footer";
import React, {useEffect} from "react";


function AllProjects(){

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
    return(
        <>
            <div class="allProjects">
                <h1>All Projects</h1>
                <br/>
                <hr/>
                <br/>

                <div className="row">
                    <div className="col-4">
                        <Link to="/projects/todotower">
                            <video className="laptop" src="./videos/ToDo.mp4" autoPlay playsInline muted loop/>

                        </Link>
                    </div>

                    <div className="col-4">
                        <Link to="/projects/rcube">
                            <video className="laptop" src="./videos/OurCube.mp4" autoPlay playsInline muted loop/>

                        </Link>
                    </div>
                    
                    <div className="col-4">
                        <Link to="/projects/bookishjourney">
                            <video className="laptop" src="../videos/BookishJourney.mp4" autoPlay playsInline muted loop/>

                        </Link>
                    </div>

                    <div className="col-4">
                    <Link to="/projects/byou">
                            <video className="laptop" src="./videos/BYou.mp4" autoPlay playsInline muted loop/>

                        </Link>
                    </div>

                    <div className="col-4">
                        <Link to="/projects/dictionary">
                            <video className="laptop" src="./videos/dictionary.mp4" autoPlay playsInline muted loop/>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
export default AllProjects;