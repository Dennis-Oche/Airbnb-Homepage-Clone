
import { SiAirbnb } from "react-icons/si";
import { BsGlobe, BsPersonCircle } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
    return <header className="header">
        <div className="logo-group">
            <div className="logo">
                <SiAirbnb />
            </div>
            <p>airbnb</p>
        </div>
        <div className="search-group">
            <div className="anywhere"><p>Anywhere</p></div>
            <div className="vl"></div>
            <div className="anyweek"><p>Any week</p></div>
            <div className="vl"></div>
            <div className="add-guests"><p>Add guests</p></div>
            <div className="search">
                <FaSearch />
            </div>
        </div>
        <div className="host-group">
            <div className="host">
                <p>Become a Host</p>
            </div>
            <div className="globe"><BsGlobe /></div>
            <div className="profile-group">
                <div className="drop-down">
                    <VscThreeBars />
                </div>
                <div className="profile">
                    <BsPersonCircle />
                </div>
            </div>
        </div>
    </header>
}

export default Header;