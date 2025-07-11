import React, { useRef } from 'react';
import "./Slider.css"
import c1 from '../../../assets/1.jpg'
import c2 from '../../../assets/2.webp'
import c3 from '../../../assets/3.jpeg'
import c4 from '../../../assets/4.webp'
import c5 from '../../../assets/5.webp'
import c6 from '../../../assets/6.webp'

const Slider = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {[
          { name: 'Switzerland', img: c1 },
          { name: 'Finland', img: c2 },
          { name: 'Iceland', img: c3 },
          { name: 'Australia', img: c4 },
          { name: 'Netherland', img: c5 },
          { name: 'Ireland', img: c6 },
        ].map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">X-Dev, Transforming code into visual poetry..!</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
