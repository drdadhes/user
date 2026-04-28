// import React, { useState, useEffect } from "react";
// import { Sparkles, Leaf, Brain, Heart, Moon, Sun } from "lucide-react";
// import rightBg from "../../../assets/rightBg1.png";



// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" fill="none" viewBox="0 0 1200 800">
//             <path
//               d="M200 300c30-30 60-60 90-90 30 30 60 60 90 90-30 30-60 60-90 90-30-30-60-60-90-90z"
//               stroke="#4B6F44"
//               strokeWidth="0.5"
//             />
//             <path
//               d="M800 500c40 40 80 80 120 120-40 40-80 80-120 120-40-40-80-80-120-120 40-40 80-80 120-120z"
//               stroke="#4B6F44"
//               strokeWidth="0.5"
//             />
//             <circle
//               cx="400"
//               cy="200"
//               r="40"
//               stroke="#4B6F44"
//               strokeWidth="0.5"
//               fill="none"
//             />
//             <circle
//               cx="900"
//               cy="600"
//               r="60"
//               stroke="#4B6F44"
//               strokeWidth="0.5"
//               fill="none"
//             />
//           </svg>
//         </div>

//         <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
//           <Leaf className="w-full h-full text-emerald-800" />
//         </div>
//         <div className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-5">
//           <Brain className="w-full h-full text-teal-800" />
//         </div>
//       </div>

//       <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-teal-100/30 blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/40 to-emerald-100/20 blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left Column - Content */}
//           <div className="text-center lg:text-left space-y-8">
//             {/* Premium Badge */}
//             <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
//               <div className="relative">
//                 <Sparkles className="h-5 w-5 text-emerald-600" />
//               </div>
//               <span className="text-emerald-800 text-sm font-medium tracking-wider">
//                 Ancient Wisdom, Modern Wellness
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
//               <span className="block text-slate-900">Rediscover Your</span>

//               <span className="block text-emerald-800 mt-2">
//                 Natural Harmony
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//              Experience authentic Ayurvedic healing that brings balance to body, mind, and spirit. Our holistic approach combines 5,000 years of wisdom with modern wellness practices.
//             </p>

//             {/* Enhanced Floating Elements Section */}
//             <div className="pt-12">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {/* Swing Animation Card 1 */}
//                 <div className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md ">
//                   <div className="flex flex-col items-center text-center space-y-3">
//                     <div className="p-3 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-200">
//                       <Leaf className="h-6 w-6 text-emerald-600" />
//                     </div>
//                     <div>
//                       <div className="text-base font-bold text-slate-800 mb-1">
//                         Natural
//                       </div>
//                       <div className="text-sm text-slate-500">
//                         Herbal Remedies
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></div>
//                 </div>

//                 {/* Swing Animation Card 2 */}
//                 <div
//                   className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md "
//                   style={{ animationDelay: "0.2s" }}
//                 >
//                   <div className="flex flex-col items-center text-center space-y-3">
//                     <div className="p-3 bg-teal-50 rounded-full group-hover:scale-110 transition-transform duration-200">
//                       <Brain className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <div className="text-base font-bold text-slate-800 mb-1">
//                         Mindful
//                       </div>
//                       <div className="text-sm text-slate-500">
//                         Daily Practices
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400 animate-pulse"></div>
//                 </div>

//                 {/* Additional Card 3 */}
//                 <div
//                   className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md"
//                   style={{ animationDelay: "0.4s" }}
//                 >
//                   <div className="flex flex-col items-center text-center space-y-3">
//                     <div className="p-3 bg-amber-50 rounded-full group-hover:scale-110 transition-transform duration-300">
//                       <Sun className="h-6 w-6 text-amber-600" />
//                     </div>
//                     <div>
//                       <div className="text-base font-bold text-slate-800 mb-1">
//                       Vitality
//                       </div>
//                       <div className="text-sm text-slate-500">
//                         Energy Balance
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 animate-pulse"></div>
//                 </div>

//                 {/* Additional Card 4 */}
//                 <div
//                   className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md "
//                   style={{ animationDelay: "0.6s" }}
//                 >
//                   <div className="flex flex-col items-center text-center space-y-3">
//                     <div className="p-3 bg-indigo-50 rounded-full group-hover:scale-110 transition-transform duration-300">
//                       <Moon className="h-6 w-6 text-indigo-600" />
//                     </div>
//                     <div>
//                       <div className="text-base font-bold text-slate-800 mb-1">
//                       Restorative
//                       </div>
//                       <div className="text-sm text-slate-500">
//                         Sleep & Recovery
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-indigo-400 animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial/Trust */}
//             <div className="pt-12 border-t border-slate-200">
//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-600">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-emerald-700 animate-count-up">
//                     5,000+
//                   </div>
//                   <div className="text-sm text-slate-500 mt-1">
//                     Transformed Lives
//                   </div>
//                 </div>
//                 <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
//                 <div className="text-center">
//                   <div
//                     className="text-2xl font-bold text-emerald-700 animate-count-up"
//                     style={{ animationDelay: "0.3s" }}
//                   >
//                    98%
//                   </div>
//                   <div className="text-sm text-slate-500 mt-1">
//                     Satisfaction Rate
//                   </div>
//                 </div>
//                 <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
//                 <div className="text-center">
//                   <div
//                     className="text-2xl font-bold text-emerald-700 animate-count-up"
//                     style={{ animationDelay: "0.6s" }}
//                   >
//                   25+
//                   </div>
//                   <div className="text-sm text-slate-500 mt-1">
//                     Expert Practitioners
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Visual */}
//           <div className="relative">
//             {/* Main Visual Container */}
//             <div className="relative">
//               {/* Background Card */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl transform rotate-3 animate-pulse-slow"></div>

//               {/* Main Image/Visual */}
//               <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
//                 <div className="aspect-[6/7] bg-gradient-to-b from-emerald-50 to-white">
//                   {/* Ayurvedic Elements Grid */}
//                   <div className="absolute inset-0 p-8 grid grid-cols-3 gap-6 opacity-20">
//                     {[...Array(9)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center justify-center animate-float"
//                         style={{ animationDelay: `${i * 0.1}s` }}
//                       >
//                         <Leaf className="h-8 w-8 text-emerald-600" />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Central Symbol */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative  flex items-center justify-center animate-float-slow">
//                       <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full blur-xl animate-pulse"></div>
//                       <div className="relative w-[60%] h-[60%] rounded-full bg-gradient-to-br from-emerald-600 to-white border-8 border-white shadow-lg flex items-center justify-center">
//                         <div className="text-center">
//                           <img src={rightBg} />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements with Swing Animation */}
//               <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-slate-100 animate-swing">
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-emerald-50 rounded-lg">
//                     <Leaf className="h-6 w-6 text-emerald-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">
//                       Natural
//                     </div>
//                     <div className="text-xs text-slate-500">
//                      Herbal Remedies
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-slate-100 animate-swing"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-teal-50 rounded-lg">
//                     <Brain className="h-6 w-6 text-teal-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold text-slate-800">
//                      Mindful
//                     </div>
//                     <div className="text-xs text-slate-500">
//                       Daily Practices
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

//       {/* Custom CSS for Animations */}
//       <style jsx>{`
//         @keyframes swing {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-18px);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes count-up {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-swing {
//           animation: swing 3s ease-in-out infinite;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-count-up {
//           animation: count-up 1s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import { Sparkles, Leaf, Brain, Heart, Moon, Sun } from "lucide-react";
import rightBg from "../../../assets/rightBg1.png";
import { useLanguage } from "../../../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  // Safe access function to prevent errors
  const getText = (path, defaultValue = "") => {
    return path?.split('.').reduce((obj, key) => obj?.[key], t) || defaultValue;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1200 800">
            <path
              d="M200 300c30-30 60-60 90-90 30 30 60 60 90 90-30 30-60 60-90 90-30-30-60-60-90-90z"
              stroke="#4B6F44"
              strokeWidth="0.5"
            />
            <path
              d="M800 500c40 40 80 80 120 120-40 40-80 80-120 120-40-40-80-80-120-120 40-40 80-80 120-120z"
              stroke="#4B6F44"
              strokeWidth="0.5"
            />
            <circle
              cx="400"
              cy="200"
              r="40"
              stroke="#4B6F44"
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx="900"
              cy="600"
              r="60"
              stroke="#4B6F44"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
          {/* <Leaf className="w-full h-full text-emerald-800" /> */}
          <span className="text-emerald-700 text-xl font-semibold">ॐ</span>
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 opacity-5">
          <Brain className="w-full h-full text-teal-800" />
        </div>
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-teal-100/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/40 to-emerald-100/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 lg:py-32 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-4  ">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
              <div className="relative">
                <Sparkles className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-emerald-800 text-sm font-medium tracking-wider">
                {t?.hero?.badge || "Ancient Wisdom, Modern Wellness"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-serif font-bold leading-tight">
              <span className="block text-slate-900">
                {t?.hero?.heading?.line1 || "Rediscover Your"}
              </span>
              <span className="block text-emerald-800 mt-2">
                {t?.hero?.heading?.line2 || "Natural Harmony"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t?.hero?.description || "Experience authentic Ayurvedic healing that brings balance to body, mind, and spirit. Our holistic approach combines 5,000 years of wisdom with modern wellness practices."}
            </p>

            {/* Enhanced Floating Elements Section */}
            <div className="pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Swing Animation Card 1 */}
                <div className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md ">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Leaf className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-800 mb-1">
                        {t?.hero?.cards?.natural?.title || "Natural"}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t?.hero?.cards?.natural?.subtitle || "Herbal Remedies"}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>

                {/* Swing Animation Card 2 */}
                <div
                  className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md "
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-teal-50 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Brain className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-800 mb-1">
                        {t?.hero?.cards?.mindful?.title || "Mindful"}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t?.hero?.cards?.mindful?.subtitle || "Daily Practices"}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400 animate-pulse"></div>
                </div>

                {/* Additional Card 3 */}
                <div
                  className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-amber-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Sun className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-800 mb-1">
                        {t?.hero?.cards?.vitality?.title || "Vitality"}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t?.hero?.cards?.vitality?.subtitle || "Energy Balance"}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 animate-pulse"></div>
                </div>

                {/* Additional Card 4 */}
                <div
                  className="relative bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md "
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Moon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-800 mb-1">
                        {t?.hero?.cards?.restorative?.title || "Restorative"}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t?.hero?.cards?.restorative?.subtitle || "Sleep & Recovery"}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-indigo-400 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Testimonial/Trust */}
            <div className="pt-12 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700 animate-count-up">
                    {t?.hero?.stats?.transformedLives?.value || "5,000+"}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {t?.hero?.stats?.transformedLives?.label || "Transformed Lives"}
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-emerald-700 animate-count-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    {t?.hero?.stats?.satisfactionRate?.value || "98%"}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {t?.hero?.stats?.satisfactionRate?.label || "Satisfaction Rate"}
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-emerald-700 animate-count-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    {t?.hero?.stats?.expertPractitioners?.value || "25+"}
                  </div>
                  <div className="text-sm text-slate-500 mt-1 ">
                    {t?.hero?.stats?.expertPractitioners?.label || "Expert Practitioners."}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl transform rotate-3 animate-pulse-slow"></div>

              {/* Main Image/Visual */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                <div className="aspect-[6/7] bg-gradient-to-b from-emerald-50 to-white">
                  {/* Ayurvedic Elements Grid */}
                  <div className="absolute inset-0 p-8 grid grid-cols-3 gap-6 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center animate-float"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {/* <Leaf className="h-8 w-8 text-emerald-600" /> */}
                        <span className="text-emerald-800 text-xl font-semibold">ॐ</span>
                      </div>
                    ))}
                  </div>

                  {/* Central Symbol */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative  flex items-center justify-center animate-float-slow">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full blur-xl animate-pulse"></div>
                      <div className="relative w-[60%] h-[60%] rounded-full bg-gradient-to-br from-emerald-600 to-white border-8 border-white shadow-lg flex items-center justify-center">
                        <div className="text-center">
                          <img src={rightBg} alt="Ayurvedic symbol" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with Swing Animation */}
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-slate-100 animate-swing">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <Leaf className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {t?.hero?.floatingElements?.natural?.title || "Natural"}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t?.hero?.floatingElements?.natural?.subtitle || "Herbal Remedies"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-slate-100 animate-swing"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <Brain className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {t?.hero?.floatingElements?.mindful?.title || "Mindful"}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t?.hero?.floatingElements?.mindful?.subtitle || "Daily Practices"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes swing {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-swing {
          animation: swing 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;