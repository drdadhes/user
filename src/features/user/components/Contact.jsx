// import React, { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, ChevronRight, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
// import enTranslations from "../../../locales/en.json";
// import teTranslations from "../../../locales/te.json";

// const Contact = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     consent: false
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const currentLang = localStorage.getItem('language') || 'en';
//   const t = currentLang === "te" ? teTranslations.contact : enTranslations.contact;

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormState(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitStatus('success');
//       setFormState({ name: '', email: '', phone: '', message: '', consent: false });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const getDirectionsUrl = "https://maps.google.com/?q=Dadhe's+Ayurvedic+Clinic+Hyderabad";
//   const whatsappUrl = "https://wa.me/919876543210?text=Hello, I'm interested in Ayurvedic consultation";
//   const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2972!2d78.4867!3d17.4488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c3a2b3b3b3b%3A0x3b3b3b3b3b3b3b!2sDadhe's%20Ayurvedic%20Clinic!5e0!3m2!1sen!2sin!4v1234567890";

//   return (
//     <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-gradient-to-tr from-slate-100/30 to-emerald-100/20 blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
//             <MapPin className="h-5 w-5 text-emerald-600" />
//             <span className="text-emerald-800 text-sm font-medium tracking-wider">
//               {t.badge}
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
//             {t.title}
//           </h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             {t.subtitle}
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Column - Contact Info Cards */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Address Card */}
//             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-emerald-50 rounded-lg">
//                   <MapPin className="h-6 w-6 text-emerald-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.infoCards.address.title}</h3>
//                   <div className="space-y-1 text-slate-600 mb-3">
//                     <p>{t.infoCards.address.line1}</p>
//                     <p>{t.infoCards.address.line2}</p>
//                     <p>{t.infoCards.address.line3}</p>
//                   </div>
//                   <a 
//                     href={getDirectionsUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium text-sm group"
//                   >
//                     <span>{t.infoCards.address.cta}</span>
//                     <Navigation className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Card */}
//             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-teal-50 rounded-lg">
//                   <Phone className="h-6 w-6 text-teal-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.infoCards.contact.title}</h3>
//                   <div className="space-y-2">
//                     <a href={`tel:${t.infoCards.contact.phone}`} className="flex items-center space-x-2 text-slate-600 hover:text-emerald-700 transition-colors">
//                       <Phone className="h-4 w-4" />
//                       <span className="text-sm">{t.infoCards.contact.phone}</span>
//                     </a>
//                     <a href={`mailto:${t.infoCards.contact.email}`} className="flex items-center space-x-2 text-slate-600 hover:text-emerald-700 transition-colors">
//                       <Mail className="h-4 w-4" />
//                       <span className="text-sm">{t.infoCards.contact.email}</span>
//                     </a>
//                     <a 
//                       href={whatsappUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center space-x-2 mt-3 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm"
//                     >
//                       <MessageCircle className="h-4 w-4" />
//                       <span>{t.infoCards.contact.whatsapp}</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Hours Card */}
//             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-amber-50 rounded-lg">
//                   <Clock className="h-6 w-6 text-amber-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.infoCards.hours.title}</h3>
//                   <div className="space-y-2 text-slate-600">
//                     <p className="text-sm">{t.infoCards.hours.weekdays}</p>
//                     <p className="text-sm">{t.infoCards.hours.saturday}</p>
//                     <p className="text-sm">{t.infoCards.hours.sunday}</p>
//                     <p className="text-xs text-emerald-600 mt-2">{t.infoCards.hours.holiday}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Map and Form */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Map */}
//             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
//               <h3 className="text-lg font-semibold text-slate-800 mb-4">{t.map.title}</h3>
//               <div className="relative rounded-xl overflow-hidden h-[300px] lg:h-[350px] border border-slate-200">
//                 <iframe
//                   src={mapEmbedUrl}
//                   className="absolute inset-0 w-full h-full"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Ayurvedic Clinic Location"
//                 ></iframe>
//               </div>
//             </div>

//             {/* Contact Form */}
//             {/* <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
//               <h3 className="text-lg font-semibold text-slate-800 mb-6">{t.form.title}</h3>
              
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formState.name}
//                       onChange={handleInputChange}
//                       placeholder={t.form.namePlaceholder}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white/50 placeholder:text-slate-400 text-slate-700"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formState.email}
//                       onChange={handleInputChange}
//                       placeholder={t.form.emailPlaceholder}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white/50 placeholder:text-slate-400 text-slate-700"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formState.phone}
//                     onChange={handleInputChange}
//                     placeholder={t.form.phonePlaceholder}
//                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white/50 placeholder:text-slate-400 text-slate-700"
//                   />
//                 </div>
                
//                 <div>
//                   <textarea
//                     name="message"
//                     value={formState.message}
//                     onChange={handleInputChange}
//                     placeholder={t.form.messagePlaceholder}
//                     rows="4"
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white/50 placeholder:text-slate-400 text-slate-700 resize-none"
//                   ></textarea>
//                 </div>

//                 <div className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     name="consent"
//                     id="consent"
//                     checked={formState.consent}
//                     onChange={handleInputChange}
//                     required
//                     className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
//                   />
//                   <label htmlFor="consent" className="text-sm text-slate-600">
//                     {t.form.consentText}
//                   </label>
//                 </div>

//                 {submitStatus === 'success' && (
//                   <div className="flex items-center space-x-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700">
//                     <CheckCircle className="h-5 w-5 flex-shrink-0" />
//                     <span className="text-sm">{t.form.successMessage}</span>
//                   </div>
//                 )}

//                 {submitStatus === 'error' && (
//                   <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
//                     <AlertCircle className="h-5 w-5 flex-shrink-0" />
//                     <span className="text-sm">{t.form.errorMessage}</span>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting || !formState.consent}
//                   className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
//                 >
//                   <span>{isSubmitting ? t.form.submittingButton : t.form.submitButton}</span>
//                   {!isSubmitting && <Send className="h-4 w-4" />}
//                 </button>
//               </form>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, ChevronRight, ExternalLink, MessageCircle, Navigation, Share2, Facebook, Instagram, Youtube } from 'lucide-react';
import insta_logo from "../../../assets/insta_logo.png"
import youtube_logo from "../../../assets/youtube_logo.png"
import facebook_logo from "../../../assets/facebook_logo.png"
import whatsapp_logo from "../../../assets/whatsapp_logo.png"
import qr from "../../../assets/qr.png"

const Contact = () => {
  const { t } = useLanguage();
  
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
    
    // Simulate API call
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

  const getDirectionsUrl = "https://maps.google.com/?q=Dadhe's+Ayurvedic+Clinic+Hyderabad";
  const whatsappUrl = "https://wa.me/919966426060?text=Hello, I'm interested in Ayurvedic consultation";
  const mapEmbedUrl = "https://www.google.com/maps?q=Dr.Dadhe's+Ayur+and+Nature+Cure,+Telangana&output=embed";

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-gradient-to-tr from-slate-100/30 to-emerald-100/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium tracking-wider">
              {t?.contact?.badge || "Get in Touch"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t?.contact?.title || "Contact Us"}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t?.contact?.subtitle || "Begin your wellness journey with us. Reach out for consultations, inquiries, or any assistance."}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t?.contact?.infoCards?.address?.title || "Our Location"}</h3>
                  <div className="space-y-1 text-slate-600 mb-3">
                    <p>{t?.contact?.infoCards?.address?.line1 || "123 Ayurveda Marg"}</p>
                    <p>{t?.contact?.infoCards?.address?.line2 || "Banjara Hills"}</p>
                    <p>{t?.contact?.infoCards?.address?.line3 || "Hyderabad - 500034"}</p>
                  </div>
                  <a 
                    href={getDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium text-sm group"
                  >
                    <span>{t?.contact?.infoCards?.address?.cta || "Get Directions"}</span>
                    <Navigation className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 rounded-lg">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t?.contact?.infoCards?.contact?.title || "Contact Info"}</h3>
                  <div className="space-y-2">
                    <a href={`tel:${t?.contact?.infoCards?.contact?.phone || "9966426060"}`} className="flex items-center space-x-2 text-slate-600 hover:text-emerald-700 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{t?.contact?.infoCards?.contact?.phone || "9966426060, 9666857070"}</span>
                    </a>
                    <a href={`mailto:${t?.contact?.infoCards?.contact?.email || "drdadhesayurandnaturecure369@gmail.com"}`} className="flex items-center space-x-2 text-slate-600 hover:text-emerald-700 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span className="text-wrap text-xs">{t?.contact?.infoCards?.contact?.email || "drdadhesayurandnaturecure369@gmail.com"}</span>
                    </a>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 mt-3 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t?.contact?.infoCards?.contact?.whatsapp || "Chat on WhatsApp"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
{/* Social Media Card - Add this after the Hours card */}
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
  <div className="flex items-start space-x-4">
    <div className="p-3 bg-purple-50 rounded-lg">
      <Share2 className="h-6 w-6 text-purple-600" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">{t?.contact?.infoCards?.socialMedia?.title || "Connect With Us"}</h3>
      <div className="grid grid-cols-2 gap-3">
        <a 
          href="https://wa.me/9666857070"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
        >
          {/* <MessageCircle className="h-4 w-4" /> */}
                    <img src={whatsapp_logo} className="h-4 w-4"  alt="" />
          <span className="text-sm font-medium">{t?.contact?.infoCards?.socialMedia?.whatsapp || "WhatsApp"}</span>
        </a>
        <a 
          href="https://www.facebook.com/people/Drdadhes/61582009475970"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
        >
          {/* <Facebook className="h-4 w-4" /> */}
                    <img src={facebook_logo} className="h-4 "  alt="" />

          <span className="text-sm font-medium">{t?.contact?.infoCards?.socialMedia?.facebook || "Facebook"}</span>
        </a>
        <a 
          href="https://www.instagram.com/drdadhes/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-2 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition-colors"
        >
          {/* <Instagram className="h-4 w-4" /> */}
          <img src={insta_logo} className="h-4 w-4"  alt="" />
          <span className="text-sm font-medium">{t?.contact?.infoCards?.socialMedia?.instagram || "Instagram"}</span>
        </a>
        <a 
          href="https://youtube.com/@DR.DADHESAYURPAARAMPARYA-wz4bv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
        >
          {/* <Youtube className="h-4 w-4" /> */}
                    <img src={youtube_logo} className="h-4 w-4"  alt="" />
          <span className="text-sm font-medium">{t?.contact?.infoCards?.socialMedia?.youtube || "YouTube"}</span>
        </a>
      </div>
    </div>
  </div>
</div>



            {/* Hours Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t?.contact?.infoCards?.hours?.title || "Opening Hours"}</h3>
                  <div className="space-y-2 text-slate-600">
                    <p className="text-sm">{t?.contact?.infoCards?.hours?.weekdays || "Monday - Sunday: 8:00 AM - 2:00 PM"}</p>
                    {/* <p className="text-sm">{t?.contact?.infoCards?.hours?.saturday || "Saturday: 10:00 AM - 5:00 PM"}</p> */}
                    <p className="text-sm">{t?.contact?.infoCards?.hours?.sunday || "Tuesday: Closed"}</p>
                    <p className="text-xs text-emerald-600 mt-2">{t?.contact?.infoCards?.hours?.holiday || "Emergency consultations available by appointment"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Form */}
          {/* <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{t?.contact?.map?.title || "Find Us Here"}</h3>
              <div className="relative rounded-xl overflow-hidden h-[450px] lg:h-[500px] border border-slate-200">
                <iframe
                  src={mapEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ayurvedic Clinic Location"
                ></iframe>
              </div>
            </div>


            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6  flex items-center justify-between">

              <img src={qr} className='w-36 h-36'/>
              <div>
                text
              </div>
            </div>

          </div> */}


          <div className="lg:col-span-2 space-y-6">
  {/* Map */}
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">{t?.contact?.map?.title || "Find Us Here"}</h3>
    <div className="relative rounded-xl overflow-hidden h-[450px] lg:h-[500px] border border-slate-200">
      <iframe
        src={mapEmbedUrl}
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ayurvedic Clinic Location"
      ></iframe>
    </div>
  </div>

  {/* QR Code Section for Directions */}
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* QR Code */}
      <div className="flex-shrink-0">
        <img src={qr} className='w-32 h-32 md:w-36 md:h-36 rounded-xl shadow-sm' alt="Location QR Code" />
      </div>
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-xl font-semibold text-slate-800 mb-2">
          {t?.contact?.qr?.title  || "Scan to Get Directions"}
        </h4>
        <p className="text-slate-600 mb-3">
          {t?.contact?.qr?.description || "Scan this QR code with your phone camera to open Google Maps and get instant directions to our clinic."}
        </p>
        
      </div>
      
  
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;