
import { useGlobalContext } from "../context";
import { BsHeartFill, BsStarFill } from "react-icons/bs";

const Homes = () => {
    const {homes, likeFunction} = useGlobalContext();


    return <section className="section-center">
        {homes.map((singleHome) => {
            const {idHome, strHome: title, strHomeThumb: image, strRating, strDistance,  strAvailable, strPrice} = singleHome;

            return <article key={idHome} className="single-home">
                <button id={idHome} className="like-btn" onClick={() => likeFunction(idHome)}>
                    <BsHeartFill />
                </button>
                <img src={image} className="img" alt={title}/>
                <footer>
                    <div className="footer">
                        <h4>{title}</h4>
                        <p><span className="star"><BsStarFill /></span> {strRating}</p>
                    </div>
                    <p className="fade">{strDistance}</p>
                    <p className="fade">{strAvailable}</p>
                    <p className="str-price"><span className="price">{strPrice}</span> night</p>
                </footer>
            </article>
        })}
    </section>
}

export default Homes;