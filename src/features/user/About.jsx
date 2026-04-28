import React from 'react';
import { Leaf, Sparkles, Heart, Brain, Flower2, Shield, Users, Award, Clock, ChevronRight, Quote, Sun, Moon, Droplet, Wind, Star, Calendar, BookOpen, GraduationCap, Smile, Activity } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium tracking-wider">
              {t?.about?.hero?.badge || "Who We Are"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900">
            {t?.about?.hero?.title || "Dadhe's Ayurvedic"}
            <span className="block text-emerald-700 mt-2">{t?.about?.hero?.titleHighlight || "Ancient Wisdom for Modern Wellness"}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t?.about?.hero?.description || "For over 5 generations, we've been preserving and practicing authentic Ayurvedic healing, helping thousands rediscover their natural balance and vitality."}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="inline-flex p-3 bg-emerald-50 rounded-full mb-4">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-slate-800">{t?.about?.stats?.years?.value || "5000+"}</div>
            <div className="text-sm text-slate-500 mt-1">{t?.about?.stats?.years?.label || "Years of Wisdom"}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="inline-flex p-3 bg-teal-50 rounded-full mb-4">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <div className="text-3xl font-bold text-slate-800">{t?.about?.stats?.patients?.value || "50,000+"}</div>
            <div className="text-sm text-slate-500 mt-1">{t?.about?.stats?.patients?.label || "Happy Patients"}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="inline-flex p-3 bg-amber-50 rounded-full mb-4">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-slate-800">{t?.about?.stats?.experience?.value || "25+"}</div>
            <div className="text-sm text-slate-500 mt-1">{t?.about?.stats?.experience?.label || "Years Experience"}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="inline-flex p-3 bg-purple-50 rounded-full mb-4">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-slate-800">{t?.about?.stats?.treatments?.value || "30+"}</div>
            <div className="text-sm text-slate-500 mt-1">{t?.about?.stats?.treatments?.label || "Treatments"}</div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-medium">{t?.about?.philosophy?.badge || "Our Philosophy"}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-800">{t?.about?.philosophy?.title || "Healing Body, Mind & Spirit"}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t?.about?.philosophy?.description || "Ayurveda isn't just a treatment—it's a way of life. We believe in treating the root cause, not just symptoms, by restoring the natural balance of your doshas (Vata, Pitta, Kapha)."}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Droplet className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">{t?.about?.philosophy?.principles?.vata || "Vata - Movement & Energy"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sun className="h-5 w-5 text-amber-600" />
                <span className="text-slate-700">{t?.about?.philosophy?.principles?.pitta || "Pitta - Metabolism & Transformation"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Moon className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700">{t?.about?.philosophy?.principles?.kapha || "Kapha - Structure & Stability"}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 border border-emerald-200">
              <Quote className="h-12 w-12 text-emerald-600 opacity-50 mb-4" />
              <p className="text-lg italic text-slate-700 leading-relaxed">
                "{t?.about?.philosophy?.quote || "The greatest medicine of all is to teach people how not to need it."}"
              </p>
              <p className="text-emerald-700 font-medium mt-4">- {t?.about?.philosophy?.quoteAuthor || "Charaka Samhita"}</p>
            </div>
          </div>
        </div>



        {/* Values Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-emerald-100 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-800">{t?.about?.values?.title || "Our Core Values"}</h2>
            <p className="text-slate-600 mt-2">{t?.about?.values?.subtitle || "Principles that guide everything we do"}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-emerald-50 rounded-full mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t?.about?.values?.value1?.title || "Compassionate Care"}</h3>
              <p className="text-slate-600 text-sm">{t?.about?.values?.value1?.description || "Treating every patient with genuine empathy and respect"}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-teal-50 rounded-full mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t?.about?.values?.value2?.title || "Authentic Wisdom"}</h3>
              <p className="text-slate-600 text-sm">{t?.about?.values?.value2?.description || "Following traditional Ayurvedic principles unchanged"}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-amber-50 rounded-full mb-4">
                <Flower2 className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t?.about?.values?.value3?.title || "Natural Healing"}</h3>
              <p className="text-slate-600 text-sm">{t?.about?.values?.value3?.description || "Using pure, herbal, and organic ingredients only"}</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800">{t?.about?.team?.title || "Meet Our Experts"}</h2>
            <p className="text-slate-600 mt-2">{t?.about?.team?.subtitle || "Dedicated practitioners preserving ancient wisdom"}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <GraduationCap className="h-24 w-24 text-emerald-600 opacity-30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">
                    {index === 0 ? t?.about?.team?.member1?.name || "Dr. Dadhe" :
                     index === 1 ? t?.about?.team?.member2?.name || "Dr. Priya Dadhe" :
                     t?.about?.team?.member3?.name || "Dr. Suresh Kumar"}
                  </h3>
                  <p className="text-emerald-600 text-sm mt-1">
                    {index === 0 ? t?.about?.team?.member1?.role || "Chief Ayurvedic Physician" :
                     index === 1 ? t?.about?.team?.member2?.role || "Senior Wellness Expert" :
                     t?.about?.team?.member3?.role || "Panchakarma Specialist"}
                  </p>
                  <p className="text-slate-600 text-sm mt-3">
                    {index === 0 ? t?.about?.team?.member1?.bio || "15+ years of experience in authentic Ayurvedic treatments" :
                     index === 1 ? t?.about?.team?.member2?.bio || "Specializes in women's health and Panchakarma" :
                     t?.about?.team?.member3?.bio || "Expert in traditional detoxification therapies"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </section>
  );
};

export default AboutUs;