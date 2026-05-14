import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const whatsappLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
const facebookLogo = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";
const instaLogo = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";
const youtubeLogo = "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png";
const qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://maps.google.com/?q=Dr.Dadhe's+Ayur+and+Nature+Cure,+Telangana";
import venkat_anna from "../../assets/venkat_anna.png"
import heroVideo from "../../assets/herobg.mp4"
import SEO from "../../components/SEO";

const VedaCinemaComplete = () => {


    const [formState, setFormState] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);


const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormState(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormState({ name: '', email: '', phone: '', message: '', consent: false });
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};



// for share modal

// Add these state declarations
const [showShareModal, setShowShareModal] = useState(false);

// Share data
const shareData = {
  title: "Dr. Dadhe's Ayur & Nature Cure",
  text: "Experience authentic Ayurvedic treatments and natural healing at Dr. Dadhe's Ayur & Nature Cure. Visit us for holistic wellness!",
  url: window.location.href,
};

// Main share handler
const handleShare = async () => {
  // Check if Web Share API is supported (mostly mobile)
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareData.title,
        text: shareData.text,
        url: shareData.url,
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        // Fallback to custom modal
        setShowShareModal(true);
      }
    }
  } else {
    // Desktop or unsupported browser - show custom modal
    setShowShareModal(true);
  }
};

// Share to specific social media
const shareToSocial = (platform) => {
  const encodedText = encodeURIComponent(`${shareData.text}\n\n${shareData.title}`);
  const encodedUrl = encodeURIComponent(shareData.url);
  
  let shareUrl = '';
  
  switch(platform) {
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodedText}%20-%20${encodedUrl}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
      break;
    case 'instagram':
      // Instagram doesn't have a direct share URL, copy link instead
      copyToClipboard();
      return;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodedText}%0A%0A${encodedUrl}`;
      break;
    default:
      return;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  }
  setShowShareModal(false);
};

// Copy link to clipboard
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(shareData.url);
    alert('Link copied to clipboard! ✓');
    setShowShareModal(false);
  } catch (err) {
    alert('Failed to copy link. Please copy manually.');
  }
};





  return (
    <>
<SEO
  title="Dr Dadhe's Ayur & Nature Cure LLP | Ayurvedic Treatment & Holistic Healing"
  description="Dr Dadhe's Ayur & Nature Cure LLP offers authentic Ayurvedic treatments, nature cure therapies, paralysis recovery care, chronic disease support, and holistic healing."
  path="/"
/>

      <style>{`
        /* ============ RESET & BASE ============ */
        body {
          background-color: #131312;
          color: #e5e2df;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* ============ MATERIAL ICONS ============ */
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        /* ============ GLASS & GLOW EFFECTS ============ */
        .glass-card {
          background: rgba(19, 19, 18, 0.6);
          backdrop-filter: blur(32px);
          border: 1px solid rgba(240, 191, 92, 0.15);
        }

        .glass-panel {
          backdrop-filter: blur(20px);
          background: rgba(19, 19, 18, 0.7);
          border: 1px solid rgba(240, 191, 92, 0.1);
        }

        .divine-glow {
          box-shadow: 0 0 40px rgba(240, 191, 92, 0.1);
        }

        .spiritual-glow {
          background: radial-gradient(circle at 50% 50%, rgba(240, 191, 92, 0.15) 0%, transparent 70%);
        }

        .temple-lamp-glow {
          background: radial-gradient(circle, rgba(240, 191, 92, 0.4) 0%, rgba(240, 191, 92, 0) 70%);
        }

        .temple-button {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at center, #f0bf5c 0%, #7b5900 100%);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          color: #412d00;
        }

        .temple-button:hover {
          box-shadow: 0 0 30px rgba(240, 191, 92, 0.4);
          transform: scale(1.02);
        }

        .smoke-overlay {
          background: linear-gradient(to bottom, rgba(19, 19, 18, 0.4), transparent, rgba(19, 19, 18, 0.8));
        }

        .sacred-geometry-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 27.5L60 30 32.5 32.5 30 60 27.5 32.5 0 30l27.5-2.5z' fill='%23f0bf5c' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .spiritual-ray {
          background: linear-gradient(45deg, rgba(240, 191, 92, 0.1) 0%, transparent 40%, rgba(240, 191, 92, 0.05) 100%);
        }

        /* ============ CUSTOM FONT CLASSES ============ */
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

        .font-headline-lg {
          font-family: 'Noto Serif', serif;
          font-size: 48px;
          line-height: 110%;
          font-weight: 400;
        }

        .font-headline-md {
          font-family: 'Noto Serif', serif;
          font-size: 32px;
          line-height: 120%;
          font-weight: 400;
        }

        .font-body-lg {
          font-family: 'Manrope', sans-serif;
          font-size: 18px;
          line-height: 160%;
          font-weight: 400;
        }

        .font-body-md {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          line-height: 160%;
          font-weight: 400;
        }

        /* ============ CUSTOM SPACING ============ */
        .py-section-gap {
          padding-top: 128px;
          padding-bottom: 128px;
        }

        .px-margin-edge {
          padding-left: 64px;
          padding-right: 64px;
        }

        .max-w-container-max {
          max-width: 1440px;
        }

        .gap-gutter {
          gap: 32px;
        }

        .p-glass-padding {
          padding: 24px;
        }

        /* ============ ANIMATIONS ============ */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 768px) {
          .font-display-hero {
            font-size: 48px;
          }
          .font-headline-lg {
            font-size: 36px;
          }
          .font-headline-md {
            font-size: 28px;
          }
          .px-margin-edge {
            padding-left: 24px;
            padding-right: 24px;
          }
          .p-glass-padding {
            padding: 16px;
          }
        }


            @keyframes slide-up {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slide-up {
      animation: slide-up 0.3s ease-out;
    }
    @media (min-width: 768px) {
      .animate-slide-up {
        animation: none;
      }
    }
      `}</style>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Manrope:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <div className="font-body-md selection:bg-[#f0bf5c]/30 overflow-x-hidden" style={{ backgroundColor: '#131312', color: '#e5e2df' }}>
        


        {/* ============================================ */}
        {/* SIDE NAVIGATION */}
        {/* ============================================ */}
        {/* <div className="hidden lg:flex flex-col py-10 fixed left-0 top-0 h-full w-20 border-r border-white/5 bg-[#0D110F]/80 backdrop-blur-2xl z-40 items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-[#f0bf5c]/10 flex items-center justify-center border border-[#f0bf5c]/20">
            <span className="material-symbols-outlined text-[#f0bf5c] text-xl">spa</span>
          </div>
          <div className="flex flex-col gap-10">
            <a className="text-white/40 hover:text-[#f0bf5c] transition-all group relative" href="#">
              <span className="material-symbols-outlined">shutter_speed</span>
              <span className="absolute left-16 bg-[#f0bf5c] text-[#412d00] text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-label-caps whitespace-nowrap">Home</span>
            </a>
            <a className="text-[#f0bf5c] border-l-2 border-[#f0bf5c] pl-4 py-1 flex items-center justify-center" href="#">
              <span className="material-symbols-outlined">auto_awesome</span>
            </a>
            <a className="text-white/40 hover:text-[#f0bf5c] transition-all group relative" href="#">
              <span className="material-symbols-outlined">architecture</span>
              <span className="absolute left-16 bg-[#f0bf5c] text-[#412d00] text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-label-caps whitespace-nowrap">Doshas</span>
            </a>
            <a className="text-white/40 hover:text-[#f0bf5c] transition-all group relative" href="#">
              <span className="material-symbols-outlined">spa</span>
              <span className="absolute left-16 bg-[#f0bf5c] text-[#412d00] text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-label-caps whitespace-nowrap">Sanctuary</span>
            </a>
          </div>
          <button className="w-10 h-10 rounded-full bg-[#f0bf5c] flex items-center justify-center hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[#412d00] text-xl">event_upcoming</span>
          </button>
        </div> */}

        <main className="relative z-10">
          {/* Spiritual Light Rays */}
     

          {/* ============================================ */}
          {/* SECTION 1: HERO (from VedaCinemaMain) */}
          {/* ============================================ */}
   {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div 
    className="absolute inset-0 z-0 parallax-bg"
    style={{
      backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuAe0obCzFTXBxghQ3VJa6aAELbc5II48nZeaRx5TZFjl02P8epAovm-BXQXV3M_rV7rgk-SjHRq2Iu5uLjFF7j1joURAN9PjXJJmvUf1KejKORmECJcIUGeeIpWoz3KvncJKBaNMd84GFflbFJWO60P_dkcmVxbQdqwAkZZA4sjF23ZWfqbNj7mfoYoFAxZoJtEdzwgEFqH2k1yJsP63lOdZzWEL5gjz6_cynRnWFpfWyLpzIlbzuO4DjxiuG4c6kGvzELM7hKQFc8)`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.6
    }}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131312]/20 to-[#131312] z-[1]"></div>
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
    <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]" style={{ background: 'linear-gradient(45deg, transparent 45%, rgba(240,191,92,0.05) 50%, transparent 55%)' }}></div>
  </div>
  <div className="relative z-10 text-center px-6">
    <h1 className="font-display-hero text-[#e5e2df] mb-6 max-w-5xl mx-auto drop-shadow-2xl">Healing Beyond Limits</h1>
    <p className="font-body-lg text-[#d2c5b1] max-w-2xl mx-auto mb-12 opacity-90">
      Where ancient Ayurveda restores hope for chronic recovery. Experience a portal to divine wellness and profound cellular restoration.
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      <button className="border border-[#4e4637] hover:border-[#f0bf5c] text-[#e5e2df] px-10 py-5 rounded-full font-label-caps transition-all duration-500 backdrop-blur-md text-2xl font-bold">BEGIN YOUR HEALING JOURNEY</button>
    </div>
  </div>
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
    <span className="text-[10px] font-label-caps tracking-[0.5em]">DESCEND</span>
    <span className="material-symbols-outlined animate-bounce">expand_more</span>
  </div>
</section> */}


{/* <video src={heroVideo} autoPlay></video> */}

<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 "
  >
    <source src={heroVideo} type="video/mp4" />
    {/* Fallback image if video doesn't load */}
    <img 
      src="https://img.youtube.com/vi/your-fallback-image.jpg" 
      alt="Fallback" 
      className="w-full h-full object-cover"
    />
  </video>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131312]/20 to-[#131312] z-[1]"></div>
  
  {/* Light Ray Effect */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
    <div 
      className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]" 
      style={{ background: 'linear-gradient(45deg, transparent 45%, rgba(240,191,92,0.05) 50%, transparent 55%)' }}
    ></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="font-display-hero text-[#e5e2df] mb-6 max-w-5xl mx-auto drop-shadow-2xl">
      Healing Beyond Limits
    </h1>
    <p className="font-body-lg text-[#d2c5b1] max-w-2xl mx-auto mb-12 opacity-90">
      Where ancient Ayurveda restores hope for chronic recovery. Experience a portal to divine wellness and profound cellular restoration.
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      <button className="border border-[#4e4637] hover:border-[#f0bf5c] text-[#e5e2df] px-10 py-5 rounded-full font-label-caps transition-all duration-500 backdrop-blur-md text-2xl font-bold">
        BEGIN YOUR HEALING JOURNEY
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
    <span className="text-[10px] font-label-caps tracking-[0.5em]">DESCEND</span>
    <span className="material-symbols-outlined animate-bounce">expand_more</span>
  </div>
</section>
          

          {/* ============================================ */}
          {/* SECTION 2: SACRED PATHWAYS (from AyurvedaSanctuary) */}
          {/* ============================================ */}
{/* ============================================ */}
{/* SECTION: DISEASES WE TREAT */}
{/* ============================================ */}
<section className="min-h-screen pt-40 px-margin-edge mx-auto relative">
  <div className="text-center mb-24">
    <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] uppercase block mb-4">AYURVEDIC CARE</span>
    <h2 className="font-display-hero text-[#e5e2df] mb-6">Your Path Toward Wellness</h2>
    <p className="font-body-lg text-[#d2c5b1] max-w-2xl mx-auto italic">
  We provide specialized Ayurvedic care for chronic conditions where modern medicine reaches its limits. A place of hope and recovery, rooted in ancient wisdom and divine compassion.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1: Paralysis */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A cinematic, low-angle shot of a traditional Ayurvedic healer supporting a patient's limb during a recovery therapy session. The lighting is warm and golden, filtering through a temple window, casting soft shadows." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAofvKX3Tkf3GTS3h-BuLBpRvb3FqdaOIRei6PE0bfoSnU-nivnPY_0rWAvl6KAKMoERl3JkbZqo8qdtehfOv7509MV5VptvGBn4T0THsAOMDnK6xCayI4RZQFufx0jHgpNA5pLjeYi0SuuuqjU-LFTkh6zRLW-rU-sOeJ_B050wGpd3QP8ssRBo92pjHOhIQYxQC4WdVFz-blgczz8I6zs-Iss0YHEmvr4GS6ppfbedD9d-aCUHtuSjfeAoO0aPbT0m_WYOxSpzBs" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Paralysis</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Restoring neural pathways through neuro-regenerative oils and specialized kinetic therapies.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    {/* Card 2: Brain Stroke */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A high-end rehabilitation focus showing neurological recovery therapy. A specialist guides a patient through cognitive exercises within a temple-inspired medical suite." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8B62Okxnd4JTQB-PqCHPccQt8aYIC_4xJtfKnaAvaS4U66jwz8Cuhm3vnimQy6VVcO7qI3KXjK7YkeQo_-oIU_L-1VR0cRDLPBNfAtKd2uCTyYtQOjqsULenlPQILsFbJdncNP2ohI6Y_wA-SrP-5ODS0KUHH0sE_JK2q-TURgqzJzmGHbWpwE0lJ1rBKJEMDj25kWTfKxYmEEKyeMfhQZXaWTzg13UDwg-GTY5mcLDuZNAuGgLoMwO9DxyOO5T7LVh5nqqX78i8" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Brain Stroke</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Intensive post-stroke rehabilitation focusing on cognitive clarity and motor function recovery.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    {/* Card 3: Chronic Liver Disease */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A close-up of a premium herbal consultation where a vaidya examines high-quality Ayurvedic herbs in a dimly lit, sacred wellness environment." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFr7TlVCAlFZchT6dR8CdrpNITaCNRj80Q7rlA2ZhwDNsGTH7BQGP8ijGena-5DNkndBEp0jBgwnQL_XeoJlQ5fM3HZ0YazaUs_Ne_-E21gsmncpaDACjtbHQu2NVvxB6jsZ1V0oLl_Pk7fEY8lLyw4QDD3EPGUWtBjl-5XWtcG5s9fV4du7rnLKkYOMVerK2SzibJtwkBkCKvQbGzIlWTv0dfW1ugKTmxUmnBXfJ0NzE9cUL8_N0hRyKgAf0jtNQs_6R-t1YPRYI" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Chronic Liver Disease</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Detoxification and regeneration of hepatic cells through rare herbal formulations and diet.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    {/* Card 4: Chronic Kidney Disease */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A holistic wellness consultation scene with a patient and a healer in a peaceful, temple-like room. The lighting is cinematic and low-key." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdsOdPHpp1JcfX3yBaTyJ7CrVsISiNSRPf4cjafRbzzLO6lFRvwz1lw8-u8RJ7tJ7gcziObnEgyYi9VC0Jw_TWnE4H2cCU8yDpU9p-U500WrxI39PhKcqwQUiEtLfIML2lAIB0YM9qp8xRlJSP97Etseqs9bTkpryMHx49sHDrgp8RBes81VQE5uKxvTkGN8iPM_vpUm8yTXwnpo0Ei1rVhCBxndtmbLMN_zgeF1UZj3xxjYrg3DQgwxafceMOyNtQhuny6bayBa4" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Chronic Kidney Disease</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Supporting renal health and balancing fluids through non-invasive Ayurvedic protocols.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    {/* Card 5: Cancer Support */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A compassionate recovery environment showing a patient in holistic therapy. Soft, spiritual light rays cut across the scene." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADqnTVnN96R9E-uvQvIGgrMpTN2YpoaGS6vzVY0gJ9734VEyDlwkyh2LG1ipLU3XrhBGazD8TNn14JMIcK5qVzxkzgmN4FIrjQG0kGDp_2Jt28rkjXbPLj2boYhKfK--hHvNZfkZnpwR1yfWNwUv_FHgQt5iHTgD2xRn0q-Qtg7c1scvztQMn6JE9Ifx5OsWG-o9XMps_RXDjevndZ9ImXEKcBaQKnAZYuPZhJKEnGwC7IcMcCLoHp0i-Modtp7C4SNvAgstpHxsE" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Cancer Support</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Integrative care to manage side effects, boost immunity, and enhance overall quality of life.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    {/* Card 6: Autism & ADHD */}
    <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
      <div className="absolute inset-0 z-0 opacity-80  transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150 group-hover:contrast-125">
        <img 
          className="w-full h-full object-cover" 
          alt="A calm and patient interaction between an Ayurvedic therapist and a young child in a therapy support setting. The room is designed with sacred geometry elements and soft emerald lighting." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYvz_zF9vYMBTcK1AWWsp654eke7C0x7KD8kD1s1U3tWF1o9PuqwG8GoKOSs5cwxeUKhWjq7DvYM9IpvFcMPx7O0hE52kiXk6lGsbZpdV4pN2uyqBr0M92iDwQKox3z2GrSUjAotXL4gdInEE2QjTmzypeayS15imn8rl7v1TotTFuD9mZQr33GvxzPknNfBhDCq03d94H0phcJm135rgpCDhuFKrFa_ouj8LZqpAuG7H7zw7Vk6VNH-zSf1rf7HUAA16bsHf4mzQ" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
      <div className="relative z-20">
        <h3 className="font-headline-md text-[#e5e2df] mb-4">Autism & ADHD</h3>
        <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">
          Gentle therapies and sensory balancing to help children find focus and internal harmony.
        </p>
        <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  </div>
</section>



          {/* ============================================ */}
          {/* SECTION 13: STATISTICS (from Statistics) */}
          {/* ============================================ */}
          <section className="py-section-gap" style={{ backgroundColor: '#0e0e0d', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="max-w-container-max mx-auto px-margin-edge grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {[
                { number: '10', label: 'Years of Sacred Wisdom', delay: '' },
                { number: '5000+', label: 'Lives Transformed', delay: 'delay-100' },
                { number: '95%', label: 'Satisfaction Rate', delay: 'delay-200' }
              ].map((stat, i) => (
                <div key={i} className={`relative py-12 group ${stat.delay}`}>
                  <div className="absolute inset-0 spiritual-glow scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                  <h3 className="font-display-hero text-[#f0bf5c] mb-2">{stat.number}</h3>
                  <p className="font-label-caps uppercase tracking-widest text-[#d2c5b1]">{stat.label}</p>
                  <div className="mt-4 w-8 h-[2px] mx-auto" style={{ backgroundColor: '#4e4637' }}></div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 3: TRINITY OF BALANCE (from AyurvedaSanctuary) */}
          {/* ============================================ */}
          <section className="min-h-screen py-section-gap px-margin-edge relative overflow-hidden" style={{ backgroundColor: 'rgba(14,14,13,0.5)' }}>
            <div className="sacred-geometry-bg absolute inset-0 opacity-20"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] mb-6 block uppercase">Divine Architecture</span>
                <h2 className="font-headline-lg text-[#e5e2df] mb-8 leading-tight">The Trinity of <br /><span className="text-[#f0bf5c] italic">Cosmic Balance</span></h2>
                <p className="font-body-lg text-[#d2c5b1] mb-12">Ayurveda views the human system as a micro-cosmos of the five elements. Our philosophy centers on balancing the three fundamental energies—the Doshas—that govern your physical and spiritual existence.</p>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#f0bf5c]/30 flex items-center justify-center text-[#f0bf5c] group-hover:bg-[#f0bf5c]/10 transition-colors">
                      <span className="material-symbols-outlined">air</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl mb-2 text-[#e5e2df]">Vata: The Etheric Motion</h4>
                      <p className="font-body-md text-[#d2c5b1]">The energy of movement, breath, and space. When balanced, it ignites creativity and vitality.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#ffb786]/30 flex items-center justify-center text-[#ffb786] group-hover:bg-[#ffb786]/10 transition-colors">
                      <span className="material-symbols-outlined">flare</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl mb-2 text-[#e5e2df]">Pitta: The Solar Fire</h4>
                      <p className="font-body-md text-[#d2c5b1]">The energy of transformation and digestion. It fuels intelligence and purposeful action.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#b3ccbe]/30 flex items-center justify-center text-[#b3ccbe] group-hover:bg-[#b3ccbe]/10 transition-colors">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl mb-2 text-[#e5e2df]">Kapha: The Earthly Bond</h4>
                      <p className="font-body-md text-[#d2c5b1]">The energy of structure and lubrication. It provides stability, stamina, and compassion.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dosha Diagram */}
              <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border-[1px] border-[#f0bf5c]/10 rounded-full scale-100" style={{ animation: 'spin 60s linear infinite' }}></div>
                <div className="absolute inset-4 border-[1px] border-[#f0bf5c]/5 rounded-full scale-100" style={{ animation: 'spin 45s linear infinite reverse' }}></div>
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#f0bf5c]/5 border border-[#f0bf5c]/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(240,191,92,0.1)] cursor-default">
                    <div className="text-[#f0bf5c] temple-lamp-glow p-4 rounded-full mb-2"><span className="material-symbols-outlined text-4xl">air</span></div>
                    <span className="font-label-caps text-[#e5e2df]">Vata</span>
                  </div>
                  <div className="absolute bottom-10 left-0 w-48 h-48 rounded-full bg-[#ffb786]/5 border border-[#ffb786]/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,183,134,0.1)] cursor-default">
                    <div className="text-[#ffb786] temple-lamp-glow p-4 rounded-full mb-2"><span className="material-symbols-outlined text-4xl">flare</span></div>
                    <span className="font-label-caps text-[#e5e2df]">Pitta</span>
                  </div>
                  <div className="absolute bottom-10 right-0 w-48 h-48 rounded-full bg-[#b3ccbe]/5 border border-[#b3ccbe]/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(179,204,190,0.1)] cursor-default">
                    <div className="text-[#b3ccbe] temple-lamp-glow p-4 rounded-full mb-2"><span className="material-symbols-outlined text-4xl">water_drop</span></div>
                    <span className="font-label-caps text-[#e5e2df]">Kapha</span>
                  </div>
                  <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" viewBox="0 0 400 400">
                    <line stroke="#f0bf5c" strokeWidth="1" x1="200" x2="100" y1="100" y2="300"></line>
                    <line stroke="#f0bf5c" strokeWidth="1" x1="100" x2="300" y1="300" y2="300"></line>
                    <line stroke="#f0bf5c" strokeWidth="1" x1="300" x2="200" y1="300" y2="100"></line>
                    <circle cx="200" cy="233" fill="none" r="120" stroke="#f0bf5c" strokeDasharray="5 5" strokeWidth="0.5"></circle>
                  </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#131312] border border-[#f0bf5c]/20 shadow-[0_0_40px_rgba(240,191,92,0.15)] flex items-center justify-center">
  <div 
    className="w-12 h-12 rounded-full border border-[#f0bf5c]/30 flex items-center justify-center"
    style={{ animation: 'spin 10s linear infinite' }}
  >
    <div className="w-4 h-4 rounded-full bg-[#f0bf5c] shadow-[0_0_20px_rgba(240,191,92,0.8)]"></div>
  </div>
</div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 4: TREATMENT SHOWCASE (from AyurvedaSanctuary) */}
          {/* ============================================ */}
          <section className="py-section-gap px-margin-edge max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div >
                <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] mb-4 block uppercase">Master Therapies</span>
                <h2 className="font-headline-lg text-[#e5e2df] leading-none">The Luxury of <br />Ancient Science  Offered by Us</h2>
              </div>
             
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Shirodhara - Large Card */}
              <div className="col-span-12 lg:col-span-8 group relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Shirodhara treatment with warm oil flowing onto forehead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtCm6j_EJ1mzgBj3NKHtzOWGLcWmGiuYg7fLpV-5wuSapB6JzDlAODZpc1icCCxFTw-gK9Ek1hLBHHRkkYeDiswjfDidqkCSOcLYlnSLN0fhw8GopScYJgi7V7lFcyNTRW-FP_WqDCHkbA6vF3_5hT9X7Fsiff9Y0cg2M_7Yo2jzoJaDqTauH3ZRYFOjaZu2sjawiSPQDfdzTxXYiCE5NoWOOyERf6VD3fdYTWGqkp_lNsBUcizMbdE1mmkDdS7ZCwpj_hFMOQQI" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                  <div className="max-w-md">
                    <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">The Crown Ritual</span>
                    <h3 className="font-display-hero text-5xl text-[#e5e2df] mb-4">Shirodhara</h3>
                    <p className="font-body-md text-[#d2c5b1]">A continuous flow of warm herbal oil onto the third eye, melting mental stress and inducing a deep state of Turiya—pure consciousness.</p>
                  </div>
                  {/* <div className="bg-[#c89b3c]/20 backdrop-blur-md border border-[#f0bf5c]/30 p-6 rounded-lg">
                    <div className="font-label-caps text-[#f0bf5c] mb-1">Duration</div>
                    <div className="text-[#e5e2df] font-headline-md text-2xl">90 Mins</div>
                  </div> */}
                </div>
              </div>
              {/* Abhyanga - Tall Card */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 group relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Abhyanga massage with warm oils" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_5qX9vra0hKvW3y_dx4BJoti7Cz4Q4sJ5tw0o6iqNGvuSeGiOg9zEfE58ojfY99aD3d-0YRotpxARAzUvNhgaKgS8a-AN2I2lT9iJiipBG1guMcjaNpxmqECp9cpH7m80dffGavKRjrWGDVn0lAlPl_4p2nef7Kjln40NdSeSFty0DLg_sibg5IXmSKUEyFTZiayiyb5q7lWA79WXfvILhxDZB3LkuEWwpmeymRslKVhQluYlP_G0I3KNPdk3V-Eny3tz4LR-uaQ" />
                <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-700"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">Rhythm of Touch</span>
                  <h3 className="font-headline-lg text-[#e5e2df] mb-4">Abhyanga</h3>
                  <p className="font-body-md text-[#d2c5b1] mb-8">Synchronized full-body massage using warm dosha-specific oils to nourish the skin and flush the lymphatic system.</p>
                  
                </div>
              </div>
              {/* Snana - Wide Card */}
  <div className="col-span-12 md:col-span-6 group relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
 <img class="w-full h-full object-cover" data-alt="A serene cinematic shot of traditional Ayurvedic copper vessels arranged on a dark stone surface, surrounded by wisps of incense smoke and scattered marigold petals. The lighting is low and atmospheric, with golden highlights catching the metallic edges, evoking a sense of ancient medical wisdom and purity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6dLhhIXTfZHMRVO1VQN09y3uxOJDRnJ4mQg1o4nqCT96VO6LJOeAKKLObWnm5xQFh7r1mC6Aqe5apnyjIQhmORfIrLty5J2rwgTkErOcjj5Acl8iwhY91CGzK-vVfrwpA-EJx7ruYKaLUG8Ada01kUBVNvOZv4Sv2SdZlK-r8JX_M_Zq5XLHDC2hwtgXWQzbRCeaGHPXbyygpESjJkvQ4W9x_w4ILt1y8RxCkknvCRN_er1s_s32Df7KyPkCKCFhrunVxuxfrQ5A"/>
  <div className="absolute inset-0 bg-gradient-to-r from-[#131312] via-[#131312]/20 to-transparent"></div>
  <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-lg">
    <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">Ultimate Detoxification</span>
    <h3 className="font-headline-lg text-[#e5e2df] mb-4">Panchakarma</h3>
    <p className="font-body-md text-[#d2c5b1] mb-6">The five profound actions of Ayurvedic purification that eliminate deep-seated toxins and rejuvenate the body at a cellular level.</p>
  </div>
</div>
              {/* Pinda Sveda - Square Card */}
              <div className="col-span-12 md:col-span-6 group relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Therapist hands holding heated herbal bundle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqgzP-9vvqeUxXf-ChFEYiRYEBq68boHTymnc_5ijND6Q4jbDPCud9sbNAhgp-3ZTaOb8ovruUePdK_JHed7uX5H4CCDD8Z6QqG4LycVsHXg11KqYZzBFgg7BPwf1bm5JvVkebxlGxnXdVwamHCN5SXgr-6olEDmFq6Prp3SOKkFEUcugRDqx0xvWgYlQIQjMpUqekbr1WRkRXBTt7lqtskkMGGc4nljr9NuZq5gNjrZAzY-evRAfFnTYyUfmfZwupvuvSL3hepA" />
                <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">Heat Therapy</span>
                  <h3 className="font-headline-lg text-[#e5e2df] mb-4">Pinda Sveda</h3>
                  <p className="font-body-md text-[#d2c5b1]">Hot herbal poultices applied to joints and muscles to melt away stiffness and inflammatory toxins.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 5: HEALING CHAPTERS BENTO GRID (from VedaCinemaMain) */}
          {/* ============================================ */}
          <section className="py-section-gap" style={{ backgroundColor: '#0e0e0d' }}>
            <div className="max-w-container-max mx-auto px-margin-edge">
              <div className="text-center mb-24">
                <h2 className="font-headline-lg text-[#e5e2df] mb-4">The Healing Chapters</h2>
                <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#f0bf5c' }}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-[800px]">
                <div className="md:col-span-2 md:row-span-2 glass-card rounded-xl relative overflow-hidden group">
                  <img className="absolute inset-0 w-full h-full object-cover  group-hover:scale-110 transition-transform duration-[2000ms]" alt="Vedic fire ritual at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhkMHp5qxu-NIRHICyPI1qSve07rJnXKsU5D7DHe-M9mjDOEQ6JM49Qmk6SMAShg3HOwAR8aSuIEUrDk6qB42bzNZ2LpNUtLONJshgDJdlbzDVWGrgutFdV3OD2wGapwufiL-D0CH0g2BieEd9LgFoXC1s18dK9azywFMeYOnwAGpjrGZxYRGUB9IXqJdYnP0oXpL9MkyKqJGG-iGrcah86igQcIQ2TC3TUuwnxIN4yLDa__P_vr4wJVmjbIgbwr2GNhj7dkwG8Yw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 p-4">
                    <span className="font-label-caps text-[#f0bf5c] mb-2 block">CHAPTER 01</span>
                    <h3 className="font-headline-md text-[#e5e2df]">Ancient Wisdom</h3>
                  </div>
                </div>
                <div className="md:col-span-2 glass-card rounded-xl relative overflow-hidden group">
                  <img className="absolute inset-0 w-full h-full object-cover  group-hover:scale-110 transition-transform duration-[2000ms]" alt="Neural pathways with sanskrit scripts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD-o6vZjwV1b-ee1-n1Jsp-qWNctMqtnDG2veG5IM4keVth97pWxZCJbhUMVJ754IlSVDf_KSqrzwWg3MaZ6nn3EXeEWnpnJlFV5IOi4l8Tjv_nJbw5N3YoKDzM2h9Cg7aTl7kSMrbFRpCUbgDTmke5_iK0jqP99Y3q8cYAu6-980TJqCVqPlgahVNXTtZMhPRj-_LiK8l06TBKe5d3cJa_NNFUy_x4VSGt0BYnlhzNLTNvp9gFMQ0FN-NQ2wz2gNrvVibzIHDfA4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="font-label-caps text-[#f0bf5c] mb-2 block">CHAPTER 02</span>
                    <h3 className="font-headline-md text-[#e5e2df]">Root Cause</h3>
                  </div>
                </div>
                <div className="glass-card rounded-xl relative overflow-hidden group">
                  <img className="absolute inset-0 w-full h-full object-cover  group-hover:scale-110 transition-transform duration-[2000ms]" alt="Crystalline water with lotus petals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJXTuUp2wLsZHzd6oHtOt6NGjy6iRrfwbuNvpM8enNgSquEf8OZOgiQqG6n-66_LC74GSOEUqkh9kX9B7GtKFOQexalD1mcIvcs6B-ggszVxR5Cn9KXVx3Zss2-FD-S-wR6BMhK6n0issScipmAY0gQPAfvEDBKM6YDKFG3BkRO8bIfH17kc6Oskymo0Ach_sm0gQqOHPHN-4f2n8d4yxMp8sBLdf6gPeltfysPmu-AtRMMzmkaakTmj_xnPf5nJic71Cc8oQcJA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="font-label-caps text-[#f0bf5c] mb-2 block">03</span>
                    <h3 className="font-body-lg font-bold text-[#e5e2df] uppercase tracking-wider">Purification</h3>
                  </div>
                </div>
                <div className="glass-card rounded-xl relative overflow-hidden group">
                  <img className="absolute inset-0 w-full h-full object-cover  group-hover:scale-110 transition-transform duration-[2000ms]" alt="Person on mountain peak at sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbwHM66IjvgebyYd00O1OTrLnVN0YnK2LNpl1O0qZrhS5PWgoVTUl2BnJS2byfW1hGprG0s9VDNPbvxvoDWVJbvtEgVjvIdr_2aH5luFJ9rrKiG7PgJkr9S2tAyLAILuJ5T28dJ4ND0A15YCPOBignY61LD13Qvne4MYTmkNda_PpsoFfYbsNgDDQr1NUefeH-WzwS6V8UO4BSCAazAgkvae9eOxAgEPxJXQzsA9f9W9DtkBbiuHCz212KCnr_vYNMGLDEQTSVk7k" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="font-label-caps text-[#f0bf5c] mb-2 block">04</span>
                    <h3 className="font-body-lg font-bold text-[#e5e2df] uppercase tracking-wider">Transformation</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* ============================================ */}
          {/* SECTION 7: INGREDIENT STORYTELLING (from VedaCinema - GREEN UPDATED) */}
          {/* ============================================ */}
<section className="relative min-h-screen flex items-center pl-10"  style={{ backgroundColor: '#131312' }}>
  <div 
    className="absolute inset-0 z-0 parallax-bg"
    style={{
      backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuAgtHIHUZt7U9OIMmcOtJt5Gux6yQUjT2U3LRtaQhSKlIItD1499GkyX06aR3xfkKDQZWKdKkw95DOPiYRtYZaJ9rSOHtp90R-5FupFWcj2xD3galhsDW0W-t76btBrY7tOPSv8kgq8bZD_6kvIQxvGRazJhywKu_LVlqioHpODixvyc0YrEH91Ap6pwV6WWJ7eNvP-RM4c35LgrcrAKLi5bIU9ecH2A-FskawGDwPxjIPgVucoYRyrH7SSHKGMC7_FcjdRWir_ZaI)`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.4,
      filter: 'brightness(0.5)'
    }}
  ></div>
  <div className="relative z-10 px-margin-edge w-full">
    <div className="max-w-4xl">
      <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] mb-4 block">INGREDIENT STORYTELLING</span>
      <h2 className="font-display-hero text-[#e5e2df] text-6xl mb-12">The Alchemy of Earth</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { name: 'ASHWAGANDHA', desc: 'The strength of a stallion. A potent adaptogen to recalibrate the nervous system and anchor the spirit.' },
          { name: 'BRAHMI', desc: 'The herb of grace. Enhancing cognitive clarity and opening the gates of intuitive wisdom.' },
          { name: 'TURMERIC', desc: 'Sacred gold. A systemic purifier that ignites the internal fire and clears the path of vital energy.' },
          { name: 'NEEM', desc: 'The village pharmacy. A radical cooling agent for inflammatory states of being.' }
        ].map((item, i) => (
          <div key={i} className="group border-l border-white/10 pl-6 py-4 hover:border-[#f0bf5c] transition-colors cursor-pointer">
            <h4 className="font-headline-md text-xl text-[#f0bf5c] mb-2">{item.name}</h4>
            <p className="text-[#d2c5b1] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

          {/* ============================================ */}
          {/* SECTION 8: HEALING JOURNEY TIMELINE (from VedaCinema - GREEN UPDATED) */}
          {/* ============================================ */}
          <section className="py-section-gap px-margin-edge overflow-hidden" style={{ backgroundColor: '#0e0e0d' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <span className="font-label-caps text-[#f0bf5c] text-xs mb-4 block">YOUR EVOLUTION</span>
                <h2 className="font-headline-lg text-[#e5e2df]">The Transformation Timeline</h2>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#f0bf5c]/10 hidden md:block"></div>
                <div className="absolute left-1/2 top-0 h-48 w-px bg-gradient-to-b from-[#f0bf5c] to-transparent hidden md:block"></div>
                <div className="space-y-32">
                  {[
                    { phase: 'PHASE I', title: 'Sacred Consultation', desc: 'A deep-dive analysis of your genetic Dosha, lifestyle pulse, and spiritual resonance.', align: 'right' },
                    { phase: 'PHASE II', title: 'Elemental Detox', desc: 'Clearing the physical and energetic channels through customized Panchakarma protocols.', align: 'left' },
                    { phase: 'PHASE III', title: 'Integration', desc: 'Anchoring your new state of balance into daily digital and physical existence.', align: 'right' },
                    { phase: 'PHASE IV', title: 'Transformation', desc: 'A permanent shift in baseline vitality, mental stillness, and conscious awareness.', align: 'left' }
                  ].map((step, i) => (
                    <div key={i} className={`relative flex flex-col ${step.align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}>
                      <div className={`md:w-1/2 ${step.align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="font-label-caps text-[#f0bf5c]/50 text-[10px]">{step.phase}</span>
                        <h3 className="font-headline-md text-2xl mt-2 mb-4">{step.title}</h3>
                        <p className="text-[#d2c5b1] max-w-sm" style={step.align === 'right' ? { marginLeft: 'auto' } : {}}>{step.desc}</p>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#f0bf5c] shadow-[0_0_15px_rgba(240,191,92,0.5)] z-10 relative">
                        <div className="absolute inset-[-8px] rounded-full border border-[#f0bf5c]/30 animate-pulse"></div>
                      </div>
                      <div className="md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 9: ABOUT THE HEALER (from VedaCinemaExtended) */}
          {/* ============================================ */}
          <section className="relative py-section-gap px-margin-edge" style={{ backgroundColor: '#131312' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#f0bf5c]/5 rounded-2xl blur-3xl group-hover:bg-[#f0bf5c]/10 transition-all duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden glass-panel divine-glow">
                  <img className="w-full h-[700px] object-cover  transition-all duration-1000 scale-105 group-hover:scale-100" alt="Portrait of wise Ayurvedic practitioner" src={venkat_anna} />
                </div>
              </div>
              <div className="space-y-8 pl-0 md:pl-12">
                <span className="font-label-caps text-[#f0bf5c]">Founder</span>
                <h2 className="font-headline-lg text-white leading-tight">Vaidya sri <br /><span className="italic text-[#ffe088]">Venkat Rao</span></h2>
                <p className="font-body-lg text-[#d2c5b1]">Renowned for his dedication to holistic healing, Vaidya sri Venkat Rao has helped patients facing chronic and long-standing health conditions through the combined power of Ayurveda, Nature Cure, and disciplined lifestyle transformation. His approach focuses on restoring balance at the root cause rather than merely suppressing symptoms.</p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <h4 className="font-label-caps text-[#f0bf5c] mb-2">EXPERTISE</h4>
                    <p className="text-[#d2c5b1] text-sm">Supporting recovery journeys for chronic and difficult health conditions through natural healing methods.</p>
                  </div>
                  <div>
                    <h4 className="font-label-caps text-[#f0bf5c] mb-2">VISION</h4>
                    <p className="text-[#d2c5b1] text-sm">Helping every individual achieve a healthier, balanced, and naturally empowered life through authentic Ayurvedic and Nature Cure practices.</p>
                  </div>
                </div>
                {/* <button className="flex items-center gap-4 text-white font-label-caps hover:text-[#f0bf5c] transition-colors">READ THE FULL BIOGRAPHY <span className="material-symbols-outlined">arrow_right_alt</span></button> */}
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 10: DISCIPLINE & DIET (from DisciplineDiet) */}
          {/* ============================================ */}
          <section className="py-section-gap" style={{ backgroundColor: '#0e0e0d' }}>
            <div className="max-w-container-max mx-auto px-margin-edge">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-square rounded-full border border-[#f0bf5c]/20 p-8 flex items-center justify-center">
                    <div className="absolute inset-0 border border-[#f0bf5c]/10 rounded-full animate-pulse"></div>
                    <img className="w-full h-full object-cover rounded-full" alt="Sacred Ayurvedic meal in circular formation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM-Rwse8tJBT_fBje1d8WASkExyc9syLT4JMylY6tofEiRi3DyA3OnDDpcfI4BrFbQi5mPLdS1ES0Hz6HC8ufsq9MPAp15Mnr_jMQxSmWqsQoJkCuQJU1_b1z1nrC2KJvDJeSGz0btjChX8UbUvmfZm3XsIfqOQmYjR6dF27TAGAGi4dCkNg-7GOhx3o5hf3EEluNirA2ficKQXXpkzagALufLSVlp9FkgScrw4rNaxKJKM0D_CQGwTrt_q55ODBBfVItkkcdTPVk" />
                    <div className="absolute -right-8 top-1/4 p-6 rounded-xl backdrop-blur-xl max-w-[200px]" style={{ backgroundColor: '#2a2a29', border: '1px solid #4e4637' }}>
                      <p className="font-label-caps text-[#f0bf5c] text-[10px] uppercase mb-2">Daily Ritual</p>
                      <p className="font-body-md text-sm text-[#e5e2df]">"Eat not for the tongue, but for the soul within."</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="font-label-caps text-[#b3ccbe] tracking-[0.3em] uppercase mb-4 block">Satvic Living</span>
                  <h2 className="font-headline-lg text-[#e5e2df] mb-8">Healing Through Discipline</h2>
                  <p className="font-body-lg text-[#d2c5b1] mb-12">True restoration requires the alignment of action. We provide a tailored dietary framework that transforms food into Prana, ensuring your physical vessel supports your spiritual expansion.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg" style={{ backgroundColor: '#20201e', border: '1px solid rgba(78,70,55,0.2)' }}>
                      <span className="material-symbols-outlined text-[#f0bf5c] mb-4">restaurant</span>
                      <h4 className="font-label-caps text-[#e5e2df] uppercase mb-2">Personalized Diet</h4>
                      <p className="text-xs text-[#d2c5b1]">Meal plans calibrated to your specific metabolic fire (Agni).</p>
                    </div>
                    <div className="p-6 rounded-lg" style={{ backgroundColor: '#20201e', border: '1px solid rgba(78,70,55,0.2)' }}>
                      <span className="material-symbols-outlined text-[#f0bf5c] mb-4">bedtime</span>
                      <h4 className="font-label-caps text-[#e5e2df] uppercase mb-2">Circadian Rhythm</h4>
                      <p className="text-xs text-[#d2c5b1]">Syncing your biology with the natural movement of the sun.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 11: TRANSFORMATION STORIES (from VedaCinemaExtended) */}
          {/* ============================================ */}
          <section className="py-section-gap px-margin-edge" style={{ backgroundColor: '#131312' }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div className="max-w-2xl">
                  <span className="font-label-caps text-[#f0bf5c] mb-4 block">ALCHEMY OF CHANGE</span>
                  <h2 className="font-headline-lg text-white">The Living Proof of <span className="italic">Vedantic Awakening</span></h2>
                </div>
                <Link className="font-label-caps text-[#f0bf5c] border-b border-[#f0bf5c]/30 pb-2"  to="/videos">VIEW ALL STORIES</Link>
               
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
  {
    quote: '"Boy recovered from Celebral palsy"',
    name: '',
    role: 'Cerebral palsy boy walking perfectly after 8 months',
    img: 'https://img.youtube.com/vi/VUmCFz8rd5s/hqdefault.jpg',
    mt: ''
  },
  {
    quote: '"If a man who has given up hope survives.."',
    name: '',
    role: 'Natural ways to manage stress using Ayurvedic herbs and techniques.',
    img: 'https://img.youtube.com/vi/KZ85s4EC0bw/hqdefault.jpg',
    mt: 'mt-12 lg:mt-0'
  },
  {
    quote: '"No one will believe that she is paralyzed..."',
    name: '',
    role: 'Step-by-step guide to self-massage with warm herbal oils.',
    img: 'https://img.youtube.com/vi/rZNu9Q6enjk/hqdefault.jpg',
    mt: ''
  }
].map((story, i) => (
                  <div key={i} className={`glass-panel p-glass-padding rounded-xl flex flex-col h-full hover:border-[#f0bf5c]/40 transition-all duration-500 group ${story.mt}`}>
                    <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                      <img className="w-full h-full object-cover transition-all duration-700" alt="Testimonial" src={story.img} />
                    </div>
                    <div className="flex-grow">
                      <p className="font-body-lg italic text-white mb-6 leading-relaxed">{story.quote}</p>
                      <h4 className="font-label-caps text-[#f0bf5c]">{story.name}</h4>
                      <p className="text-[10px] text-[#d2c5b1] uppercase tracking-widest mt-1">{story.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 12: IMMERSIVE TESTIMONIALS (from VedaCinemaExtended) */}
          {/* ============================================ */}
          <section className="py-section-gap overflow-hidden relative" style={{ backgroundColor: '#131312' }}>
            <div className="max-w-[1920px] mx-auto px-margin-edge text-center">
              <h2 className="font-display-hero text-white/5 uppercase tracking-[0.2em] mb-[-40px] select-none">ECHOES OF TRUTH</h2>
              <div className="relative py-24">
                <div className="max-w-4xl mx-auto glass-panel p-20 rounded-3xl divine-glow relative z-10 border-[#f0bf5c]/10">
                  <span className="material-symbols-outlined text-[#f0bf5c] text-5xl mb-12">format_quote</span>
                  <p className="font-headline text-white leading-relaxed italic mb-12">"The body is a sacred temple where the soul resides.
When we nourish this temple with pure food, healing medicine, and life energy,
and walk the path of spiritual practice,
the body flourishes with long life,
while the soul blossoms with peace, awareness, and divine joy."</p>
                  <div className="flex flex-col items-center">
                    <h4 className="font-label-caps text-[#f0bf5c] text-lg">Vaidya sri</h4>
                    <p className="text-[10px] text-[#d2c5b1] uppercase tracking-widest mt-2">Dadhe Venkat Rao </p>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-20 opacity-10 hidden xl:block">
                  <p className="font-display-hero text-8xl text-[#f0bf5c] italic">Restorative</p>
                </div>
                <div className="absolute bottom-1/4 -right-20 opacity-10 hidden xl:block">
                  <p className="font-display-hero text-8xl text-[#f0bf5c] italic">Transcendent</p>
                </div>
              </div>
            </div>
          </section>



<section className="py-section-gap relative overflow-hidden" style={{ backgroundColor: '#0e0e0d' }}>
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-[#f0bf5c]/5 blur-3xl"></div>
    <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#b3ccbe]/5 blur-3xl"></div>
  </div>

  <div className="relative max-w-container-max mx-auto px-margin-edge">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-full mb-6">
        <span className="material-symbols-outlined text-[#f0bf5c] text-lg">location_on</span>
        <span className="font-label-caps text-[#f0bf5c] tracking-wider">Get in Touch</span>
      </div>
      <h2 className="font-display-hero text-[#e5e2df] mb-4">Contact Us</h2>
      <p className="font-body-lg text-[#d2c5b1] max-w-3xl mx-auto">
        Begin your wellness journey with us. Reach out for consultations, inquiries, or any assistance.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left Column - Contact Info Cards */}
      <div className="lg:col-span-1 space-y-6">
        {/* Address Card */}
        <div className="glass-card rounded-2xl p-6 hover:border-[#f0bf5c]/40 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#f0bf5c]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#f0bf5c] text-2xl">location_on</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-xl text-[#e5e2df] mb-2">Our Location</h3>
              <div className="space-y-1 text-[#d2c5b1] mb-3 font-body-md">
                <p>C683+FW6</p>
                <p>Pilligundla</p>
                <p>Telangana 501203</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Dr.Dadhe's+Ayur+and+Nature+Cure,+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f0bf5c] hover:text-[#ffdea4] font-label-caps text-xs group"
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="glass-card rounded-2xl p-6 hover:border-[#f0bf5c]/40 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#b3ccbe]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#b3ccbe] text-2xl">call</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-xl text-[#e5e2df] mb-2">Contact Info</h3>
              <div className="space-y-2">
                <a href="tel:9966426060" className="flex items-center gap-2 text-[#d2c5b1] hover:text-[#f0bf5c] transition-colors">
                  <span className="material-symbols-outlined text-sm">phone</span>
                  <span className="text-sm font-body-md">9966426060, 9666857070</span>
                </a>
                <a href="mailto:drdadhesayurandnaturecure369@gmail.com" className="flex items-center gap-2 text-[#d2c5b1] hover:text-[#f0bf5c] transition-colors">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span className="text-xs font-body-md break-all">drdadhesayurandnaturecure369@gmail.com</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="glass-card rounded-2xl p-6 hover:border-[#f0bf5c]/40 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#f0bf5c]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#f0bf5c] text-2xl">share</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-xl text-[#e5e2df] mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://wa.me/919966426060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#b3ccbe]/10 text-[#b3ccbe] rounded-lg hover:bg-[#b3ccbe]/20 transition-colors"
                >
                  <img src={whatsappLogo} className="h-4 w-4" alt="" />
                  <span className="text-sm font-medium font-label-caps">WhatsApp</span>
                </a>
                <a 
                  href="https://www.facebook.com/people/Drdadhes/61582009475970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#f0bf5c]/10 text-[#f0bf5c] rounded-lg hover:bg-[#f0bf5c]/20 transition-colors"
                >
                  <img src={facebookLogo} className="h-4" alt="" />
                  <span className="text-sm font-medium font-label-caps">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/drdadhes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#ffb786]/10 text-[#ffb786] rounded-lg hover:bg-[#ffb786]/20 transition-colors"
                >
                  <img src={instaLogo} className="h-4 w-4" alt="" />
                  <span className="text-sm font-medium font-label-caps">Instagram</span>
                </a>
                <a 
                  href="https://youtube.com/@DR.DADHESAYURPAARAMPARYA-wz4bv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  <img src={youtubeLogo} className="h-4 w-4" alt="" />
                  <span className="text-sm font-medium font-label-caps">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Card */}
        <div className="glass-card rounded-2xl p-6 hover:border-[#f0bf5c]/40 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#f0bf5c]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#f0bf5c] text-2xl">schedule</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-xl text-[#e5e2df] mb-2">Opening Hours</h3>
              <div className="space-y-2 text-[#d2c5b1] font-body-md">
                <p className="text-sm">Wednesday - Monday : 8:00 AM - 2:00 PM</p>
                <p className="text-xs text-[#f0bf5c] mt-2">Tuesday is Holiday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Map and QR */}
      <div className="lg:col-span-2 space-y-6">
        {/* Map */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-headline-md text-xl text-[#e5e2df] mb-4">Find Us Here</h3>
          <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[450px] border border-[#4e4637]">
            <iframe
              src="https://www.google.com/maps?q=Dr.Dadhe's+Ayur+and+Nature+Cure,+Telangana&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayurvedic Clinic Location"
            ></iframe>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-shrink-0">
              <img src={qrCode} className="w-32 h-32 md:w-36 md:h-36 rounded-xl shadow-sm bg-white p-2" alt="Location QR Code" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-headline-md text-xl text-[#e5e2df] mb-2">Scan to Get Directions</h4>
              <p className="text-[#d2c5b1] font-body-md mb-3">
                Scan this QR code with your phone camera to open Google Maps and get instant directions to our clinic.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section - Added Below QR */}
        <div className="glass-card rounded-2xl p-6 hover:border-[#f0bf5c]/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#f0bf5c]/10 rounded-full">
                <span className="material-symbols-outlined text-[#f0bf5c] text-3xl">share</span>
              </div>
              <div>
                <h4 className="font-headline-md text-xl text-[#e5e2df] mb-1">Share This Page</h4>
                <p className="text-[#d2c5b1] font-body-md text-sm">
                  Share our clinic info with friends & family
                </p>
              </div>
            </div>
            <button 
              onClick={handleShare}
              className="px-6 py-3 bg-gradient-to-r from-[#f0bf5c] to-[#d4a44a] text-[#0e0e0d] rounded-xl font-label-caps font-semibold hover:shadow-lg hover:shadow-[#f0bf5c]/20 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">ios_share</span>
              <span>Share Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Share Modal */}
  {showShareModal && (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={() => setShowShareModal(false)}
      />
      
      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 transition-all duration-300 animate-slide-up">
        <div className="bg-[#1a1a18] rounded-t-2xl md:rounded-2xl shadow-2xl border border-[#f0bf5c]/20 max-w-md mx-auto md:mx-0">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#4e4637]">
            <h3 className="font-headline-md text-xl text-[#e5e2df]">Share via</h3>
            <button 
              onClick={() => setShowShareModal(false)}
              className="p-1 hover:bg-[#4e4637]/50 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[#d2c5b1]">close</span>
            </button>
          </div>
          
          {/* Share Options */}
          <div className="p-5">
            <div className="grid grid-cols-3 gap-4">
              {/* WhatsApp */}
              <button
                onClick={() => shareToSocial('whatsapp')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={whatsappLogo} className="h-6 w-6" alt="WhatsApp" />
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">WhatsApp</span>
              </button>
              
              {/* Facebook */}
              <button
                onClick={() => shareToSocial('facebook')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#1877F2]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={facebookLogo} className="h-6 w-6" alt="Facebook" />
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">Facebook</span>
              </button>
              
              {/* Instagram */}
              <button
                onClick={() => shareToSocial('instagram')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={instaLogo} className="h-6 w-6" alt="Instagram" />
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">Instagram</span>
              </button>
              
              {/* Twitter/X */}
              <button
                onClick={() => shareToSocial('twitter')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#1DA1F2] text-2xl">alternate_email</span>
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">Twitter</span>
              </button>
              
              {/* Email */}
              <button
                onClick={() => shareToSocial('email')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#EA4335]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#EA4335] text-2xl">mail</span>
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">Email</span>
              </button>
              
              {/* Copy Link */}
              <button
                onClick={copyToClipboard}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#4e4637]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#f0bf5c]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#f0bf5c] text-2xl">link</span>
                </div>
                <span className="text-xs font-label-caps text-[#d2c5b1]">Copy Link</span>
              </button>
            </div>
          </div>
          
          {/* Cancel button for mobile */}
          <div className="p-4 border-t border-[#4e4637] md:hidden">
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full py-3 bg-[#4e4637]/30 text-[#d2c5b1] rounded-xl font-label-caps"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )}

</section>

        </main>
      </div>
    </>
  );
};

export default VedaCinemaComplete;