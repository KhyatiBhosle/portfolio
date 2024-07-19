import React, {useEffect} from "react";
import Footer from "./Footer"
function About(){
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return(
        <>
        <div id="about">
            <div>
                <h4>EDUCATION</h4>
                <div class="section">
                    <p>
                        <span className="duration">
                            April 2024
                        </span>
                        <br/>
                        <span className="place">
                            Carleton University, Ottawa, Ontario, Canada 
                        </span>
                        <br/>
                        Masters of Engineering in Electrical and Computer Engineering (concentration of software engineering)
                    </p>
                    <p>
                        <span className="duration">
                            June 2021
                        </span>
                        <br/>
                        <span className="place">
                            Gujarat Technological University, Gujarat, India 
                        </span>
                        <br/>
                        Bachelors of Engineering in Electronics and Communication Engineering
                </p>
                </div>
                <br/>
                <h4>WORK EXPERIENCE</h4>
                <div class="section">
                    <p>
                        <span className="duration">
                            July 2021 - March 2022
                        </span>
                        <br/>
                        <span className="place">
                            myOnsite Healthcare, LLC. (Remote) 
                        </span>
                        <br/> 
                        Junior UI/UX Developer<br/>
                        <ul>
                            <li>Collaborated with cross-functional teams, including developers and content creators, to translate design concepts into functional web interfaces.</li>
                            <li>Enhanced website aesthetics and functionality, optimizing user engagement and visual appeal through advanced use of CSS, JavaScript, and Bootstrap.</li>
                            <li>Conceptualized and executed visually compelling website designs that met client requirements and adhered to brand guidelines.</li>
                            <li>Applied best practices in UX design to ensure intuitive navigation and seamless user interactions.</li>
                        </ul> 
                    </p>
                    <p>
                        <span className="duration">
                            April 2021 - June 2021
                        </span><br/>
                        <span className="place">
                            myOnsite Healthcare, LLC. (Remote) 
                        </span>
                        <br/> 
                        Development and Marketing Intern <br/>
                        <ul>
                            <li>Designed responsive email templates using HTML, CSS, and Bootstrap, maintaining brand consistency.</li>
                            <li>Supported the development team in refining UI design to enhance user experience.</li>
                            <li>Collaborated with developers to implement design specifications, ensuring seamless UI integration.</li>
                        </ul>                     
                    </p>
                </div>
                <br/>
                <h4>OTHER EXPERIENCE</h4>
                <div class="section">
                    <p>
                        <span className="duration">
                            April 2022- Present
                        </span><br/>
                        <span className="place">
                            FreshCo Ltd. Ottawa, Ontario, Canada 
                        </span>
                        <br/> 
                        Frontend Supervisor<br/>
                        <ul>
                            <li>Conduct periodic audits to prevent discrepancies and ensure secure cash handling.</li>
                            <li>Delivered exceptional customer service by resolving inquiries and issues, enhancing the shopping experience.</li>
                            <li>Managed cash drawer balances and executed precise end-of-day reconciliations.</li>
                            <li>Stayed informed on product knowledge, promotions, and company policies to assist customers effectively.</li>
                        </ul>                     
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
        
    )
}

export default About