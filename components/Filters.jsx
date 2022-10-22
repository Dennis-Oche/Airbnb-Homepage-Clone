import { useGlobalContext } from "../context";
import { FiGitCommit } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

const Filters = () => {
    const {filters} = useGlobalContext();

    return <section className="filter-group">
        {filters.map((filter) => {
            const {imgSource, imgId, imgAlt} = filter;

            return <article key={imgId} className="single-filter">
                <button id={imgId} className="filter-btn">
                    <img src={imgSource} alt={imgAlt} className="filter-img" />
                </button>
                <p>{imgAlt}</p>
            </article>
        })}
        <button className="filters-btn">
            <div className="filter-icon">
                <FiGitCommit />                
            </div>
            <p>Filters</p>
        </button>
        <div className="filter-scrolls">
            <div className="scrollbtn right">
                <FaChevronRight />
            </div>
        </div>
        <div className="blurry-right"></div>
    </section>

}

export default Filters;