// import React from 'react';
// import { Leaf, Brain, Heart, Moon, Sun, Sparkles, Shield, Flower2, Droplets, Wind, Activity, Apple } from 'lucide-react';

// const Treatments = () => {
//   const treatments = [
//     {
//       icon: Leaf,
//       title: "Panchakarma Therapy",
//       description: "Deep cleansing and rejuvenation therapy that removes toxins and restores bodily balance.",
//       color: "emerald",
//       duration: "14-21 days"
//     },
//     {
//       icon: Brain,
//       title: "Abhyanga Massage",
//       description: "Warm oil massage that nourishes tissues, improves circulation, and promotes deep relaxation.",
//       color: "teal",
//       duration: "60-90 mins"
//     },
//     {
//       icon: Droplets,
//       title: "Shirodhara",
//       description: "Gentle pouring of warm oil on forehead to calm the mind and balance the nervous system.",
//       color: "indigo",
//       duration: "45-60 mins"
//     },
//     {
//       icon: Wind,
//       title: "Swedana Therapy",
//       description: "Herbal steam treatment that opens pores, releases toxins, and relieves muscle tension.",
//       color: "amber",
//       duration: "30-45 mins"
//     },
//     {
//       icon: Flower2,
//       title: "Nasya Karma",
//       description: "Nasal administration of herbal oils to clear sinuses and improve mental clarity.",
//       color: "rose",
//       duration: "15-20 mins"
//     },
//     {
//       icon: Activity,
//       title: "Pizhichil",
//       description: "Warm oil bath with gentle massage to rejuvenate muscles and joints.",
//       color: "purple",
//       duration: "60-90 mins"
//     }
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-teal-100/30 blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/40 to-emerald-100/20 blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 opacity-5">
//           <Leaf className="w-full h-full text-emerald-800" />
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
//             <Sparkles className="h-5 w-5 text-emerald-600" />
//             <span className="text-emerald-800 text-sm font-medium tracking-wider">
//               Ancient Healing Therapies
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
//             Our Signature Treatments
//           </h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             Experience time-honored Ayurvedic therapies designed to restore balance, 
//             eliminate toxins, and rejuvenate your entire being.
//           </p>
//         </div>

//         {/* Treatments Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {treatments.map((treatment, index) => {
//             const IconComponent = treatment.icon;
//             const colorClasses = {
//               emerald: {
//                 bg: 'bg-emerald-50',
//                 text: 'text-emerald-600',
//                 badge: 'bg-emerald-100 text-emerald-700',
//                 border: 'border-emerald-200'
//               },
//               teal: {
//                 bg: 'bg-teal-50',
//                 text: 'text-teal-600',
//                 badge: 'bg-teal-100 text-teal-700',
//                 border: 'border-teal-200'
//               },
//               indigo: {
//                 bg: 'bg-indigo-50',
//                 text: 'text-indigo-600',
//                 badge: 'bg-indigo-100 text-indigo-700',
//                 border: 'border-indigo-200'
//               },
//               amber: {
//                 bg: 'bg-amber-50',
//                 text: 'text-amber-600',
//                 badge: 'bg-amber-100 text-amber-700',
//                 border: 'border-amber-200'
//               },
//               rose: {
//                 bg: 'bg-rose-50',
//                 text: 'text-rose-600',
//                 badge: 'bg-rose-100 text-rose-700',
//                 border: 'border-rose-200'
//               },
//               purple: {
//                 bg: 'bg-purple-50',
//                 text: 'text-purple-600',
//                 badge: 'bg-purple-100 text-purple-700',
//                 border: 'border-purple-200'
//               }
//             };
//             const colors = colorClasses[treatment.color];

//             return (
//               <div 
//                 key={index}
//                 className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//               >
//                 {/* Icon */}
//                 <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   <IconComponent className={`h-8 w-8 ${colors.text}`} />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
//                   {treatment.title}
//                 </h3>
//                 <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                   {treatment.description}
//                 </p>

//                 {/* Duration Badge */}
//                 <div className="flex items-center justify-between">
//                   <span className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
//                     {treatment.duration}
//                   </span>
                  
//                   {/* Learn More Link */}
//                   <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1 group/btn">
//                     <span>Learn More</span>
//                     <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Decorative Element */}
//                 <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${colors.bg} animate-pulse`}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-100 shadow-sm">
//             <Shield className="h-4 w-4 text-emerald-600" />
//             <span className="text-slate-600 text-sm">
//               All treatments are personalized to your unique dosha constitution
//             </span>
//           </div>
          
//           <div className="mt-8">
//             <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
//               <span>Consult with Our Experts</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Treatments;



import React from 'react';
import { Leaf, Brain, Heart, Moon, Sun, Sparkles, Shield, Flower2, Droplets, Wind, Activity, Apple } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

const Treatments = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      icon: Leaf,
      title: t?.treatments?.treatmentsList?.panchakarma?.title || "Panchakarma Therapy",
      description: t?.treatments?.treatmentsList?.panchakarma?.description || "Deep cleansing and rejuvenation therapy that removes toxins and restores bodily balance.",
      color: "emerald",
      duration: t?.treatments?.treatmentsList?.panchakarma?.duration || "14-21 days"
    },
    {
      icon: Brain,
      title: t?.treatments?.treatmentsList?.abhyanga?.title || "Abhyanga Massage",
      description: t?.treatments?.treatmentsList?.abhyanga?.description || "Warm oil massage that nourishes tissues, improves circulation, and promotes deep relaxation.",
      color: "teal",
      duration: t?.treatments?.treatmentsList?.abhyanga?.duration || "60-90 mins"
    },
    {
      icon: Droplets,
      title: t?.treatments?.treatmentsList?.shirodhara?.title || "Shirodhara",
      description: t?.treatments?.treatmentsList?.shirodhara?.description || "Gentle pouring of warm oil on forehead to calm the mind and balance the nervous system.",
      color: "indigo",
      duration: t?.treatments?.treatmentsList?.shirodhara?.duration || "45-60 mins"
    },
    {
      icon: Wind,
      title: t?.treatments?.treatmentsList?.swedana?.title || "Swedana Therapy",
      description: t?.treatments?.treatmentsList?.swedana?.description || "Herbal steam treatment that opens pores, releases toxins, and relieves muscle tension.",
      color: "amber",
      duration: t?.treatments?.treatmentsList?.swedana?.duration || "30-45 mins"
    },
    {
      icon: Flower2,
      title: t?.treatments?.treatmentsList?.nasya?.title || "Nasya Karma",
      description: t?.treatments?.treatmentsList?.nasya?.description || "Nasal administration of herbal oils to clear sinuses and improve mental clarity.",
      color: "rose",
      duration: t?.treatments?.treatmentsList?.nasya?.duration || "15-20 mins"
    },
    {
      icon: Activity,
      title: t?.treatments?.treatmentsList?.pizhichil?.title || "Pizhichil",
      description: t?.treatments?.treatmentsList?.pizhichil?.description || "Warm oil bath with gentle massage to rejuvenate muscles and joints.",
      color: "purple",
      duration: t?.treatments?.treatmentsList?.pizhichil?.duration || "60-90 mins"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-teal-100/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-100/40 to-emerald-100/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 opacity-5">
          <Leaf className="w-full h-full text-emerald-800" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium tracking-wider">
              {t?.treatments?.badge || "Ancient Healing Therapies"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t?.treatments?.title || "Our Signature Treatments"}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t?.treatments?.subtitle || "Experience time-honored Ayurvedic therapies designed to restore balance, eliminate toxins, and rejuvenate your entire being."}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            const colorClasses = {
              emerald: {
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                badge: 'bg-emerald-100 text-emerald-700',
                border: 'border-emerald-200'
              },
              teal: {
                bg: 'bg-teal-50',
                text: 'text-teal-600',
                badge: 'bg-teal-100 text-teal-700',
                border: 'border-teal-200'
              },
              indigo: {
                bg: 'bg-indigo-50',
                text: 'text-indigo-600',
                badge: 'bg-indigo-100 text-indigo-700',
                border: 'border-indigo-200'
              },
              amber: {
                bg: 'bg-amber-50',
                text: 'text-amber-600',
                badge: 'bg-amber-100 text-amber-700',
                border: 'border-amber-200'
              },
              rose: {
                bg: 'bg-rose-50',
                text: 'text-rose-600',
                badge: 'bg-rose-100 text-rose-700',
                border: 'border-rose-200'
              },
              purple: {
                bg: 'bg-purple-50',
                text: 'text-purple-600',
                badge: 'bg-purple-100 text-purple-700',
                border: 'border-purple-200'
              }
            };
            const colors = colorClasses[treatment.color];

            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>

                {/* Duration Badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
                    {treatment.duration}
                  </span>
                  
                  {/*
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1 group/btn">
                    <span>{t?.treatments?.learnMore || "Learn More"}</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>

                {/* Decorative Element */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${colors.bg} animate-pulse`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-100 shadow-sm">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span className="text-slate-600 text-sm">
              {t?.treatments?.footerNote || "All treatments are personalized to your unique dosha constitution"}
            </span>
          </div>
          
          <div className="mt-8">
            {/* <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
              <span>{t?.treatments?.cta || "Consult with Our Experts"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;