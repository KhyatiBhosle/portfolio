import { Link } from "react-router-dom"

function Navbar(){
   return ( 
   <nav className="navbar navbar-background navbar-expand-lg">
        <Link className="navbar-brand" to="/">KHYATI BHOSLE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link className="link" to="/projects">PROJECTS</Link>
            </li>
            <li className="nav-item">
                <Link className="link" to="/about">ABOUT</Link>
            </li>
        </ul>
    </div>
</nav>)
}

export default Navbar