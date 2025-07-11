// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Image Carousel</title>
// <style>
//     /* Basic reset */
//     * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//     }

//     /* Body styling */
//     body {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         background-color: #f0f0f0;
//         font-family: Arial, sans-serif;
//     }

//     /* Carousel container */
//     .carousel {
//         position: relative;
//         width: 80%;
//         max-width: 800px;
//         overflow: hidden;
//         border-radius: 10px;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//     }

//     /* Carousel inner content */
//     .carousel-content {
//         display: flex;
//         transition: transform 0.5s ease-in-out;
//     }

//     /* Each slide styling */
//     .carousel-slide {
//         min-width: 100%;
//         position: relative;
//         display: flex;
//         align-items: center;
//         color: white;
//         font-size: 1.2em;
//     }

//     /* Image in each slide */
//     .carousel-slide img {
//         width: 100%;
//         height: auto;
//         border-radius: 10px;
//     }

//     /* Overlay content */
//     .carousel-text {
//         position: absolute;
//         left: 20px;
//         top: 20px;
//         background-color: rgba(0, 0, 0, 0.5);
//         padding: 20px;
//         border-radius: 8px;
//     }

//     .carousel-text h2 {
//         font-size: 2em;
//         margin-bottom: 10px;
//     }

//     .carousel-text p {
//         margin-bottom: 10px;
//     }

//     .carousel-text button {
//         padding: 10px 20px;
//         background-color: #007bff;
//         border: none;
//         color: white;
//         cursor: pointer;
//         border-radius: 5px;
//     }

//     /* Navigation buttons */
//     .carousel-controls {
//         position: absolute;
//         bottom: 20px;
//         width: 100%;
//         display: flex;
//         justify-content: center;
//         gap: 10px;
//     }

//     .carousel-controls button {
//         background-color: rgba(255, 255, 255, 0.8);
//         border: none;
//         padding: 10px;
//         border-radius: 50%;
//         cursor: pointer;
//         transition: background-color 0.3s;
//     }

//     .carousel-controls button:hover {
//         background-color: rgba(255, 255, 255, 1);
//     }
// </style>
// </head>
// <body>

// <div class="carousel">
//     <div class="carousel-content">
//         <!-- Slide 1 -->
//         <div class="carousel-slide">
//             <img src="https://via.placeholder.com/800x400" alt="Slide 1">
//             <div class="carousel-text">
//                 <h2>Australia</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, eum!</p>
//                 <button>See More</button>
//             </div>
//         </div>
//         <!-- Slide 2 -->
//         <div class="carousel-slide">
//             <img src="https://via.placeholder.com/800x400" alt="Slide 2">
//         </div>
//         <!-- Slide 3 -->
//         <div class="carousel-slide">
//             <img src="https://via.placeholder.com/800x400" alt="Slide 3">
//         </div>
//     </div>

//     <!-- Navigation Buttons -->
//     <div class="carousel-controls">
//         <button onclick="prevSlide()">&#10094;</button>
//         <button onclick="nextSlide()">&#10095;</button>
//     </div>
// </div>

// <script>
//     let currentSlide = 0;

//     function showSlide(index) {
//         const slides = document.querySelector('.carousel-content');
//         const totalSlides = slides.children.length;
//         currentSlide = (index + totalSlides) % totalSlides;
//         slides.style.transform = translateX(-${currentSlide * 100}%);
//     }

//     function nextSlide() {
//         showSlide(currentSlide + 1);
//     }

//     function prevSlide() {
//         showSlide(currentSlide - 1);
//     }
// </script>

// </body>
// </html>
