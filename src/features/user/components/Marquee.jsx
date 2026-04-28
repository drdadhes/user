// import React from "react";
// import { Leaf, Brain, Heart, Sun, Moon, Flower2, Sparkles, Droplets, Wind } from "lucide-react";

// const Marquee = () => {
//   const ayurvedaCards = [
//     {
//       id: 1,
//       icon: <Leaf className="h-8 w-8 text-emerald-600" />,
//       title: "Triphala",
//       desc: "Digestive Wellness",
//       color: "emerald"
//     },
//     {
//       id: 2,
//       icon: <Brain className="h-8 w-8 text-teal-600" />,
//       title: "Ashwagandha",
//       desc: "Stress Relief",
//       color: "teal"
//     },
//     {
//       id: 3,
//       icon: <Heart className="h-8 w-8 text-rose-600" />,
//       title: "Arjuna",
//       desc: "Heart Health",
//       color: "rose"
//     },
//     {
//       id: 4,
//       icon: <Sun className="h-8 w-8 text-amber-600" />,
//       title: "Surya Namaskar",
//       desc: "Morning Ritual",
//       color: "amber"
//     },
//     {
//       id: 5,
//       icon: <Moon className="h-8 w-8 text-indigo-600" />,
//       title: "Chandra Bhedana",
//       desc: "Evening Calm",
//       color: "indigo"
//     },
//     {
//       id: 6,
//       icon: <Flower2 className="h-8 w-8 text-emerald-600" />,
//       title: "Tulsi",
//       desc: "Immunity Shield",
//       color: "emerald"
//     },
//     {
//       id: 7,
//       icon: <Droplets className="h-8 w-8 text-blue-600" />,
//       title: "Nasya",
//       desc: "Nasal Therapy",
//       color: "blue"
//     },
//     {
//       id: 8,
//       icon: <Wind className="h-8 w-8 text-purple-600" />,
//       title: "Pranayama",
//       desc: "Breath Control",
//       color: "purple"
//     },
//     {
//       id: 9,
//       icon: <Sparkles className="h-8 w-8 text-amber-600" />,
//       title: "Panchakarma",
//       desc: "Detox Therapy",
//       color: "amber"
//     }
//   ];

//   return (
//     <div className="w-full py-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="text-center space-y-2">
//           <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
//             <Sparkles className="h-4 w-4 text-emerald-600" />
//             <span className="text-emerald-800 text-xs font-medium tracking-wider">
//               Ayurvedic Wisdom
//             </span>
//           </div>
//           <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">
//             Ancient Remedies, <span className="text-emerald-700">Modern Wellness</span>
//           </h3>
//         </div>
//       </div>

//       <div className="relative">
//         {/* Gradient Overlays for Fade Effect */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 via-emerald-50/80 to-transparent z-10"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50 via-emerald-50/80 to-transparent z-10"></div>
        
//         {/* Marquee Container */}
//         <div className="flex overflow-hidden">
//           {/* First Group */}
//           <div className="flex animate-marquee whitespace-nowrap">
//             {ayurvedaCards.map((card, index) => (
//               <div
//                 key={`first-${index}`}
//                 className="flex-shrink-0 mx-3 w-[280px] sm:w-[320px]"
//               >
//                 <div className="group bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 hover:-translate-y-1">
//                   <div className="flex items-start space-x-4">
//                     <div className={`p-3 rounded-xl bg-${card.color}-50 group-hover:scale-110 transition-transform duration-300`}>
//                       {card.icon}
//                     </div>
//                     <div className="flex-1 min-w-0 text-left">
//                       <h4 className="text-lg font-bold text-slate-800 truncate">
//                         {card.title}
//                       </h4>
//                       <p className="text-sm text-slate-500 mt-0.5">
//                         {card.desc}
//                       </p>
//                       <div className="mt-3 flex items-center text-xs font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <span>Learn more</span>
//                         <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Duplicate Group for Seamless Loop */}
//           <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
//             {ayurvedaCards.map((card, index) => (
//               <div
//                 key={`second-${index}`}
//                 className="flex-shrink-0 mx-3 w-[280px] sm:w-[320px]"
//               >
//                 <div className="group bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 hover:-translate-y-1">
//                   <div className="flex items-start space-x-4">
//                     <div className={`p-3 rounded-xl bg-${card.color}-50 group-hover:scale-110 transition-transform duration-300`}>
//                       {card.icon}
//                     </div>
//                     <div className="flex-1 min-w-0 text-left">
//                       <h4 className="text-lg font-bold text-slate-800 truncate">
//                         {card.title}
//                       </h4>
//                       <p className="text-sm text-slate-500 mt-0.5">
//                         {card.desc}
//                       </p>
//                       <div className="mt-3 flex items-center text-xs font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <span>Learn more</span>
//                         <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom Keyframes */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-100%); }
//         }
        
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
        

//       `}</style>
//     </div>
//   );
// };

// export default Marquee;



import React from "react";
import { Leaf, Brain, Heart, Sun, Moon, Flower2, Sparkles, Droplets, Wind } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";

const Marquee = () => {
  const { t } = useLanguage();

  const ayurvedaCards = [
    {
      id: 1,
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: t?.marquee?.cards?.triphala?.title || "Triphala",
      desc: t?.marquee?.cards?.triphala?.desc || "Digestive Wellness",
      color: "emerald"
    },
    {
      id: 2,
      icon: <Brain className="h-8 w-8 text-teal-600" />,
      title: t?.marquee?.cards?.ashwagandha?.title || "Ashwagandha",
      desc: t?.marquee?.cards?.ashwagandha?.desc || "Stress Relief",
      color: "teal"
    },
    {
      id: 3,
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: t?.marquee?.cards?.arjuna?.title || "Arjuna",
      desc: t?.marquee?.cards?.arjuna?.desc || "Heart Health",
      color: "rose"
    },
    {
      id: 4,
      icon: <Sun className="h-8 w-8 text-amber-600" />,
      title: t?.marquee?.cards?.suryaNamaskar?.title || "Surya Namaskar",
      desc: t?.marquee?.cards?.suryaNamaskar?.desc || "Morning Ritual",
      color: "amber"
    },
    {
      id: 5,
      icon: <Moon className="h-8 w-8 text-indigo-600" />,
      title: t?.marquee?.cards?.chandraBhedana?.title || "Chandra Bhedana",
      desc: t?.marquee?.cards?.chandraBhedana?.desc || "Evening Calm",
      color: "indigo"
    },
    {
      id: 6,
      icon: <Flower2 className="h-8 w-8 text-emerald-600" />,
      title: t?.marquee?.cards?.tulsi?.title || "Tulsi",
      desc: t?.marquee?.cards?.tulsi?.desc || "Immunity Shield",
      color: "emerald"
    },
    {
      id: 7,
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: t?.marquee?.cards?.nasya?.title || "Nasya",
      desc: t?.marquee?.cards?.nasya?.desc || "Nasal Therapy",
      color: "blue"
    },
    {
      id: 8,
      icon: <Wind className="h-8 w-8 text-purple-600" />,
      title: t?.marquee?.cards?.pranayama?.title || "Pranayama",
      desc: t?.marquee?.cards?.pranayama?.desc || "Breath Control",
      color: "purple"
    },
    {
      id: 9,
      icon: <Sparkles className="h-8 w-8 text-amber-600" />,
      title: t?.marquee?.cards?.panchakarma?.title || "Panchakarma",
      desc: t?.marquee?.cards?.panchakarma?.desc || "Detox Therapy",
      color: "amber"
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-800 text-xs font-medium tracking-wider">
              {t?.marquee?.badge || "Ayurvedic Wisdom"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">
            {t?.marquee?.heading?.line1 || "Ancient Remedies,"}{" "}
            <span className="text-emerald-700">{t?.marquee?.heading?.line2 || "Modern Wellness"}</span>
          </h3>
        </div>
      </div>

      <div className="relative">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 via-emerald-50/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50 via-emerald-50/80 to-transparent z-10"></div>
        
        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          {/* First Group */}
          <div className="flex animate-marquee whitespace-nowrap">
            {ayurvedaCards.map((card, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-3 w-[280px] sm:w-[320px]"
              >
                <div className="group bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-${card.color}-50 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="text-lg font-bold text-slate-800 truncate">
                        {card.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {card.desc}
                      </p>
                      <div className="mt-3 flex items-center text-xs font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{t?.marquee?.learnMore || "Learn more"}</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Group for Seamless Loop */}
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {ayurvedaCards.map((card, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-3 w-[280px] sm:w-[320px]"
              >
                <div className="group bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-${card.color}-50 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="text-lg font-bold text-slate-800 truncate">
                        {card.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {card.desc}
                      </p>
                      <div className="mt-3 flex items-center text-xs font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{t?.marquee?.learnMore || "Learn more"}</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        

      `}</style>
    </div>
  );
};

export default Marquee;