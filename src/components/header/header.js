import './header.css';
import images from '../../assets/images';

const Header = () =>
    <header className="header">
        <div className="logo">
            <img 
                className="logo-img"
                src={images.logo}
                alt="logo"
            />
        </div>
        <div className="search">
            search
        </div>
        <div className="language">
            <select>
                <option selected>EN</option>
                <option>BLR</option>
                <option>RU</option>
            </select>
        </div>
        <div className="authorization">
            <b>Log In</b> or <b>Sign Up</b>
        </div>
    </header>

export default Header;
