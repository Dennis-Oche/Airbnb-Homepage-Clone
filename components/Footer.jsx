import { BsDot, BsGlobe } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";



const Footer = () => {
    return <footer className="footer-component">
        <div className="left-group">            
            <div className="footer-logo">
                <BiCopyright />
            </div>
            <p> 2022 Airbnb, Inc.</p>
            <div className="footer-logo">
                <BsDot />
            </div>
            <p className="underline">Privacy</p>
            <div className="footer-logo">
                <BsDot />
            </div>
            <p className="underline">Terms</p>
            <div className="footer-logo">
                <BsDot />
            </div>
            <p className="underline">Sitemap</p>
            <div className="footer-logo">
                <BsDot />
            </div>
            <p className="underline">Destinations</p>
        </div>

        <div className="right-group">
            <div className="footer-logo">
                <BsGlobe />
            </div>
            <p className="underline">English (US)</p>
            <p>$ </p>
            <p className="underline">USD</p>
            <p className="underline">Support and resources</p>
            <div className="footer-logo">
                <FaChevronUp />
            </div>
        </div>
    </footer>
}

export default Footer;