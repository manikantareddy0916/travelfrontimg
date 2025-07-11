import React, { useEffect, useRef } from 'react';
import './Third.css';
import img1 from "../../../assets/img1/img1.jpg";
import img2 from "../../../assets/img1/img2.jpg";
import img3 from "../../../assets/img1/img3.jpg";
import img4 from "../../../assets/img1/img4.jpg";

const images = [img1, img2, img3, img4];


export default function Third() {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);
  const autoNextRef = useRef();
  const runTimeOutRef = useRef();

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.querySelectorAll('.item');
    const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(runTimeOutRef.current);
    runTimeOutRef.current = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  useEffect(() => {
    autoNextRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(autoNextRef.current);
      clearTimeout(runTimeOutRef.current);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Contacts</a>
          <a href="">Info</a>
        </nav>
      </header>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`slide-${index}`} />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit... (truncated)
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {images.map((img, index) => (
            <div className="item" key={`thumb-${index}`}>
              <img src={img} alt={`thumb-${index}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')}>&lt;</button>
          <button id="next" onClick={() => showSlider('next')}>&gt;</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </>
  );
}


