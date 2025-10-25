import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import { ArrowRight, Code2, Brain, Palette, Rocket, CheckCircle2, Search, Phone, Eye, Download, Globe } from 'lucide-react';
import studioConfig from '../../app-config/studio.json';

export default function Studio() {
  const { themeColor, contentRefs } = studioConfig;

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={24} />,
    Brain: <Brain size={24} />,
    Palette: <Palette size={24} />,
    Rocket: <Rocket size={24} />,
    Search: <Search size={32} />,
    Phone: <Phone size={32} />,
    Eye: <Eye size={32} />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar
        appName="Studio"
        themeColor={themeColor}
        links={[
          { label: 'Services', href: '#services' },
          { label: 'Products', href: '#products' },
          { label: 'Process', href: '#process' },
          { label: 'Contact', href: '#contact' }
        ]}
        ctaLabel="Start a Project"
        ctaHref="#contact"
      />

      <main className="pt-24">
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {contentRefs.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
              {contentRefs.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
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
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contentRefs.stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  What We Do
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Full-spectrum digital services from concept to launch and beyond
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentRefs.services.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">
                        {iconMap[service.icon]}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                    <p className="text-sm font-semibold text-cyan-400">
                      {service.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Our Products
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Intelligent tools we've built and launched for the world
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {contentRefs.portfolio.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to bottom right, ${project.themeColor}20, ${project.themeColor}10)` }}
                  />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${project.themeColor}20` }}
                      >
                        <div style={{ color: project.themeColor }}>
                          {iconMap[project.icon]}
                        </div>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                        style={{
                          backgroundColor: project.status === 'Live' ? `${project.themeColor}20` : 'rgba(148, 163, 184, 0.1)',
                          color: project.status === 'Live' ? project.themeColor : '#94a3b8'
                        }}
                      >
                        {project.status === 'Live' && <CheckCircle2 size={14} />}
                        {project.status}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <p className="text-sm text-slate-500 mb-6">{project.category}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.status === 'Live' && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                        style={{ color: project.themeColor }}
                      >
                        View Product <ArrowRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A proven approach to building exceptional products
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {contentRefs.approach.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Client Testimonials
                </span>
              </h2>
              <p className="text-xl text-slate-400">
                What our clients say about working with us
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {contentRefs.testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  themeColor={themeColor}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality
            </p>
            <a
              href="mailto:hello@prismicx.com"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer appName="Studio" themeColor={themeColor} />
    </div>
  );
}
