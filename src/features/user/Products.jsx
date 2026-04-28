import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MessageCircle, ShoppingBag, Star, Clock, Droplet, Flower2, Sun, Moon, Shield, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = t?.products?.productsList || [];

  const handleContactClick = (product, method) => {
    const phoneNumber = "+919966426060";
    const message = `Hi, I'm interested in purchasing ${product.name}. Please share more details.`;
    
    if (method === 'whatsapp') {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    } else if (method === 'call') {
      window.location.href = `tel:${phoneNumber}`;
    } else if (method === 'email') {
      window.location.href = `mailto:drdadhesayurandnaturecure369@gmail.com?subject=Product Inquiry: ${product.name}&body=${message}`;
    }
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium tracking-wider">
              {t?.products?.badge || "Ayurvedic Products"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            {t?.products?.title || "Natural Ayurvedic"}
            <span className="block text-emerald-700">{t?.products?.titleHighlight || "Wellness Products"}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t?.products?.subtitle || "100% natural, herbal products crafted with ancient Ayurvedic formulations"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.icon === "Droplet" && <Droplet className="h-24 w-24 text-emerald-600 opacity-20" />}
                  {product.icon === "Flower2" && <Flower2 className="h-24 w-24 text-rose-600 opacity-20" />}
                  {product.icon === "Sun" && <Sun className="h-24 w-24 text-amber-600 opacity-20" />}
                  {product.icon === "Moon" && <Moon className="h-24 w-24 text-indigo-600 opacity-20" />}
                  {product.icon === "Shield" && <Shield className="h-24 w-24 text-emerald-600 opacity-20" />}
                  {!product.icon && <ShoppingBag className="h-24 w-24 text-emerald-600 opacity-20" />}
                </div>
                
                {/* Badge */}
                {product.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ {t?.products?.popularBadge || "Popular"}
                  </div>
                )}
                
                {/* Stock Status */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700 border border-emerald-100">
                  {product.inStock ? (t?.products?.inStock || "In Stock") : (t?.products?.outOfStock || "Out of Stock")}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm text-slate-600">{product.rating || "4.8"}</span>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium">{product.category}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p> */}

                {/* <div className="space-y-2 mb-6">
                  {product.benefits?.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span className="text-xs text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div> */}

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleContactClick(product, 'whatsapp')}
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t?.products?.buyOnWhatsapp || "Buy on WhatsApp"}</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleContactClick(product, 'call')}
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-all duration-300"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{t?.products?.call || "Call"}</span>
                    </button>
                    <button
                      onClick={() => handleContactClick(product, 'email')}
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-slate-600 text-white font-medium rounded-xl hover:bg-slate-700 transition-all duration-300"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{t?.products?.email || "Email"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;