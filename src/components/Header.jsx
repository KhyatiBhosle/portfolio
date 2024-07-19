
function Header(){
    return (
    <div id="header" className="row  align-items-center">
        <div className="col-2 mobile">
            <img src="images/profilePic.jpeg" alt="profilePic"/>
            <br/>
            <br/>
        </div>
        <div className="col-9 intro">
            <h1>Hi, I'm Khyati!</h1>
            <br/>
            <p><span>WEB DEVELOPER</span><br/><br/>I'm a passionate web developer with a knack for creating beautiful and functional websites. With a background in electrical and computer engineering, I specialize in bringing design concepts to life and optimizing user experiences. When I'm not coding, you'll find me indulging in delicious food, exploring new places, and always on the lookout for the next adventure. Let's create something amazing together!</p>
        </div>
        <div className="col-2 laptop">
            <img src="images/profilePic.jpeg" alt="profilePic"/>
        </div>
        <div className="more">
            <span>
                <a className="link" href="#projects">
                    LEARN MORE <i className="fa-solid fa-chevron-down"></i>
                </a>
            </span>
        </div>
        <hr className="mobile"/>
    </div>)
}

export default Header;