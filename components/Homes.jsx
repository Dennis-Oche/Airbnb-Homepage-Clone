
import { useGlobalContext } from "../context";
import { BsHeartFill, BsStarFill, BsDot } from "react-icons/bs";
import Carousel from "./Carousel";

const Homes = () => {
  const {homes, likeFunction} = useGlobalContext();

  return <section className="section-center">
    {homes.map((singleHome) => {
      const {idHome, strHome: title, strHomeThumb: images, strRating, strDistance,  strAvailable, strPrice, strHost, strJob} = singleHome;

      return <article key={idHome} className="single-home">
        <button id={idHome}
          className="like-btn"
          onClick={() => likeFunction(idHome)}
        >
          <BsHeartFill />
        </button>
        <div>
          <Carousel images={images} />
        </div>
        <footer>
            <div className="footer">
              <h4>{title}</h4>
              <p><span className="star"><BsStarFill /></span> {strRating}</p>
            </div>
            <p className="fade">Stay with {strHost} {strJob ? <BsDot className="bs-dot" /> : ""} {strJob}</p>
            <p className="fade">{strDistance}</p>
            <p className="fade">{strAvailable}</p>
            <p className="str-price"><span className="price">{strPrice}</span> total before taxes</p>
        </footer>
      </article>
    })}
  </section>
}

export default Homes;