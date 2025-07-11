import React, { useEffect, useRef, useState } from 'react';
import './Four.css';
import img1 from "../../../assets/img2/img1.png";
import img2 from "../../../assets/img2/img2.jpg";
import img3 from "../../../assets/img2/img3.jpg";
import img4 from "../../../assets/img2/img4.jpg";
import img5 from "../../../assets/img2/img4.jpg";

const images = [
  { src: img1, title: 'Slider 01' },
  { src: img2, title: 'Slider 02' },
  { src: img3, title: 'Slider 03' },
  { src: img4, title: 'Slider 04' },
  { src: img5, title: 'Slider 05' }
];

export default function Four  ()  {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = index => {
    setActiveIndex(index);
  };

  useEffect(() => {
    scrollThumbnailIntoView();
    startAutoSlide();
  }, [activeIndex]);

  const scrollThumbnailIntoView = () => {
    const thumbnail = thumbnailRefs.current[activeIndex];
    if (thumbnail) {
      thumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  };

  return (
    <div className="slider">
      <div className="list">
        {images.map((img, index) => (
          <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`}>
            <img src={img.src} alt={img.title} />
            <div className="content">
              <p>design</p>
              <h2>{img.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Ipsum, ex.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={prevSlide}>{'<'}</button>
        <button onClick={nextSlide}>{'>'}</button>
      </div>
      <div className="thumbnail">
        {images.map((img, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            ref={el => (thumbnailRefs.current[index] = el)}
          >
            <img src={img.src} alt={`Thumbnail ${index + 1}`} />
            <div className="content">Name Slider</div>
          </div>
        ))}
      </div>
    </div>
  );
};

