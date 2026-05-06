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






  return (
    <>
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
          <section className="min-h-screen pt-40 px-margin-edge max-w-container-max mx-auto relative">
            <div className="text-center mb-24">
              <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] uppercase block mb-4">Illuminated Tracks</span>
              <h2 className="font-display-hero text-[#e5e2df] mb-6">Sacred Pathways</h2>
              <p className="font-body-lg text-[#d2c5b1] max-w-2xl mx-auto italic">Align your inner vibration with cosmic rhythms through our curated healing sequences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pathway Card 1 - Panchakarma */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Traditional Ayurvedic copper vessels on dark stone with incense smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6dLhhIXTfZHMRVO1VQN09y3uxOJDRnJ4mQg1o4nqCT96VO6LJOeAKKLObWnm5xQFh7r1mC6Aqe5apnyjIQhmORfIrLty5J2rwgTkErOcjj5Acl8iwhY91CGzK-vVfrwpA-EJx7ruYKaLUG8Ada01kUBVNvOZv4Sv2SdZlK-r8JX_M_Zq5XLHDC2hwtgXWQzbRCeaGHPXbyygpESjJkvQ4W9x_w4ILt1y8RxCkknvCRN_er1s_s32Df7KyPkCKCFhrunVxuxfrQ5A" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 01</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Panchakarma</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">The ultimate five-fold detoxification journey to restore cellular intelligence and vitality.</p>
                  <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              {/* Pathway Card 2 - Deep Detox */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Dark clay pot with clear water and floating lotus blossoms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKatAH7gYrczUUe1HPQWFrJE5jpNwCh8py9pTg97MaT3txSbvm58AqRI9LJTCHsK-WKsvHWSAQxoWc4h84D3kKxh_FMvYZ7nyBBzhxGqwYXvV9W2ltJrlSm92wU7_im9Xhwkaj9bPLHvlbXbWeH3zuTV-mJZNLxBoRopeNlhNrtNKbbEc2kDAHnzbP_d9lgPOl7ZINim7Js6UXnKFh8AcIlh69dXeRBq2mrEQ6s_TJLj3Bu9TiykMgp2nfSpGXNjblBRB4mZzk9o0" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 02</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Deep Detox</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">A targeted cleansing of the digestive fire, purifying the physical vessel from modern toxins.</p>
                  <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              {/* Pathway Card 3 - Rejuvenation */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Mystical forest at dawn with person meditating in sun rays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJOxG7mMMtgQ5rnd21LWTv3NQgSvbiAOe69jo-tq2JrVbvYsISuZGiuZfNVik93liaX_g8b8v4fMhR01SoCg9R7EIuhr1umzJefjYd1zK7csQVqi1yinAJgvaa2p17lW_9lrWQcNCY7iMGijLNKxOIm-ZLdAyN5FpetHPYVK9IhTnNCFbpkdHpYo7TFYZOaFRyLZd6od53clcJvFHuMcKgFrcOtVW1GNJHdzGtUFc6ad_-iUM8izVXkT9aU_aBB_LQoz_Xg8suzE" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 03</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Rejuvenation</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">A transformative Rasayana experience designed to halt aging and ignite youthful essence.</p>
                  <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              {/* Pathway Card 4 - Sattva Balance */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Golden oil poured into bowl in luxury spa setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQhw1TVzqKfaCsTgvShiKO79luoj1vL9bVz6dNHG2qgzEy_uDjr3o3uYBE-MdKjl3gpHkehGvLpRQpLql3d1p6SrbGiXFJqKpQ43bB-Vvfd1yJ3K_3vFNxxFRk5WNgSpSgdEjC306i7z_bw-qkgKeeznAKVW6uCUyI2510Oa5V0bAV8wLKV4oths84c05EDs9w7O8MOsbVhIl6CCAKZ5ghmwFXNJvce7UWM-YoNbZz6KVg6BWBsrAYt25EGHsFaZWcv7J-L-esBqU" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 04</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Sattva Balance</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">Mental clarity through meditative soundscapes and herbal neuro-alignment protocols.</p>
                  <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              {/* Pathway Card 5 - Metabolic Fire */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Green Ayurvedic herbs on dark emerald surface with smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqRZHi4hGhdIuVJ8G_T9Aw8eqlqnvGQPSOvUUkkea2rNdzJkZp-7mgUe8Tn9ZtvI394sBdJ_qCsB841DqfTse81vyv_CdxiO_4Iy3x8QuGInf2c1puntL0C1aNlcOLHETOcssusJtdHsSXnuAAb4GNeXttO4tURqKKTncma9hXtyqXt_KnAEqAL47xg_VS5VmXSd_PdBo5Xl-Co0BwKG0ci5QH_PawGcCcIuGszBO9gnUdRRc2htWQxYCB8CVsb3dPaaV7N2q9y2U" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 05</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Metabolic Fire</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">Reigniting the Agni within to optimize weight, energy, and radiant digestive power.</p>
                  <div className="w-12 h-[2px] bg-[#f0bf5c] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>

              {/* Pathway Card 6 - Ojas Vitality */}
              <div className="group relative bg-[#374e43]/10 backdrop-blur-3xl border border-[#f0bf5c]/20 rounded-xl overflow-hidden hover:border-[#f0bf5c]/60 transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:saturate-150
group-hover:contrast-125">
                  <img className="w-full h-full object-cover" alt="Temple courtyard illuminated by oil lamps at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF1vOSSdDehJad7HcZfENeE9PGW25f7O5J7hQVmgyM8_OE280fdI9IBg4FBRvX2S-ZtZ0C8OmJ_8IJYI1vLoBgZrd5dFJwGj_YqbwZ5rH8Xf2hT3PxNd4D4xF8VWJazfpW_c3DuX3Hc4GIJHF8HGrq0tH_TdenooUWTZwoK7WSML-p6WxxSKNCHZ2-eroDuhQWIhISJh_UaKst-EhLEGgH0PrzIs6Gk72dEg6aai31yZwfzDHM_bJi5jFZseBPXaTqJXC28LaPhPU" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <div className="font-label-caps text-[#f0bf5c] mb-2">Immersion 06</div>
                  <h3 className="font-headline-md text-[#e5e2df] mb-4">Ojas Vitality</h3>
                  <p className="font-body-md text-[#d2c5b1]/80 mb-6 group-hover:text-[#e5e2df] transition-colors">Cultivating the pure essence of immunity and bliss through sacred nectar therapies.</p>
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
              <div className="max-w-xl">
                <span className="font-label-caps text-[#f0bf5c] tracking-[0.4em] mb-4 block uppercase">Master Therapies</span>
                <h2 className="font-headline-lg text-[#e5e2df] leading-none">The Luxury of <br />Ancient Science</h2>
              </div>
              <div className="flex gap-4">
                <button className="w-14 h-14 rounded-full border border-[#f0bf5c]/20 flex items-center justify-center text-[#f0bf5c] hover:bg-[#f0bf5c] hover:text-[#412d00] transition-all">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="w-14 h-14 rounded-full border border-[#f0bf5c]/20 flex items-center justify-center text-[#f0bf5c] hover:bg-[#f0bf5c] hover:text-[#412d00] transition-all">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Shirodhara - Large Card */}
              <div className="col-span-12 lg:col-span-8 group relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Shirodhara treatment with warm oil flowing onto forehead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYORkDmvou627LtBg9mm2ic18G3TPrIzQ8UhsnEVvsqiUZ1r4CgzZnTEE_y1GbRk8cGZBAvKfQA4QloY4cnSU4IgfqpNKYl5MJecstkp7eafxfjtZiKvNfM7-xPtkhRqg81sFcWsPG02_MZPNsZzh0MMUISnk_VzvqBz2u2qMXx-B-0T0UltVrPrU405QHLWMxAZlku3ew9tMCzlpKDeydWQfJbzhg_uapsZsEOPVf1wTGYFBnRjTWRvKu1E413m17ynwx-ETkNGk" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                  <div className="max-w-md">
                    <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">The Crown Ritual</span>
                    <h3 className="font-display-hero text-5xl text-[#e5e2df] mb-4">Shirodhara</h3>
                    <p className="font-body-md text-[#d2c5b1]">A continuous flow of warm herbal oil onto the third eye, melting mental stress and inducing a deep state of Turiya—pure consciousness.</p>
                  </div>
                  <div className="bg-[#c89b3c]/20 backdrop-blur-md border border-[#f0bf5c]/30 p-6 rounded-lg">
                    <div className="font-label-caps text-[#f0bf5c] mb-1">Duration</div>
                    <div className="text-[#e5e2df] font-headline-md text-2xl">90 Mins</div>
                  </div>
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
                <img className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Herbal soaking tub in luxury sanctuary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnYccinjUNl6JHmKlL3GsVslqGD9b0B7yKt08k6-vW3BCpUT9AlbGLWQ4q9fR9d1tXMURQqoEEiT6GyBOlxTI-8hGVXvSG-0jZlBuJihM479_WyuDL2l5EQE4-39QgLs7_xGRWRjAiSoh5i0pomKShCHTL5dsDb2LYhhgz563_JvbKvkDJYSXupr1-sXCqC2ndM1ke2moiIAsbjQF2e0AHkYblvAUwdkgCVfhsTcwPjV5zpACIa-xPYLyBI95REjJdiKkz5EwyufU" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#131312] via-[#131312]/20 to-transparent"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-lg">
                  <span className="font-noto-serif italic text-[#f0bf5c] text-xl mb-2 block">Herbal Hydrotherapy</span>
                  <h3 className="font-headline-lg text-[#e5e2df] mb-4">Snana</h3>
                  <p className="font-body-md text-[#d2c5b1] mb-6">A ritualistic immersion in medicated waters infused with rare Himalayan herbs to seal the healing process.</p>
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
          {/* SECTION 6: CONDITIONS WE HEAL (from VedaCinemaMain) */}
          {/* ============================================ */}
          <section className="py-section-gap overflow-hidden relative" style={{ backgroundColor: '#2a2a29' }}>
            <div className="absolute -left-[20%] top-[10%] w-[60%] h-[80%] rounded-full" style={{ backgroundColor: 'rgba(240,191,92,0.05)', filter: 'blur(120px)' }}></div>
            <div className="max-w-container-max mx-auto px-margin-edge relative z-10">
              <div className="grid md:grid-cols-2 gap-24 items-end mb-20">
                <div>
                  <h2 className="font-headline-lg text-[#e5e2df] mb-6">We heal where others lose hope.</h2>
                  <p className="font-body-lg text-[#d2c5b1] opacity-80">For chronic conditions that modern medicine labels "permanent," we offer a path toward restoration through the science of life.</p>
                </div>
                <div className="hidden md:block">
                  <div className="h-1 w-full relative" style={{ backgroundColor: '#4e4637' }}>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-1 divine-glow" style={{ backgroundColor: '#f0bf5c' }}>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: '#ffffff', boxShadow: '0 0 15px #fff' }}></div>
                    </div>
                  </div>
                  <div className="font-label-caps text-[10px] mt-4 tracking-[4px] opacity-40 text-[#d2c5b1]">PROGRESSION OF ATMAN</div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {['NEUROLOGICAL', 'SYSTEMIC', 'COGNITIVE'].map((category, idx) => {
                  const titles = ['Paralysis', 'Chronic Pain', 'Brain Health'];
                  const descs = [
                    "Rewiring the body's energetic pathways and physical nerve conduction through specialized Marma point therapy and oil infusions.",
                    "Addressing the inflammatory root of chronic syndromes with targeted detoxification and botanical anti-inflammatory protocols.",
                    "Restoring neuro-plasticity and chemical balance through Shirodhara and Medhya Rasayana—ancient brain tonics."
                  ];
                  return (
                    <div key={idx} className="pl-8 py-4 transition-all duration-500 group" style={{ borderLeft: '2px solid rgba(240,191,92,0.2)' }}
                      onMouseEnter={e => e.currentTarget.style.borderLeftColor = '#f0bf5c'}
                      onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'rgba(240,191,92,0.2)'}>
                      <h4 className="font-label-caps text-[#f0bf5c] mb-2 group-hover:tracking-widest transition-all">{category}</h4>
                      <h3 className="font-headline-md text-[#e5e2df] mb-4">{titles[idx]}</h3>
                      <p className="font-body-md text-[#d2c5b1] opacity-70">{descs[idx]}</p>
                    </div>
                  );
                })}
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
                {/* <a className="font-label-caps text-[#f0bf5c] border-b border-[#f0bf5c]/30 pb-2
                " href="#">VIEW ALL STORIES</a> */}
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
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Testimonial" src={story.img} />
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
                  <p className="font-headline-lg text-white leading-relaxed italic mb-12">"The soul is the same in all living creatures, although the body of each is different."</p>
                  <div className="flex flex-col items-center">
                    <h4 className="font-label-caps text-[#f0bf5c] text-lg">MARCUS T. STERLING</h4>
                    <p className="text-[10px] text-[#d2c5b1] uppercase tracking-widest mt-2">Philanthropist &amp; Visionary</p>
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



{/* ============================================ */}
{/* SECTION 14: FOOTER / CONTACT (Redesigned to match dark theme) */}
{/* ============================================ */}
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
                <a 
                  href="https://wa.me/919966426060?text=Hello, I'm interested in Ayurvedic consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#b3ccbe]/10 text-[#b3ccbe] rounded-lg hover:bg-[#b3ccbe]/20 transition-colors text-sm font-label-caps"
                >
                  <img src={whatsappLogo} className="h-4 w-4" alt="" />
                  <span>Chat on WhatsApp</span>
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
                  href="https://wa.me/9666857070"
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
                <p className="text-sm">Monday - Sunday: 8:00 AM - 2:00 PM</p>
                <p className="text-sm">Tuesday: Closed</p>
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
          <div className="relative rounded-xl overflow-hidden h-[450px] lg:h-[500px] border border-[#4e4637]">
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
      </div>
    </div>
  </div>
</section>

        </main>
      </div>
    </>
  );
};

export default VedaCinemaComplete;