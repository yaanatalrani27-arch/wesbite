import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, Zap, Users, Award, TrendingUp } from 'lucide-react';
import rootConfig from '../../app-config/root.json';

export default function Home() {
  const { themeColor, contentRefs } = rootConfig;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        themeColor={themeColor}
        links={[
          { label: 'Studio', href: '/studio' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' }
        ]}
        ctaLabel="View Studio"
        ctaHref="/studio"
      />

      <main className="pt-24">
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 mb-8">
                <Sparkles size={18} className="text-yellow-400" />
                <span className="text-sm font-medium">Where Innovation Meets Precision</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {contentRefs.hero.title}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                {contentRefs.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <a
                  href="/studio"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <span>{contentRefs.hero.cta}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  {contentRefs.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contentRefs.expertise.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  {contentRefs.about.title}
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                {contentRefs.about.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentRefs.values.map((value, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {value.icon === 'Zap' && <Zap size={28} className="text-blue-400" />}
                      {value.icon === 'Users' && <Users size={28} className="text-purple-400" />}
                      {value.icon === 'Award' && <Award size={28} className="text-green-400" />}
                      {value.icon === 'TrendingUp' && <TrendingUp size={28} className="text-yellow-400" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              </div>

              <div className="relative z-10 py-20 px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {contentRefs.approach.title}
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                  {contentRefs.approach.subtitle}
                </p>

                <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
                  {contentRefs.approach.steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 border border-white/30">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-blue-100">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {contentRefs.contact.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              {contentRefs.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/studio"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span>Explore Studio</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:hello@prismicx.com"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
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
