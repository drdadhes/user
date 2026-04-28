import React from 'react';
import { Leaf, Sparkles, ArrowRight, Droplet, Wind, Brain, Sun, Moon, Activity } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

// Icon mapping
const iconMap = {
  Panchakarma: Droplet,
  Abhyanga: Wind,
  Shirodhara: Brain,
  Nasya: Activity,
  Kizhi: Sun,
  Vasti: Moon,
  // Default fallback
  default: Leaf
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { ...t?.services?.serviceCards?.card1, iconKey: "Panchakarma" },
    { ...t?.services?.serviceCards?.card2, iconKey: "Abhyanga" },
    { ...t?.services?.serviceCards?.card3, iconKey: "Shirodhara" },
    { ...t?.services?.serviceCards?.card4, iconKey: "Nasya" },
    { ...t?.services?.serviceCards?.card5, iconKey: "Kizhi" },
    { ...t?.services?.serviceCards?.card6, iconKey: "Vasti" }
  ];

  const getIcon = (iconKey) => {
    const IconComponent = iconMap[iconKey] || iconMap.default;
    return <IconComponent className="h-7 w-7" />;
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
        
        {/* Ayurvedic Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1200 800">
            <path d="M200 300c30-30 60-60 90-90 30 30 60 60 90 90-30 30-60 60-90 90-30-30-60-60-90-90z" stroke="#4B6F44" strokeWidth="0.8"/>
            <circle cx="800" cy="400" r="50" stroke="#4B6F44" strokeWidth="0.8" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-medium tracking-wider">
              {t?.services?.badge || "Our Services"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            <span className="text-slate-900">{t?.services?.title || "Authentic Ayurvedic"} </span>
            <span className="text-emerald-700">{t?.services?.titleHighlight || "Treatments"}</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            {t?.services?.subtitle || "Experience ancient healing therapies that restore balance and promote holistic wellness through personalized care."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon with glow effect */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center border border-emerald-100 group-hover:border-emerald-200 transition-all duration-500">
                    <div className="text-emerald-700 group-hover:scale-110 transition-transform duration-500">
                      {getIcon(service.iconKey)}
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-1.5">
                    {service?.title || "Service Title"}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">
                    {service?.subtitle || "Service Subtitle"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service?.description || "Service description"}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {service?.features && service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <a
                  href={`#${service?.title?.toLowerCase() || "service"}`}
                  className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors duration-300 group/link"
                >
                  <span>{t?.services?.learnMore || "Learn more"}</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a> */}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-bl-3xl rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          {/* <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
            <span className="relative z-10 flex items-center space-x-2">
              <span>{t?.services?.viewAll || "View All Services"}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Services;