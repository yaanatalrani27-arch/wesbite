import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { ArrowRight, Code2, Brain, Palette, Rocket, CheckCircle2 } from 'lucide-react';
import studioConfig from '../../app-config/studio.json';

export default function Studio() {
  const { themeColor, contentRefs } = studioConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar
        appName="Studio"
        themeColor={themeColor}
        links={[
          { label: 'Services', href: '#services' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Process', href: '#process' },
          { label: 'Contact', href: '#contact' }
        ]}
        ctaLabel="Start a Project"
        ctaHref="#contact"
      />

      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {contentRefs.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
              {contentRefs.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: themeColor }}
              >
                {contentRefs.hero.cta}
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 text-lg bg-slate-100 hover:bg-slate-200 transition-all"
              >
                {contentRefs.hero.secondaryCta}
              </a>
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

        <section id="services" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Full-spectrum digital services from concept to launch and beyond
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentRefs.services.map((service, index) => (
                <div key={index} className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${themeColor}20` }}
                  >
                    {service.icon === 'Code2' && <Code2 size={24} style={{ color: themeColor }} />}
                    {service.icon === 'Brain' && <Brain size={24} style={{ color: themeColor }} />}
                    {service.icon === 'Palette' && <Palette size={24} style={{ color: themeColor }} />}
                    {service.icon === 'Rocket' && <Rocket size={24} style={{ color: themeColor }} />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <p className="text-sm font-semibold" style={{ color: themeColor }}>
                    {service.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Work
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Building the future, one product at a time
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {contentRefs.portfolio.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: project.status === 'Live' ? `${themeColor}20` : '#e2e8f0',
                        color: project.status === 'Live' ? themeColor : '#64748b'
                      }}
                    >
                      {project.status}
                    </div>
                    {project.status === 'Live' && (
                      <CheckCircle2 size={20} style={{ color: themeColor }} />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <p className="text-sm text-slate-500 mb-4">{project.category}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.status === 'Live' && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                      style={{ color: themeColor }}
                    >
                      View Project <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A proven approach to building exceptional products
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {contentRefs.approach.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                    style={{ backgroundColor: themeColor }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-slate-600">
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

        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's discuss your project and turn your vision into reality
            </p>
            <a
              href="mailto:hello@prismicx.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 bg-white text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer appName="Studio" themeColor={themeColor} />
    </div>
  );
}
