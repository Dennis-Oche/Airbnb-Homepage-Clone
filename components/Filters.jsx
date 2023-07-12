import React, { useState, useRef } from 'react';
import { useGlobalContext } from "../context";
import { FiGitCommit } from "react-icons/fi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Filters = () => {
  const { filters } = useGlobalContext();

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLength = window.innerWidth;
  console.log(scrollLength);
  console.log(scrollPosition);

  const handleScroll = (scrollOffset) => {
    containerRef.current.scrollTo({
      left: scrollPosition + scrollOffset,
      behavior: 'smooth',
    });
    setScrollPosition(scrollPosition + scrollOffset);
  };

  return <section className="filter-group" ref={containerRef}>
    {filters.map((filter) => {
      const { imgSource, imgId, imgAlt } = filter;

      return <article key={imgId} className="single-filter">
        <button
          id={imgId}
          className="filter-btn"
          onClick={() => {alert(`You clicked the ${imgAlt} filter!`)}}
        >
          <img src={imgSource} alt={imgAlt} className="filter-img" />
        </button>
        <p>{imgAlt}</p>
      </article>
    })}

    <div className="filter-scrolls">
      <div
        className={`scrollbtn filter-left ${scrollPosition > 0 ? "" : "btn-hide"}`}
        onClick={() => handleScroll(-400)}
      >
        <FaChevronLeft />
      </div>
      <div
        className={`scrollbtn filter-right ${scrollPosition >= scrollLength ? "btn-hide" : ""}`}
        onClick={() => handleScroll(400)}
      >
        <FaChevronRight />
      </div>
    </div>


    <button className="filters-btn">
      <div className="filter-icon">
        <FiGitCommit />
      </div>
      <p>Filters</p>
    </button>

    <div className={`blurry-left ${scrollPosition > 0 ? "" : "btn-hide"}`}></div>
    <div className={`blurry-right ${scrollPosition >= scrollLength ? "btn-hide" : ""}`}></div>
  </section>

}

export default Filters;