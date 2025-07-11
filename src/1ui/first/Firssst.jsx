import React, { useEffect, useRef } from "react";
import './Firssst.css'
import img1 from "../../../assets/img1/img1.jpg";
import img2 from "../../../assets/img1/img2.jpg";
import img3 from "../../../assets/img1/img3.jpg";
import img4 from "../../../assets/img1/img4.jpg";
// import img5 from "../../../assets/1.jpg";

const images = [img1, img2, img3, img4];

const Firssst = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextTimeoutRef = useRef(null);
  const runningTimeoutRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearTimeout(nextTimeoutRef.current);
      clearTimeout(runningTimeoutRef.current);
    };
  }, []);

  const showSlider = (type) => {
    const list = listRef.current;
    const thumbnails = thumbnailRef.current;

    const sliderItems = list.querySelectorAll(".item");
    const thumbnailItems = thumbnails.querySelectorAll(".item");

    if (type === "next") {
      list.appendChild(sliderItems[0]);
      thumbnails.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      list.prepend(sliderItems[sliderItems.length - 1]);
      thumbnails.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runningTimeoutRef.current);
    runningTimeoutRef.current = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(nextTimeoutRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    nextTimeoutRef.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);
  };

  return (
    <div className="carousel" ref={carouselRef}>
        

      <div className="list" ref={listRef}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="content">
              <div className="author">X-Dev</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
                rem magnam nesciunt minima placeat, itaque eum neque officiis unde...
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
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default Firssst;
