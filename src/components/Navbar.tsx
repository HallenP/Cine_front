
//import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact } from 'react-icons/fa';
import SocialMoon from '../SocialIcons/SocialIconsMoon';
import '../assets/css/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navabr = () => {
    return (
        <>

            <nav >
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>about</li>
                    
                    <li>contac me</li>
                    <li><NavLink to="/Peliculas">Peliculas</NavLink></li>
                    <li><NavLink to="/Bar">Bar</NavLink></li>
                    <button className="sc-gsDKAQ hKNscq Button Navbar__btn Navbar__btn__login Navbar__btn__login__mobile">
                        <span className="Button__wrapper">Ingresar</span>
                        </button>
                    <li><FaReact/></li>
                    <li><SocialMoon/></li>
                </ul>
                
            </nav>

        </>
    )
}


export default Navabr;