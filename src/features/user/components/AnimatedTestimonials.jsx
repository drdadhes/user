
// import React, { useState, useEffect, useRef } from 'react';
// import { Sparkles, Quote } from 'lucide-react';

// const AnimatedTestimonials = () => {
//   const testimonials = [
//     {
//       quote:
//         'I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I\'ll definitely be back for more!',
//       name: 'Tamar Mendelson',
//       designation: 'Restaurant Critic',
//       src: 'https://media.istockphoto.com/id/1175131167/photo/portrait-of-an-indian-woman-with-cancer-and-her-doctor.jpg?s=612x612&w=0&k=20&c=15FJDj5X4hla5DjAuK3WWLFJ1FfTd0zn-OkaCG2e6Eg=',
//     },
//     {
//       quote:
//         'This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I\'ll definitely keep returning for more exceptional dining experience.',
//       name: 'Joe Charlescraft',
//       designation: 'Frequent Visitor',
//       src: 'https://media.istockphoto.com/id/1295918934/photo/uses-laptop-while-talking-with-patient-stock-photo.jpg?s=1024x1024&w=is&k=20&c=8-bzpPArfbQov9FwICiPvvSQOBfkvcO_yFwe-u_UGzc=',
//     },
//     {
//       quote:
//         'Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!',
//       name: 'Martina Edelweist',
//       designation: 'Satisfied Customer',
//       src: 'https://media.istockphoto.com/id/1525210674/photo/portrait-happy-mature-female-indian-doctor-standing-with-senior-male-patient-holding-red.jpg?s=1024x1024&w=is&k=20&c=NsMNOB3SkphFtGxkDKNUhZfeKIOytqxsXkVGYblVvak=',
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const intervalRef = useRef(null);
//   const quoteRef = useRef(null);
//   const timeoutIdsRef = useRef([]);

//   const getImageStyle = (index) => {
//     const offset = index - activeIndex;
//     const absOffset = Math.abs(offset);
//     const zIndex = testimonials.length - absOffset;
//     const opacity = index === activeIndex ? 1 : 0.25;

//     let translateY = '0%';
//     let translateX = '0%';
//     let scale = 1 - absOffset * 0.08;
//     let rotate = '0deg';

//     if (offset < 0) {
//       translateX = `${offset * 6}%`;
//       translateY = `${Math.abs(offset) * 2}%`;
//       rotate = `${offset * 4}deg`;
//     } else if (offset > 0) {
//       translateX = `${offset * 6}%`;
//       translateY = `${offset * 2}%`;
//       rotate = `${offset * 4}deg`;
//     }

//     const transform = `translateX(${translateX}) translateY(${translateY}) scale(${scale}) rotate(${rotate})`;

//     return { zIndex, opacity, transform };
//   };

//   const stopAutoplay = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   const handleNext = () => {
//     stopAutoplay();
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     stopAutoplay();
//     setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       handleNext();
//     }, 6000);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (!quoteRef.current) return;

//     timeoutIdsRef.current.forEach((id) => clearTimeout(id));
//     timeoutIdsRef.current = [];

//     const words = quoteRef.current.querySelectorAll('.word');
//     words.forEach((word, idx) => {
//       word.style.opacity = '0';
//       word.style.transform = 'translateY(10px)';
//       word.style.filter = 'blur(8px)';

//       const timeoutId = setTimeout(() => {
//         word.style.transition =
//           'opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out';
//         word.style.opacity = '1';
//         word.style.transform = 'translateY(0)';
//         word.style.filter = 'blur(0)';
//       }, idx * 25);
//       timeoutIdsRef.current.push(timeoutId);
//     });

//     return () => {
//       timeoutIdsRef.current.forEach((id) => clearTimeout(id));
//       timeoutIdsRef.current = [];
//     };
//   }, [activeIndex]);

//   const activeTestimonial = testimonials[activeIndex];

//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/30 to-emerald-100/20 blur-3xl"></div>

//         {/* Floating Lotus/Leaf Patterns */}
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-800">
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
//           </svg>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
//             <Sparkles className="h-5 w-5 text-emerald-600" />
//             <span className="text-emerald-800 text-sm font-medium tracking-wider">
//               Healing Stories
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
//             What Our Patients Say
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Real experiences from those who discovered balance and wellness through our Ayurvedic approach
//           </p>
//         </div>

//         {/* Testimonials Container */}
//         <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-emerald-100 shadow-sm p-8 lg:p-12">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Image container */}
//             <div className="relative w-full h-[400px] lg:h-[450px] perspective-[1000px] order-2 lg:order-1">
//               {testimonials.map((testimonial, index) => (
//                 <img
//                   key={index}
//                   src={testimonial.src}
//                   alt={testimonial.name}
//                   className="absolute w-full h-full object-cover rounded-2xl border-4 border-white shadow-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
//                   style={{
//                     ...getImageStyle(index),
//                     boxShadow: index === activeIndex 
//                       ? '0 20px 40px -12px rgba(4, 120, 87, 0.25)' 
//                       : '0 10px 30px -8px rgba(0, 0, 0, 0.1)'
//                   }}
//                   data-index={index}
//                 />
//               ))}

//               {/* Decorative Elements */}
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-2xl"></div>
//               <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-tr from-amber-100/30 to-emerald-100/30 rounded-full blur-2xl"></div>
//             </div>

//             {/* Testimonial content */}
//             <div className="flex flex-col justify-between order-1 lg:order-2">
//               <div>
//                 {/* Quote Icon */}
//                 <div className="mb-6">
//                   <Quote className="h-10 w-10 text-emerald-200" />
//                 </div>

//                 {/* Quote Text */}
//                 <div ref={quoteRef} className="space-y-6">
//                   <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-serif italic">
//                     "{activeTestimonial.quote.split(' ').map((word, i) => (
//                       <span key={i} className="word inline-block">
//                         {word}{' '}
//                       </span>
//                     ))}"
//                   </p>
//                 </div>

//                 {/* Author Info */}
//                 <div className="mt-8 pt-8 border-t border-emerald-100">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-xl font-serif font-bold text-slate-900">
//                         {activeTestimonial.name}
//                       </h3>
//                       <p className="text-sm text-emerald-700 mt-1 font-medium">
//                         {activeTestimonial.designation}
//                       </p>
//                     </div>

//                     {/* Navigation Buttons */}
//                     <div className="flex gap-3">
//                       <button
//                         className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300 group"
//                         onClick={handlePrev}
//                         aria-label="Previous testimonial"
//                       >
//                         <svg 
//                           xmlns="http://www.w3.org/2000/svg" 
//                           viewBox="0 0 24 24"
//                           className="w-5 h-5 fill-emerald-600 transition-transform duration-300 group-hover:-translate-x-0.5"
//                         >
//                           <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
//                         </svg>
//                       </button>
//                       <button
//                         className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300 group"
//                         onClick={handleNext}
//                         aria-label="Next testimonial"
//                       >
//                         <svg 
//                           xmlns="http://www.w3.org/2000/svg" 
//                           viewBox="0 0 24 24"
//                           className="w-5 h-5 fill-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5"
//                         >
//                           <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Dots Indicator */}
//               <div className="flex justify-center lg:justify-start gap-2 mt-8">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       stopAutoplay();
//                       setActiveIndex(index);
//                     }}
//                     className={`transition-all duration-300 rounded-full ${
//                       index === activeIndex
//                         ? 'w-8 h-2 bg-gradient-to-r from-emerald-600 to-teal-600'
//                         : 'w-2 h-2 bg-emerald-200 hover:bg-emerald-400'
//                     }`}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedTestimonials;



import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import testimonial1 from "../../../assets/testimonial1.jpeg"
import testimonial2 from "../../../assets/testimonial2.jpeg"
import testimonial3 from "../../../assets/testimonial3.jpeg"


const AnimatedTestimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t?.testimonials?.testimonialsList?.[0]?.quote || "",
      name: t?.testimonials?.testimonialsList?.[0]?.name || "",
      designation: t?.testimonials?.testimonialsList?.[0]?.designation || "",
      src: testimonial1,
    },
    {
      quote: t?.testimonials?.testimonialsList?.[1]?.quote || "",
      name: t?.testimonials?.testimonialsList?.[1]?.name || "",
      designation: t?.testimonials?.testimonialsList?.[1]?.designation || "",
      src: testimonial2,
    },
    {
      quote: t?.testimonials?.testimonialsList?.[2]?.quote || "",
      name: t?.testimonials?.testimonialsList?.[2]?.name || "",
      designation: t?.testimonials?.testimonialsList?.[2]?.designation || "",
      src: testimonial3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const quoteRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  const getImageStyle = (index) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    const zIndex = testimonials.length - absOffset;
    const opacity = index === activeIndex ? 1 : 0.25;

    let translateY = '0%';
    let translateX = '0%';
    let scale = 1 - absOffset * 0.08;
    let rotate = '0deg';

    if (offset < 0) {
      translateX = `${offset * 6}%`;
      translateY = `${Math.abs(offset) * 2}%`;
      rotate = `${offset * 4}deg`;
    } else if (offset > 0) {
      translateX = `${offset * 6}%`;
      translateY = `${offset * 2}%`;
      rotate = `${offset * 4}deg`;
    }

    const transform = `translateX(${translateX}) translateY(${translateY}) scale(${scale}) rotate(${rotate})`;

    return { zIndex, opacity, transform };
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleNext = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    stopAutoplay();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!quoteRef.current) return;

    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];

    const words = quoteRef.current.querySelectorAll('.word');
    words.forEach((word, idx) => {
      word.style.opacity = '0';
      word.style.transform = 'translateY(10px)';
      word.style.filter = 'blur(8px)';

      const timeoutId = setTimeout(() => {
        word.style.transition =
          'opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out';
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
        word.style.filter = 'blur(0)';
      }, idx * 25);
      timeoutIdsRef.current.push(timeoutId);
    });

    return () => {
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/30 to-emerald-100/20 blur-3xl"></div>

        {/* Floating Lotus/Leaf Patterns */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-800">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Section Header - Compact */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-800 text-xs font-medium tracking-wider">
              {t?.testimonials?.badge || "Healing Stories"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            {t?.testimonials?.title || "What Our Patients Say"}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            {t?.testimonials?.subtitle || "Real experiences from those who discovered balance and wellness through our Ayurvedic approach"}
          </p>
        </div>

        {/* Testimonials Container - Compact */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image container */}
            <div className="relative w-full h-[180px] lg:h-[280px] perspective-[1000px] order-2 lg:order-1">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    ...getImageStyle(index),
                    boxShadow: index === activeIndex
                      ? '0 20px 40px -12px rgba(4, 120, 87, 0.25)'
                      : '0 10px 30px -8px rgba(0, 0, 0, 0.1)'
                  }}
                  data-index={index}
                />
              ))}

              {/* Decorative Elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-2xl"></div>
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-tr from-amber-100/30 to-emerald-100/30 rounded-full blur-2xl"></div>
            </div>

            {/* Testimonial content */}
            <div className="flex flex-col justify-between order-1 lg:order-2">
              <div>
                {/* Quote Icon - Smaller */}
                <div className="mb-3">
                  <Quote className="h-7 w-7 text-emerald-200" />
                </div>

                {/* Quote Text - Compact */}
                <div ref={quoteRef} className="space-y-4">
                  <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-serif italic">
                    "{activeTestimonial.quote
                      .split(/\s+/)
                      .map((word, i) => (
                        <span key={i} className="word inline-block mr-1">
                          {word}
                        </span>
                      ))}"
                  </p>
                </div>

                {/* Author Info - Compact */}
                <div className="mt-5 pt-5 border-t border-emerald-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-900">
                        {activeTestimonial.name}
                      </h3>
                      <p className="text-xs text-emerald-700 mt-1 font-medium">
                        {activeTestimonial.designation}
                      </p>
                    </div>

                    {/* Navigation Buttons - Smaller */}
                    <div className="flex gap-2">
                      <button
                        className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300 group"
                        onClick={handlePrev}
                        aria-label={t?.testimonials?.prevButton || "Previous testimonial"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-emerald-600 transition-transform duration-300 group-hover:-translate-x-0.5"
                        >
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                      </button>
                      <button
                        className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300 group"
                        onClick={handleNext}
                        aria-label={t?.testimonials?.nextButton || "Next testimonial"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Indicator - Compact */}
              <div className="flex justify-center lg:justify-start gap-2 mt-5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoplay();
                      setActiveIndex(index);
                    }}
                    className={`transition-all duration-300 rounded-full ${index === activeIndex
                      ? 'w-6 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600'
                      : 'w-1.5 h-1.5 bg-emerald-200 hover:bg-emerald-400'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;