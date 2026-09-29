import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Play, Sparkles, X } from "lucide-react";
import SEO from "../../components/SEO";
import "./CelestialPages.css";
import "./Videos.css";

const VIDEOS = [
  { id: 1, youtube_id: "VUmCFz8rd5s", title: "Boy recovered from Celebral palsy", description: "Cerebral palsy boy walking perfectly after 8 months", category: "Recovery" },
  { id: 2, youtube_id: "TT9VQpR60jo", title: "If your child has such a problem, please take my word for it..", description: "Deep cleansing therapy that removes toxins and restores bodily balance.", category: "Recovery" },
  { id: 3, youtube_id: "5rztM0gcs7M", title: "But when we came to Dades, my father got us..", description: "Simple morning rituals to start your day with energy and balance.", category: "Recovery" },
  { id: 4, youtube_id: "KZ85s4EC0bw", title: "If a man who has given up hope survives..", description: "Natural ways to manage stress using Ayurvedic herbs and techniques.", category: "Recovery" },
  { id: 5, youtube_id: "rZNu9Q6enjk", title: "No one will believe that she is paralyzed...", description: "Step-by-step guide to self-massage with warm herbal oils.", category: "Recovery" },
  { id: 6, youtube_id: "GvE9RziF2M4", title: "Amavasya Theertha which gives relief from all diseases..", description: "Eating according to your dosha for optimal health and digestion.", category: "Educational" },
  { id: 7, youtube_id: "L9Njqa1W6DM", title: "The story of a tearful child!!", description: "Cerebral palsy boy walking perfectly after 8 months", category: "Recovery" },
  { id: 8, youtube_id: "_kZl0ZhOHzM", title: "This ground gourd is nectar for men and medicine for women..", description: "Deep cleansing therapy that removes toxins and restores bodily balance.", category: "Educational" },
  { id: 9, youtube_id: "BwemWMWkBS0", title: "Brahma Yajna is performed at Dade Ashram on this Mouni Amavasya day.", description: "Simple morning rituals to start your day with energy and balance.", category: "Educational" },
  { id: 10, youtube_id: "P_7Fs-OmROs", title: "Unexpected change in 2 months..", description: "Natural ways to manage stress using Ayurvedic herbs and techniques.", category: "Recovery" },
  { id: 11, youtube_id: "D43N8B85MS0", title: "My baby is walking in 6 months..", description: "Step-by-step guide to self-massage with warm herbal oils.", category: "Recovery" },
  { id: 12, youtube_id: "JO3JW1n2ZrY", title: "Copper Making Process..", description: "Eating according to your dosha for optimal health and digestion.", category: "Educational" },
];

const CATEGORIES = ["All Videos", "Recovery", "Educational"];
const getThumbnail = (youtubeId) => `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

const VedaVideos = () => {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = useMemo(
    () => activeCategory === "All Videos" ? VIDEOS : VIDEOS.filter((video) => video.category === activeCategory),
    [activeCategory],
  );
  const displayedVideos = filteredVideos.slice(0, visibleCount);

  useEffect(() => {
    if (!selectedVideo) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <>
      <SEO
        title="Ayurvedic Healing Videos | Dr Dadhe's Ayur & Nature Cure LLP"
        description="Watch Ayurvedic healing stories, recovery videos, patient experiences, and educational wellness videos from Dr Dadhe's Ayur & Nature Cure LLP."
        path="/videos"
      />

      <main className="videos-page">
        <section className="videos-hero" aria-labelledby="videos-title">
          <div className="videos-hero__stars" aria-hidden="true" />
          <div className="videos-shell videos-hero__inner">
            <div className="videos-hero__ornament" aria-hidden="true">
              <span className="videos-hero__orbit videos-hero__orbit--outer" />
              <span className="videos-hero__orbit videos-hero__orbit--inner" />
              <span className="videos-hero__lotus">✦</span>
            </div>
            <p className="videos-eyebrow">
              <span aria-hidden="true" />Stories of care<span aria-hidden="true" />
            </p>
            <h1 id="videos-title">Healing Stories <span>&amp; Ayurvedic Wisdom</span></h1>
            <div className="videos-hero__rule" aria-hidden="true"><i /><Sparkles size={15} /><i /></div>
          </div>
        </section>

        <section className="videos-archive" aria-labelledby="video-archive-title">
          <div className="videos-shell">
            <header className="videos-archive__header">
              <div>
                <p className="videos-eyebrow">Video archive</p>
                <h2 id="video-archive-title">Stories, experiences and guidance.</h2>
              </div>
              <div className="videos-filters" aria-label="Filter videos by category">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    className={activeCategory === category ? "is-active" : ""}
                    onClick={() => selectCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </header>

            <div className="videos-grid">
              {displayedVideos.map((video, index) => (
                <article className="video-card" key={video.id}>
                  <button className="video-card__trigger" type="button" onClick={() => setSelectedVideo(video)} aria-label={`Play ${video.title}`}>
                    <span className="video-card__media">
                      <img src={getThumbnail(video.youtube_id)} alt="" loading="lazy" />
                      <span className="video-card__shade" aria-hidden="true" />
                      <span className="video-card__play" aria-hidden="true"><Play size={24} fill="currentColor" /></span>
                    </span>
                    <span className="video-card__content">
                      <span className="video-card__meta">
                        <span className="video-card__category">{video.category}</span>
                        <span className="video-card__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span className="video-card__title">{video.title}</span>
                      <span className="video-card__description">{video.description}</span>
                      <span className="video-card__watch">Watch story <Play size={13} fill="currentColor" /></span>
                    </span>
                  </button>
                </article>
              ))}
            </div>

            {visibleCount < filteredVideos.length && (
              <div className="videos-more">
                <button type="button" onClick={() => setVisibleCount((count) => count + 6)}>
                  View More Archives <ChevronDown size={17} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </section>

        {selectedVideo && (
          <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title" onClick={() => setSelectedVideo(null)}>
            <div className="video-modal__panel" onClick={(event) => event.stopPropagation()}>
              <button className="video-modal__close" type="button" onClick={() => setSelectedVideo(null)} aria-label="Close video" autoFocus>
                <X size={21} />
              </button>
              <div className="video-modal__player">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtube_id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-modal__content">
                <span>{selectedVideo.category}</span>
                <h2 id="video-modal-title">{selectedVideo.title}</h2>
                <p>{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default VedaVideos;
