import React, { useState } from 'react';

const VedaVideos = () => {
  // YouTube Videos Data
  const [videos] = useState([
    {
      id: 1,
      youtube_id: "VUmCFz8rd5s",
      title: "Boy recovered from Celebral palsy",
      description: "Cerebral palsy boy walking perfectly after 8 months",
      category: "Recovery"
    },
    {
      id: 2,
      youtube_id: "TT9VQpR60jo",
      title: "If your child has such a problem, please take my word for it..",
      description: "Deep cleansing therapy that removes toxins and restores bodily balance.",
      category: "Recovery"
    },
    {
      id: 3,
      youtube_id: "5rztM0gcs7M",
      title: "But when we came to Dades, my father got us..",
      description: "Simple morning rituals to start your day with energy and balance.",
      category: "Recovery"
    },
    {
      id: 4,
      youtube_id: "KZ85s4EC0bw",
      title: "If a man who has given up hope survives..",
      description: "Natural ways to manage stress using Ayurvedic herbs and techniques.",
      category: "Recovery"
    },
    {
      id: 5,
      youtube_id: "rZNu9Q6enjk",
      title: "No one will believe that she is paralyzed...",
      description: "Step-by-step guide to self-massage with warm herbal oils.",
      category: "Recovery"
    },
    {
      id: 6,
      youtube_id: "GvE9RziF2M4",
      title: "Amavasya Theertha which gives relief from all diseases..",
      description: "Eating according to your dosha for optimal health and digestion.",
      category: "Educational"
    },
    {
      id: 7,
      youtube_id: "L9Njqa1W6DM",
      title: "The story of a tearful child!!",
      description: "Cerebral palsy boy walking perfectly after 8 months",
      category: "Recovery"
    },
    {
      id: 8,
      youtube_id: "_kZl0ZhOHzM",
      title: "This ground gourd is nectar for men and medicine for women..",
      description: "Deep cleansing therapy that removes toxins and restores bodily balance.",
      category: "Educational"
    },
    {
      id: 9,
      youtube_id: "BwemWMWkBS0",
      title: "Brahma Yajna is performed at Dade Ashram on this Mouni Amavasya day.",
      description: "Simple morning rituals to start your day with energy and balance.",
      category: "Educational"
    },
    {
      id: 10,
      youtube_id: "P_7Fs-OmROs",
      title: "Unexpected change in 2 months..",
      description: "Natural ways to manage stress using Ayurvedic herbs and techniques.",
      category: "Recovery"
    },
    {
      id: 11,
      youtube_id: "D43N8B85MS0",
      title: "My baby is walking in 6 months..",
      description: "Step-by-step guide to self-massage with warm herbal oils.",
      category: "Recovery"
    },
    {
      id: 12,
      youtube_id: "JO3JW1n2ZrY",
      title: "Copper Making Process..",
      description: "Eating according to your dosha for optimal health and digestion.",
      category: "Educational"
    }
  ]);

  const [activeCategory, setActiveCategory] = useState('All Videos');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    'All Videos',
    'Recovery',
    'Educational'
  ];

  const filteredVideos = activeCategory === 'All Videos'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  const displayedVideos = filteredVideos.slice(0, visibleCount);

  // YouTube thumbnail URLs
  const getThumbnail = (youtubeId) => {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  return (
    <>
      <style>{`
        body {
          background-color: #0B0B0A;
          color: #e5e2df;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .sacred-glow {
          background: radial-gradient(circle at 50% 50%, rgba(200, 155, 60, 0.15) 0%, transparent 70%);
        }

        .incense-smoke {
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
          opacity: 0.3;
          pointer-events: none;
        }

        .divine-border {
          border: 1px solid rgba(200, 155, 60, 0.3);
          box-shadow: inset 0 0 15px rgba(200, 155, 60, 0.1);
        }

        .glass-card {
          background: rgba(16, 38, 29, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Font Classes */
        .font-label-caps {
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          line-height: 100%;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .font-display-hero {
          font-family: 'Noto Serif', serif;
          font-size: 84px;
          line-height: 100%;
          letter-spacing: -0.02em;
          font-weight: 400;
        }

        .font-headline-md {
          font-family: 'Noto Serif', serif;
          font-size: 32px;
          line-height: 120%;
          font-weight: 400;
        }

        .font-body-md {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          line-height: 160%;
          font-weight: 400;
        }

        .px-margin-edge {
          padding-left: 64px;
          padding-right: 64px;
        }

        .mb-section-gap {
          margin-bottom: 128px;
        }

        .max-w-container-max {
          max-width: 1440px;
        }

        .gap-gutter {
          gap: 32px;
        }

        /* Modal Animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: slideUp 0.4s ease-out;
        }

        @media (max-width: 768px) {
          .font-display-hero {
            font-size: 42px;
          }
          .font-headline-md {
            font-size: 24px;
          }
          .px-margin-edge {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <div className="font-body-md selection:bg-[#f0bf5c] selection:text-[#412d00] overflow-x-hidden" style={{ backgroundColor: '#0B0B0A', color: '#e5e2df', minHeight: '100vh' }}>
        <main className="relative ">
          {/* Ambient Decorative Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#374e43]/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-[#c89b3c]/10 rounded-full blur-[100px]"></div>
            <div className="incense-smoke absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
          </div>

          {/* Hero Section */}
          <section className="relative px-margin-edge flex flex-col items-center text-center mb-12 z-10 pt-32">
            <div className="sacred-glow absolute -top-2 w-full h-full pointer-events-none"></div>
            <h1 className="font-display-hero text-[#e5e2df] mb-8 max-w-5xl leading-tight">
              Healing Stories &amp; <span className="italic text-[#f0bf5c]">Ayurvedic Wisdom</span>
            </h1>
          </section>

          {/* Category Filters */}
          <section className="px-margin-edge mb-16 z-10 relative">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-6 py-3 rounded-full font-label-caps text-xs transition-all ${
                    activeCategory === cat
                      ? 'bg-[#f0bf5c] text-[#261900]'
                      : 'glass-card divine-border text-[#e5e2df] hover:bg-[#c89b3c]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Video Grid */}
          <section className="px-margin-edge max-w-container-max mx-auto mb-section-gap z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {displayedVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative glass-card divine-border rounded-xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(200,155,60,0.2)] cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-neutral-900">
                    <img
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                      alt={video.title}
                      src={getThumbnail(video.youtube_id)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#f0bf5c]/20 backdrop-blur-md flex items-center justify-center border border-[#f0bf5c]/40 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[#f0bf5c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded bg-[#374e43]/80 backdrop-blur-md text-[#a5beb1] text-[10px] uppercase tracking-widest font-label-caps">
                        {video.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-md text-[#e5e2df] mb-2 group-hover:text-[#f0bf5c] transition-colors line-clamp-2">{video.title}</h3>
                    <p className="font-body-md text-[#d2c5b1] opacity-70 leading-relaxed text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pagination / Load More */}
          {visibleCount < filteredVideos.length && (
            <div className="flex justify-center mb-section-gap">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="flex items-center space-x-3 px-12 py-5 bg-transparent border border-[#f0bf5c]/30 text-[#f0bf5c] hover:bg-[#f0bf5c]/10 transition-all font-label-caps text-xs tracking-widest"
              >
                <span>View More Archives</span>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          )}
        </main>

        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="modal-content relative w-full max-w-4xl bg-[#131312] rounded-2xl overflow-hidden border border-[#f0bf5c]/20 shadow-[0_0_60px_rgba(200,155,60,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#f0bf5c]/20 hover:border-[#f0bf5c]/40 transition-all"
              >
                <span className="material-symbols-outlined text-white text-xl">close</span>
              </button>

              {/* Video Iframe */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtube_id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded bg-[#374e43]/80 text-[#a5beb1] text-[10px] uppercase tracking-widest font-label-caps">
                    {selectedVideo.category}
                  </span>
                </div>
                <h3 className="font-headline-md text-[#e5e2df] mb-2">{selectedVideo.title}</h3>
                <p className="font-body-md text-[#d2c5b1] opacity-70">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VedaVideos;