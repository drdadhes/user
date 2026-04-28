// import React from 'react';
// import { Sparkles, Leaf, Droplets, Wind, Flame, Circle, Infinity, Star } from 'lucide-react';

// const Philosophy = () => {
//   return (
//     <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-slate-50">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Sacred Geometry Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <svg className="w-full h-full" viewBox="0 0 1200 800">
//             <defs>
//               <pattern id="sacred-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
//                 <circle cx="60" cy="60" r="2" fill="#059669" opacity="0.3"/>
//                 <circle cx="60" cy="60" r="25" stroke="#059669" strokeWidth="0.3" fill="none"/>
//                 <path d="M60 35 L60 85 M35 60 L85 60" stroke="#059669" strokeWidth="0.3"/>
//               </pattern>
//             </defs>
//             <rect width="1200" height="800" fill="url(#sacred-grid)"/>
//           </svg>
//         </div>

//         {/* Floating Ayurvedic Elements */}
//         <div className="absolute top-40 right-20 w-64 h-64 opacity-[0.03]">
//           <Leaf className="w-full h-full text-emerald-800" />
//         </div>
//         <div className="absolute bottom-40 left-20 w-48 h-48 opacity-[0.03]">
//           <Infinity className="w-full h-full text-teal-800" />
//         </div>
//       </div>

//       {/* Gradient Orbs */}
//       <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
//       <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-emerald-100/20 to-teal-100/20 blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-20">
//           <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
//             <Sparkles className="h-5 w-5 text-emerald-600" />
//             <span className="text-emerald-800 text-sm font-medium tracking-wider">
//               The Ayurvedic Way
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
//             Balance Your{' '}
//             <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//               Three Doshas
//             </span>
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             According to Ayurveda, wellness flows from the perfect harmony of Vata, Pitta, and Kapha — the three energies that govern every aspect of your being.
//           </p>
//         </div>

//         {/* Doshas Grid */}
//         <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//           {/* Vata */}
//           <div className="group relative">
//             <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/0 to-purple-200/0 rounded-3xl group-hover:from-purple-100/30 group-hover:to-purple-200/20 transition-all duration-500 blur-xl"></div>
//             <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
//               {/* Icon Container */}
//               <div className="relative mb-6">
//                 <div className="absolute inset-0 bg-purple-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
//                 <div className="relative w-16 h-16 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                   <Wind className="h-8 w-8 text-purple-600" />
//                 </div>
//               </div>
              
//               {/* Content */}
//               <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Vata</h3>
//               <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-3">Air & Space</p>
//               <p className="text-slate-600 leading-relaxed mb-4">
//                 The energy of movement, creativity, and flow. When balanced, Vata brings flexibility and vitality. When imbalanced, it can create anxiety and restlessness.
//               </p>
              
//               {/* Characteristics */}
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
//                   <span>Light, cold, dry</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
//                   <span>Season: Fall, early winter</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
//                   <span>Time: 2 AM - 6 AM / PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pitta */}
//           <div className="group relative">
//             <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/0 to-red-100/0 rounded-3xl group-hover:from-orange-100/30 group-hover:to-red-100/20 transition-all duration-500 blur-xl"></div>
//             <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
//               {/* Icon Container */}
//               <div className="relative mb-6">
//                 <div className="absolute inset-0 bg-orange-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
//                 <div className="relative w-16 h-16 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                   <Flame className="h-8 w-8 text-orange-600" />
//                 </div>
//               </div>
              
//               {/* Content */}
//               <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Pitta</h3>
//               <p className="text-sm uppercase tracking-wider text-orange-600 font-semibold mb-3">Fire & Water</p>
//               <p className="text-slate-600 leading-relaxed mb-4">
//                 The energy of digestion, metabolism, and transformation. When balanced, Pitta brings intelligence and contentment. When imbalanced, it can cause irritability.
//               </p>
              
//               {/* Characteristics */}
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
//                   <span>Hot, sharp, oily</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
//                   <span>Season: Summer</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
//                   <span>Time: 10 AM - 2 PM / AM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Kapha */}
//           <div className="group relative">
//             <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 rounded-3xl group-hover:from-blue-100/30 group-hover:to-cyan-100/20 transition-all duration-500 blur-xl"></div>
//             <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
//               {/* Icon Container */}
//               <div className="relative mb-6">
//                 <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
//                 <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                   <Droplets className="h-8 w-8 text-blue-600" />
//                 </div>
//               </div>
              
//               {/* Content */}
//               <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">Kapha</h3>
//               <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">Water & Earth</p>
//               <p className="text-slate-600 leading-relaxed mb-4">
//                 The energy of structure, lubrication, and stability. When balanced, Kapha brings love and forgiveness. When imbalanced, it can create attachment.
//               </p>
              
//               {/* Characteristics */}
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
//                   <span>Heavy, slow, cool</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
//                   <span>Season: Late winter, spring</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-slate-600">
//                   <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
//                   <span>Time: 6 AM - 10 AM / PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Ayurveda Principle Banner */}
//         <div className="mt-24 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-3xl"></div>
//           <div className="relative bg-white/40 backdrop-blur-sm border border-emerald-100/50 rounded-3xl p-10 md:p-12">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-100">
//                   <Star className="h-4 w-4 text-emerald-600" />
//                   <span className="text-xs font-semibold text-emerald-700 tracking-wider">ANCIENT WISDOM</span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
//                   "When the diet is wrong, medicine is of no use. When the diet is correct, medicine is of no need."
//                 </h3>
//                 <p className="text-emerald-700 font-medium">— Charaka Samhita</p>
//               </div>
//               <div className="relative flex justify-center items-center">
//                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
//                 <div className="relative w-32 h-32 rounded-full bg-white border-8 border-emerald-50 shadow-lg flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-3xl mb-1">☯</div>
//                     <div className="text-xs font-serif text-emerald-800">Mind • Body • Spirit</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Subtle Divider */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent rounded-full"></div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
        
//         .group:hover .group-hover\\:scale-110 {
//           transform: scale(1.1);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Philosophy;


import React from 'react';
import { Sparkles, Leaf, Droplets, Wind, Flame, Circle, Infinity, Star } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

const Philosophy = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="sacred-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="2" fill="#059669" opacity="0.3"/>
                <circle cx="60" cy="60" r="25" stroke="#059669" strokeWidth="0.3" fill="none"/>
                <path d="M60 35 L60 85 M35 60 L85 60" stroke="#059669" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#sacred-grid)"/>
          </svg>
        </div>

        {/* Floating Ayurvedic Elements */}
        <div className="absolute top-40 right-20 w-64 h-64 opacity-[0.03]">
          <Leaf className="w-full h-full text-emerald-800" />
        </div>
        <div className="absolute bottom-40 left-20 w-48 h-48 opacity-[0.03]">
          <Infinity className="w-full h-full text-teal-800" />
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-emerald-100/20 to-teal-100/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium tracking-wider">
              {t?.philosophy?.badge || "The Ayurvedic Way"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
            {t?.philosophy?.heading?.line1 || "Balance Your"}{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t?.philosophy?.heading?.line2 || "Three Doshas"}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t?.philosophy?.subtitle || "According to Ayurveda, wellness flows from the perfect harmony of Vata, Pitta, and Kapha — the three energies that govern every aspect of your being."}
          </p>
        </div>

        {/* Doshas Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Vata */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/0 to-purple-200/0 rounded-3xl group-hover:from-purple-100/30 group-hover:to-purple-200/20 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Wind className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{t?.philosophy?.doshas?.vata?.title || "Vata"}</h3>
              <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-3">{t?.philosophy?.doshas?.vata?.subtitle || "Air & Space"}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t?.philosophy?.doshas?.vata?.description || "The energy of movement, creativity, and flow. When balanced, Vata brings flexibility and vitality. When imbalanced, it can create anxiety and restlessness."}
              </p>
              
              {/* Characteristics */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
                  <span>{t?.philosophy?.doshas?.vata?.characteristics?.light || "Light, cold, dry"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
                  <span>{t?.philosophy?.doshas?.vata?.characteristics?.season || "Season: Fall, early winter"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-purple-400 text-purple-400" />
                  <span>{t?.philosophy?.doshas?.vata?.characteristics?.time || "Time: 2 AM - 6 AM / PM"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pitta */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/0 to-red-100/0 rounded-3xl group-hover:from-orange-100/30 group-hover:to-red-100/20 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Flame className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{t?.philosophy?.doshas?.pitta?.title || "Pitta"}</h3>
              <p className="text-sm uppercase tracking-wider text-orange-600 font-semibold mb-3">{t?.philosophy?.doshas?.pitta?.subtitle || "Fire & Water"}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t?.philosophy?.doshas?.pitta?.description || "The energy of digestion, metabolism, and transformation. When balanced, Pitta brings intelligence and contentment. When imbalanced, it can cause irritability."}
              </p>
              
              {/* Characteristics */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
                  <span>{t?.philosophy?.doshas?.pitta?.characteristics?.hot || "Hot, sharp, oily"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
                  <span>{t?.philosophy?.doshas?.pitta?.characteristics?.season || "Season: Summer"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-orange-400 text-orange-400" />
                  <span>{t?.philosophy?.doshas?.pitta?.characteristics?.time || "Time: 10 AM - 2 PM / AM"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kapha */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 rounded-3xl group-hover:from-blue-100/30 group-hover:to-cyan-100/20 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{t?.philosophy?.doshas?.kapha?.title || "Kapha"}</h3>
              <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">{t?.philosophy?.doshas?.kapha?.subtitle || "Water & Earth"}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t?.philosophy?.doshas?.kapha?.description || "The energy of structure, lubrication, and stability. When balanced, Kapha brings love and forgiveness. When imbalanced, it can create attachment."}
              </p>
              
              {/* Characteristics */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
                  <span>{t?.philosophy?.doshas?.kapha?.characteristics?.heavy || "Heavy, slow, cool"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
                  <span>{t?.philosophy?.doshas?.kapha?.characteristics?.season || "Season: Late winter, spring"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Circle className="h-2 w-2 fill-blue-400 text-blue-400" />
                  <span>{t?.philosophy?.doshas?.kapha?.characteristics?.time || "Time: 6 AM - 10 AM / PM"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ayurveda Principle Banner */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-3xl"></div>
          <div className="relative bg-white/40 backdrop-blur-sm border border-emerald-100/50 rounded-3xl p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-100">
                  <Star className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700 tracking-wider">{t?.philosophy?.wisdomBadge || "ANCIENT WISDOM"}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                  {t?.philosophy?.quote || "\"When the diet is wrong, medicine is of no use. When the diet is correct, medicine is of no need.\""}
                </h3>
                <p className="text-emerald-700 font-medium">{t?.philosophy?.quoteAuthor || "— Charaka Samhita"}</p>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
                <div className="relative w-32 h-32 rounded-full bg-white border-8 border-emerald-50 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">☯</div>
                    <div className="text-xs font-serif text-emerald-800">{t?.philosophy?.mindBodySpirit || "Mind • Body • Spirit"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent rounded-full"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Philosophy;