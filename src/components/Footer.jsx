import { Link } from "react-router-dom";

function Footer(){
    return (<div id="footer" className="row align-items-center">
        <div className="col">
            <h3>Get In Touch!</h3>
            <p>
            Interested in collaborating or impressed by my work? Feel free to reach out, and let's connect!<br/>
            <Link className="link" to="www.linkedin.com/in/khyati-bhosle">
                <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link className="link" to="https://www.facebook.com/khyati.bhosle/">
                <i className="fa-brands fa-square-facebook"></i>            
            </Link>
            <Link className="link" to="https://www.instagram.com/khyatibhoslle/">
                <i className="fa-brands fa-instagram"></i>
            </Link>
            </p>
        </div>
        <div className="col">
            <div className="row align-items-center">
                <div className="col">
                    <Link className="link" to="https://github.com/KhyatiBhosle">
                        <i className="fa-brands fa-github"></i><br/>
                        <span>KhyatiBhosle</span>
                    </Link>
                </div>
                <div className="col">
                    <Link className="link" to="mailto: khyatibhosle@gmail.com">
                        <i className="fa-regular fa-envelope"></i><br/>
                        <span>khyatibhosle@gmail</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;