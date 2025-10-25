import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Search, Phone, Eye, Lightbulb, Award, Heart, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import rootConfig from '../../app-config/root.json';

export default function Home() {
  const { themeColor, contentRefs } = rootConfig;

  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search size={32} />,
    Phone: <Phone size={32} />,
    Eye: <Eye size={32} />,
    Lightbulb: <Lightbulb size={24} />,
    Award: <Award size={24} />,
    Heart: <Heart size={24} />,
    Shield: <Shield size={24} />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar
        themeColor={themeColor}
        links={[
          { label: 'Products', href: '#products' },
          { label: 'Studio', href: '/studio' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' }
        ]}
        ctaLabel="Get Started"
        ctaHref="#products"
      />

      <main className="pt-24">
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-semibold mb-6">
                <Sparkles size={18} />
                <span>Powered by AI & Innovation</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight">
                {contentRefs.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                {contentRefs.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: themeColor }}
                >
                  {contentRefs.hero.cta}
                  <ArrowRight size={20} />
                </a>
                <a
                  href="/studio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 text-lg bg-white hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
                >
                  {contentRefs.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {contentRefs.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: themeColor }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Products
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Intelligent tools designed to transform your workflow
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {contentRefs.products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: product.themeColor }}
                    />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${product.themeColor}20` }}
                      >
                        <div style={{ color: product.themeColor }}>
                          {iconMap[product.icon]}
                        </div>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: product.status === 'Live' ? `${product.themeColor}20` : '#e2e8f0',
                          color: product.status === 'Live' ? product.themeColor : '#64748b'
                        }}
                      >
                        {product.status}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-6">{product.description}</p>

                    {product.status === 'Live' ? (
                      <a
                        href={product.link}
                        className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                        style={{ color: product.themeColor }}
                      >
                        Learn More <ArrowRight size={18} />
                      </a>
                    ) : (
                      <span className="text-slate-400 font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {contentRefs.services.title}
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  {contentRefs.services.subtitle}
                </p>
                <a
                  href={contentRefs.services.link}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 text-lg transition-all hover:scale-105"
                >
                  Visit Studio
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: themeColor }}>50+</div>
                  <div className="text-slate-300">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: themeColor }}>30+</div>
                  <div className="text-slate-300">Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: themeColor }}>5+</div>
                  <div className="text-slate-300">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: themeColor }}>100%</div>
                  <div className="text-slate-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Choose PrismicX
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We combine innovation, quality, and reliability to deliver exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentRefs.values.map((value, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${themeColor}20` }}
                  >
                    <div style={{ color: themeColor }}>
                      {iconMap[value.icon]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Explore our products or get in touch to discuss custom solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: themeColor }}
              >
                View Products
                <ArrowRight size={20} />
              </a>
              <a
                href="mailto:hello@prismicx.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 text-lg bg-white hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer themeColor={themeColor} />
    </div>
  );
}
