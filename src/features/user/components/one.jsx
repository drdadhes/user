import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Leaf,
  Brain,
  Heart,
  Activity,
  Feather,
  Clock,
  Zap,
  CircleDot,
} from "lucide-react";

const WellnessJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const milestones = [
    {
      icon: Feather,
      title: "Conscious Awakening",
      desc: "Begin your journey with mindful awareness of your body's natural rhythms",
      color: "emerald",
      metrics: "82% report increased awareness",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      icon: Activity,
      title: "Dosha Realignment",
      desc: "Ancient pulse diagnosis reveals your unique constitution for personalized healing",
      color: "teal",
      metrics: "3 distinct dosha types",
      gradient: "from-teal-400 to-teal-600",
    },
    {
      icon: Brain,
      title: "Neural Harmony",
      desc: "Modern neuroscience meets ancient wisdom for optimal mind-body connection",
      color: "indigo",
      metrics: "47% stress reduction",
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Cellular Renewal",
      desc: "Deep tissue restoration through specialized Ayurvedic protocols",
      color: "rose",
      metrics: "28-day transformation cycle",
      gradient: "from-rose-400 to-rose-600",
    },
    {
      icon: Zap,
      title: "Vitality Integration",
      desc: "Sustainable wellness becomes your natural state of being",
      color: "amber",
      metrics: "365 days of lasting change",
      gradient: "from-amber-400 to-amber-600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const index = Math.floor(scrollProgress * milestones.length);
        setActiveIndex(Math.min(index, milestones.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Alternative fix - change the height calculation
    <section
      ref={sectionRef}
      className="relative h-[450vh] bg-gradient-to-b from-emerald-50 via-white to-slate-50"
    >
      {/* Sticky container for the main visual */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Dynamic animated background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-1000 ${
              activeIndex === 0
                ? "opacity-100 from-emerald-100/70 via-white to-slate-50"
                : activeIndex === 1
                  ? "opacity-100 from-teal-100/70 via-white to-slate-50"
                  : activeIndex === 2
                    ? "opacity-100 from-indigo-100/70 via-white to-slate-50"
                    : activeIndex === 3
                      ? "opacity-100 from-rose-100/70 via-white to-slate-50"
                      : "opacity-100 from-amber-100/70 via-white to-slate-50"
            }`}
          ></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Floating particles - enhanced */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-300/30 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 10}s`,
                filter: "blur(1px)",
              }}
            ></div>
          ))}

          {/* Light streaks */}
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl animate-float-slow"></div>
          <div
            className="absolute bottom-1/4 -right-20 w-60 h-60 bg-teal-300/20 rounded-full blur-3xl animate-float-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Main content container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left side - Journey text */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-emerald-700 text-sm tracking-widest uppercase font-medium">
                    The Path Within
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
                  Your 5-Step
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    Transformation
                  </span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Each phase of your wellness journey builds upon the last,
                creating lasting transformation that radiates from the inside
                out.
              </p>

              {/* Progress indicator with glow */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Journey Progress</span>
                  <span className="text-emerald-700 font-medium relative">
                    {Math.round(((activeIndex + 1) / milestones.length) * 100)}%
                    <span className="absolute -inset-1 bg-emerald-400/20 rounded-full blur-md"></span>
                  </span>
                </div>
                <div className="h-1.5 bg-emerald-100 rounded-full overflow-hidden relative group">
                  <div className="absolute inset-0 bg-emerald-200/50 blur-sm group-hover:blur-md transition-all"></div>
                  <div
                    className="relative h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${((activeIndex + 1) / milestones.length) * 100}%`,
                    }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Current milestone highlight - enhanced glow */}
              <div className="mt-8 group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${milestones[activeIndex].gradient} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                ></div>
                <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`relative p-3 rounded-xl bg-${milestones[activeIndex].color}-50`}
                    >
                      <div
                        className={`absolute inset-0 bg-${milestones[activeIndex].color}-400 rounded-xl blur-md opacity-30`}
                      ></div>
                      {React.createElement(milestones[activeIndex].icon, {
                        className: `relative h-6 w-6 text-${milestones[activeIndex].color}-600`,
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {milestones[activeIndex].title}
                      </h3>
                      <p className="text-slate-600 mt-1">
                        {milestones[activeIndex].desc}
                      </p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                          {milestones[activeIndex].metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Glowing Timeline */}
            <div
              ref={timelineRef}
              className="relative h-[500px] hidden lg:block"
            >
              {/* Main glowing vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5">
                {/* Base line */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-emerald-400 blur-md opacity-50 animate-pulse-slow"></div>

                {/* Animated light streak */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent blur-xl animate-light-streak"
                  style={{
                    top: `${(activeIndex / (milestones.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Milestone nodes with enhanced glow */}
              {milestones.map((item, index) => {
                const Icon = item.icon;
                const position = (index / (milestones.length - 1)) * 100;
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <div
                    key={index}
                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700`}
                    style={{ top: `${position}%` }}
                  >
                    {/* Glowing connection segment */}
                    {index < milestones.length - 1 && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{ top: "50%" }}
                      >
                        {/* Main line */}
                        <div
                          className={`absolute w-0.5 bg-gradient-to-b transition-all duration-700 ${
                            isPast
                              ? "from-emerald-500 to-emerald-500"
                              : "from-emerald-200 to-emerald-200"
                          }`}
                          style={{
                            height: `${100 / (milestones.length - 1)}%`,
                            opacity: isPast ? 1 : 0.3,
                          }}
                        ></div>

                        {/* Glow effect */}
                        <div
                          className={`absolute w-4 -translate-x-1/2 bg-emerald-400 blur-md transition-all duration-700 ${
                            isPast ? "opacity-50" : "opacity-0"
                          }`}
                          style={{
                            height: `${100 / (milestones.length - 1)}%`,
                            left: "50%",
                          }}
                        ></div>
                      </div>
                    )}

                    {/* Node with enhanced glow */}
                    <div className="relative group">
                      {/* Multiple glow layers */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-700 ${
                          isActive
                            ? `bg-${item.color}-300 blur-2xl scale-[2.5] opacity-60 animate-pulse`
                            : isPast
                              ? "bg-emerald-300 blur-xl scale-150 opacity-30"
                              : "scale-0"
                        }`}
                      ></div>

                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-700 ${
                          isActive
                            ? `bg-${item.color}-200 blur-xl scale-[1.8] opacity-80`
                            : isPast
                              ? "bg-emerald-200 blur-lg scale-125 opacity-40"
                              : "scale-0"
                        }`}
                      ></div>

                      {/* Main node */}
                      <div
                        data-color={item.color}
                        data-state={
                          isActive ? "active" : isPast ? "past" : "future"
                        }
                        className="relative w-16 h-16 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-500 shadow-xl data-[state=active]:scale-125 data-[color=emerald]:border-emerald-400 data-[color=teal]:border-teal-400 data-[color=indigo]:border-indigo-400 data-[color=rose]:border-rose-400 data-[color=amber]:border-amber-400 data-[state=past]:border-emerald-400 data-[state=future]:border-emerald-200"
                      >
                        <Icon
                          className={`h-7 w-7 transition-all duration-500 ${
                            isActive
                              ? `text-${item.color}-600`
                              : isPast
                                ? "text-emerald-600"
                                : "text-emerald-300"
                          }`}
                        />
                      </div>

                      {/* Pulsing dot for active node */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1">
                          <span className="relative flex h-4 w-4">
                            <span
                              className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${item.color}-400 opacity-75`}
                            ></span>
                            <span
                              className={`relative inline-flex rounded-full h-4 w-4 bg-${item.color}-500  `}
                            ></span>
                          </span>
                        </div>
                      )}

                      {/* Label with glow */}
                      <div
                        className={`absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4 pointer-events-none"
                        }`}
                      >
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-${item.color}-200 rounded-full blur-md`}
                          ></div>
                          <span
                            className={`relative text-sm font-medium px-4 py-2 rounded-full  bg-white border border-${item.color}-200 text-${item.color}700 shadow-lg`}
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating energy orbs */}
              <div className="absolute -right-10 top-1/4 w-20 h-20 bg-emerald-300/20 rounded-full blur-2xl animate-float-slow"></div>
              <div
                className="absolute -left-10 bottom-1/4 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl animate-float-slow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 group">
          <span className="text-xs text-slate-400 tracking-widest group-hover:text-emerald-600 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-6 h-10 border-2 border-emerald-200 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mt-2 animate-scroll-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50px) translateX(-15px);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-10px, -10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes light-streak {
          0% {
            transform: translateY(-100%) translateX(-50%);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(200%) translateX(-50%);
            opacity: 0;
          }
        }

        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }

        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-light-streak {
          animation: light-streak 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WellnessJourney;
