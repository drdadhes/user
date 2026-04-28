// import { useEffect, useRef, useState } from "react";

// import bg1 from "../../../assets/bg1.png";
// import bg2 from "../../../assets/bg2.png";
// import bg3 from "../../../assets/bg3.jpg";
// import bg4 from "../../../assets/bg4.png";


// export default function Slider() {
//   const sliderRef = useRef(null);

//   const images = [bg1, bg2, bg3, bg4];

//   const titles = [
//     "Lossless Youths",
//     "Estrange Bond",
//     "The Gate Keeper",
//     "Last Trace Of Us",
//     "Urban Decay",
//     "The Migration",
//   ];

//   // 🔥 BACKGROUND IMAGE STATE
//   const [bgImage, setBgImage] = useState(images[0]);

//   useEffect(() => {
//     const activate = (e) => {
//       if (!e.target.classList.contains("btn")) return;

//       const slider = sliderRef.current;
//       const items = slider.querySelectorAll(".item");

//       if (e.target.classList.contains("next")) {
//         slider.append(items[0]);
//       }

//       if (e.target.classList.contains("prev")) {
//         slider.prepend(items[items.length - 1]);
//       }

//       // 🔥 UPDATE BACKGROUND FROM FIRST ITEM
//       const newFirst = slider.querySelector(".item");
//       setBgImage(newFirst.dataset.bg);
//     };

//     document.addEventListener("click", activate);
//     return () => document.removeEventListener("click", activate);
//   }, []);

//   return (
//     <>
//       <style>{`


//         body {
//           width: 100vw;
//           overflow-x:hidden;
//         }

//         main {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//         }

//         /* 🔥 BACKGROUND LAYER */
//         .background {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           transition: background-image 0.6s ease-in-out;
//           z-index: 0;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0,0,0,0.35);
//           z-index: 1;
//         }

//         ul.slider {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           z-index: 2;
//         }

//         .item {
//           width: 200px;
//           height: 300px;
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background-size: cover;
//           background-position: center;
//           border-radius: 20px;
//           transition: 0.75s;
//         }

//         .item:nth-child(1) { left: 50%; transform: translate(-50%, -50%) scale(1.1); opacity: 0; }
//         .item:nth-child(2) { left: calc(50% + 220px); }
//         .item:nth-child(3) { left: calc(50% + 440px); }
//         .item:nth-child(4) { left: calc(50% + 660px);  }

//         .content {
//           position: absolute;
//           bottom: -80px;
//           left: 0;
//           color: white;
//           text-align: center;
//           width: 100%;
//         }

//         .nav {
//           position: absolute;
//           bottom: 2rem;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 5;
//         }

//         .btn {
//           background: white;
//           border-radius: 50%;
//           padding: 12px;
//           margin: 0 8px;
//           cursor: pointer;
//           user-select: none;
//         }
//       `}</style>

//       <main>
//         {/* 🔥 DYNAMIC BACKGROUND */}
//         <div
//           className="background"
//           style={{ backgroundImage: `url(${bgImage})` }}
//         />
//         <div className="overlay" />

//         <ul className="slider" ref={sliderRef}>
//           {images.map((img, i) => (
//             <li
//               key={i}
//               className="item"
//               data-bg={img}
//               style={{ backgroundImage: `url(${img})` }}
//             >
//               <div className="content">
//                 <h3>{titles[i]}</h3>
//               </div>
//             </li>
//           ))}
//         </ul>

//         <div className="nav">
//           <span className="btn prev">←</span>
//           <span className="btn next">→</span>
//         </div>
//       </main>
//     </>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Using online Ayurvedic/wellness images
const images = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", // Yoga/Meditation
"https://saatwika.in/wp-content/uploads/2023/02/Ayurvedic-Head-Massage-Or-Shiro-Abhyanga.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0E0gA0cM7Uy2dR7GP1dVNt_4PIvR0-77Y2g&s", // Oil therapy
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", // Meditation
  "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?q=80&w=800&auto=format&fit=crop", // Herbal tea
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"  // Ayurvedic treatment
];

const titles = [
  "Panchakarma Therapy",
  "Herbal Medicine",
  "Abhyanga Massage",
  "Meditation & Yoga",
  "Ayurvedic Nutrition",
  "Dosha Balancing"
];

export default function Slider() {
  const sliderRef = useRef(null);
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    const activate = (e) => {
      if (!e.target.classList.contains("btn")) return;

      const slider = sliderRef.current;
      const items = slider.querySelectorAll(".item");

      if (e.target.classList.contains("next")) {
        slider.append(items[0]);
      }

      if (e.target.classList.contains("prev")) {
        slider.prepend(items[items.length - 1]);
      }

      const newFirst = slider.querySelector(".item");
      setBgImage(newFirst.dataset.bg);
    };

    document.addEventListener("click", activate);
    return () => document.removeEventListener("click", activate);
  }, []);

  return (
    <>
      <style>{`
        .slider-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f7f4 0%, #f5f9f7 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Background layer with blur effect */
        .slider-background {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: background-image 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
          filter: blur(8px) brightness(0.7);
          transform: scale(1.1);
        }

        /* Soft Ayurvedic gradient overlay */
        .slider-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(16, 78, 62, 0.75) 0%,
            rgba(13, 103, 83, 0.65) 35%,
            rgba(5, 122, 95, 0.55) 70%,
            rgba(17, 94, 84, 0.7) 100%
          );
          backdrop-filter: blur(2px);
          z-index: 1;
        }

        /* Decorative elements */
        .slider-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10L35 20H25L30 10Z' fill='%23ffffff' opacity='0.03'/%3E%3Cpath d='M30 50L25 40H35L30 50Z' fill='%23ffffff' opacity='0.03'/%3E%3C/svg%3E");
          opacity: 0.15;
          z-index: 1;
        }

        ul.slider {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 5;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .item {
          width: 320px;
          height: 420px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-size: cover;
          background-position: center;
          border-radius: 24px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          overflow: hidden;
        }

        .item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%
          );
          z-index: 1;
        }

        .item:nth-child(1) { 
          left: 50%; 
          transform: translate(-50%, -50%) scale(1.2); 
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 30px 60px -15px rgba(5, 122, 95, 0.4);
          border: 3px solid rgba(255, 255, 255, 0.4);
        }
        
        .item:nth-child(2) { 
          left: calc(50% + 180px); 
          opacity: 1;
        }
        
        .item:nth-child(3) { 
          left: calc(50% + 520px); 
          opacity: 0.7;
          transform: translateY(-50%) scale(0.95);
          filter: brightness(0.9);
        }
        
        .item:nth-child(4) { 
          left: calc(50% + 860px);  
          opacity: 0.4;
          transform: translateY(-50%) scale(0.9);
          filter: brightness(0.8);
        }
        
        .item:nth-child(n+5) { 
          opacity: 0;
          transform: translateY(-50%) scale(0.85);
          filter: brightness(0.7);
        }

        /* Content styling */
        .content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: white;
          text-align: center;
          padding: 24px 20px;
          z-index: 2;
          background: linear-gradient(
            to top,
            rgba(5, 122, 95, 0.9) 0%,
            rgba(5, 122, 95, 0.6) 70%,
            transparent 100%
          );
          backdrop-filter: blur(2px);
          border-bottom-left-radius: 22px;
          border-bottom-right-radius: 22px;
        }

        .content h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .content p {
          margin: 8px 0 0;
          font-size: 0.875rem;
          opacity: 0.9;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.95);
        }

        /* Navigation buttons */
        .nav {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          padding: 0.75rem;
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .btn {
          background: white;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: all 0.3s ease;
          color: #0b4f3a;
          font-size: 1.25rem;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
        }

        .btn:hover {
          background: #0b4f3a;
          color: white;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .btn:active {
          transform: scale(0.95);
        }

        /* Title overlay for background */
        .slider-title {
          position: absolute;
          top: 3rem;
          left: 3rem;
          z-index: 15;
          color: white;
          max-width: 500px;
        }

        .slider-title span {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border-radius: 40px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 1rem;
        }

        .slider-title h2 {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          font-family: 'Inter', sans-serif;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .slider-title p {
          font-size: 1.125rem;
          margin-top: 1rem;
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.95);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .item {
            width: 280px;
            height: 380px;
          }
          .item:nth-child(2) { left: calc(50% + 120px); }
          .item:nth-child(3) { left: calc(50% + 420px); }
          .item:nth-child(4) { left: calc(50% + 720px); }
          .slider-title h2 { font-size: 2.5rem; }
        }

        @media (max-width: 768px) {
          .item {
            width: 240px;
            height: 340px;
          }
          .item:nth-child(2) { left: calc(50% + 80px); }
          .item:nth-child(3) { left: calc(50% + 340px); }
          .item:nth-child(4) { left: calc(50% + 600px); }
          .slider-title { left: 1.5rem; right: 1.5rem; }
          .slider-title h2 { font-size: 2rem; }
        }

        @media (max-width: 640px) {
          .item {
            width: 200px;
            height: 300px;
          }
          .item:nth-child(2) { left: calc(50% + 60px); }
          .item:nth-child(3) { left: calc(50% + 280px); }
          .item:nth-child(4) { left: calc(50% + 500px); }
          .content h3 { font-size: 1.25rem; }
          .nav { bottom: 1.5rem; }
          .btn { width: 40px; height: 40px; }
        }
      `}</style>

      <section className="slider-section">
        {/* Dynamic Background */}
        <div
          className="slider-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="slider-overlay" />
        <div className="slider-pattern" />

        {/* Title Section */}
        <div className="slider-title">
          <span>Our Therapies</span>
          <h2>Ancient Healing,<br />Modern Wellness</h2>
          <p>Experience authentic Ayurvedic treatments</p>
        </div>

        {/* Slider */}
        <ul className="slider" ref={sliderRef}>
          {images.map((img, i) => (
            <li
              key={i}
              className="item"
              data-bg={img}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="content">
                <h3>{titles[i]}</h3>
                <p>Authentic Ayurvedic Treatment</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Navigation */}
        <div className="nav">
          <span className="btn prev">
            	&#8592;
          </span>
          <span className="btn next">
            	&#8594;
          </span>
        </div>
      </section>
    </>
  );
}