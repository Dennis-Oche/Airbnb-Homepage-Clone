import { BsDot, BsGlobe } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";



const Footer = () => {
  return <footer className="footer-component">
    <div className="left-group">
      <div className="footer-logo">
        <BiCopyright />
      </div>
      <p> 2023 Airbnb, Inc.</p>
      <div className="footer-logo">
        <BsDot />
      </div>
      <p className="underline">Terms</p>
      <div className="footer-logo">
        <BsDot />
      </div>
      <p className="underline">SiteMap</p>
      <div className="footer-logo">
        <BsDot />
      </div>
      <p className="underline">Privacy</p>
      <div className="footer-logo">
        <BsDot />
      </div>
      <p className="underline">Your Privacy Choices</p>
      <span className="svg-box">
        <svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect>
        </svg>
      </span>
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