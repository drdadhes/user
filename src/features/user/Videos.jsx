// import React, { useState, useEffect } from 'react';
// import { getVideos } from '../../api/video.api';

// // Import translations
// import enTranslations from "../../locales/en.json";
// import teTranslations from "../../locales/te.json";

// const Videos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [currentLang, setCurrentLang] = useState("en");

//   // Get translations based on current language
//   const t = currentLang === "te" ? teTranslations.videos : enTranslations.videos;

//   // Listen for language changes from Navbar
//   useEffect(() => {
//     const handleLanguageChange = (event) => {
//       setCurrentLang(event.detail);
//     };

//     // Get initial language from localStorage
//     const savedLang = localStorage.getItem("appLanguage") || "en";
//     setCurrentLang(savedLang);

//     window.addEventListener("languageChanged", handleLanguageChange);

//     return () => {
//       window.removeEventListener("languageChanged", handleLanguageChange);
//     };
//   }, []);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await getVideos();
//       setVideos(response.data);
//     } catch (err) {
//       setError(t.error);
//       console.error('Error fetching videos:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = ['All', ...new Set(videos.map(video => video.category))];

//   const filteredVideos = activeCategory === 'All' 
//     ? videos 
//     : videos.filter(video => video.category === activeCategory);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-emerald-700 text-lg animate-fade-in">{t.loading}</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-600 text-lg animate-fade-in">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 animate-slide-up">
//           <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4">
//             {t.title}
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             {t.subtitle}
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
//           {categories.map((category) => (
//             <button 
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out ${
//                 activeCategory === category
//                   ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
//                   : 'bg-white text-slate-700 border border-emerald-100 transform hover:scale-105'
//               }`}
//             >
//               {category === 'All' ? t.categories.all : category}
//             </button>
//           ))}
//         </div>

//         {filteredVideos.length === 0 ? (
//           <div className="text-center py-20 animate-fade-in">
//             <div className="text-slate-500 text-lg">{t.noVideos}</div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredVideos.map((video, index) => (
//               <div 
//                 key={video.id} 
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 transition-all duration-700 ease-out animate-card-float"
//                 style={{ 
//                   animationDelay: `${index * 0.1}s`,
//                   animationFillMode: 'forwards',
//                   opacity: 0,
//                   transform: 'translateY(20px)'
//                 }}
//               >
//                 <div className="aspect-video bg-slate-900 overflow-hidden">
//                   <iframe
//                     src={`https://www.youtube.com/embed/${video.youtube_id}`}
//                     title={video.title}
//                     className="w-full h-full"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full animate-pulse-slow">
//                       {video.category}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300">
//                     {video.title}
//                   </h3>
//                   {video.description && (
//                     <p className="text-slate-600 text-sm transition-colors duration-300">
//                       {video.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Add CSS for animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes card-float {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           70% {
//             opacity: 1;
//             transform: translateY(-5px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-card-float {
//           animation: card-float 0.8s ease-out forwards;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Videos;




import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Videos = () => {
  const { t, currentLang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Get videos from translations based on current language
  const videos = t?.videos?.videosList || [];

  const categories = ['All', ...new Set(videos.map(video => video.category))];

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(video => video.category === activeCategory);

  return (
    <section className="min-h-screen py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4">
            {t?.videos?.title || "Wellness Videos"}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t?.videos?.subtitle || "Explore our collection of Ayurvedic wisdom and healing practices"}
          </p>
        </div> */}

        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out ${activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-700 border border-emerald-100 transform hover:scale-105'
                }`}
            >
              {category === 'All' ? (t?.videos?.categories?.all || "All") : category}
            </button>
          ))}
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-slate-500 text-lg">{t?.videos?.noVideos || "No videos found"}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 transition-all duration-700 ease-out animate-card-float"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="aspect-video bg-slate-900 overflow-hidden relative">
                  {playingVideoId === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="w-full h-full cursor-pointer relative group"
                      onClick={() => setPlayingVideoId(video.id)}
                    >
                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />


                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" bg-black/60 group-hover:bg-black/80 text-white rounded-full p-4 text-2xl transition transform group-hover:scale-110">
                          ▶
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 pb-0">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full animate-pulse-slow">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300">
                    {video.title}
                  </h3>
                  {/* {video.description && (
                    <p className="text-slate-600 text-sm transition-colors duration-300">
                      {video.description}
                    </p>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes card-float {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          70% {
            opacity: 1;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-card-float {
          animation: card-float 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Videos;