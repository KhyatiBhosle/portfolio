import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import React, {useEffect} from "react";

function Home(){
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
    return (
    <div>
        <Header/>
        <Projects/>
        <hr className="hr"/>
        <Skills/>
        <hr className="hr"/>
        <Footer/>
    </div>)
}

export default Home;