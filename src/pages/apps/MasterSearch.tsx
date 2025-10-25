import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeatureCard from '../../components/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard';
import PricingCard from '../../components/PricingCard';
import CTASection from '../../components/CTASection';
import { ArrowRight, Play, Download, Globe, Apple, Monitor } from 'lucide-react';
import masterSearchConfig from '../../../app-config/mastersearch.json';

export default function MasterSearch() {
  const { appName, themeColor, pricing, appVariable, contentRefs } = masterSearchConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar
        appName={appName}
        themeColor={themeColor}
        links={[
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Download', href: '#download' },
          { label: 'Testimonials', href: '#testimonials' }
        ]}
        ctaLabel="Launch App"
        ctaHref={appVariable.launchUrl}
      />

      <main className="pt-24">
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div
                className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-8 bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ color: themeColor }}
              >
                AI-Powered Search Intelligence
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {contentRefs.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
                {contentRefs.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={appVariable.launchUrl}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
                >
                  <span>{contentRefs.hero.cta}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={appVariable.demoUrl}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Play size={20} />
                  {contentRefs.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contentRefs.stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Download & Access
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
                Choose your platform and start searching smarter today
              </p>
              <p className="text-sm text-slate-500">
                Current Version: {appVariable.version}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-emerald-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Web App</h3>
                  <p className="text-slate-400 mb-6">Access from any browser, anywhere</p>
                  <a
                    href={appVariable.launchUrl}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 transition-all hover:scale-105 w-full"
                  >
                    <span>Launch Web App</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-emerald-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Apple size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">macOS</h3>
                  <p className="text-slate-400 mb-6">Native app for Mac computers</p>
                  <a
                    href={appVariable.downloads.mac}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full"
                  >
                    <Download size={18} />
                    <span>Download for Mac</span>
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-emerald-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Monitor size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Windows</h3>
                  <p className="text-slate-400 mb-6">Native app for Windows PCs</p>
                  <a
                    href={appVariable.downloads.windows}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full"
                  >
                    <Download size={18} />
                    <span>Download for Windows</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Everything you need to master your searches and find what matters
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentRefs.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  themeColor={themeColor}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              </div>

              <div className="relative z-10 py-20 px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Search Smarter, Not Harder
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8">
                      MasterSearch uses advanced AI to understand what you're really looking for.
                      Get results that matter, not just results that match.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-lg text-white">Context-aware search that understands intent</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-lg text-white">Real-time results from multiple sources</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <span className="text-lg text-white">Smart filtering and categorization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl font-bold mb-4">AI</div>
                        <div className="text-xl">Powered Intelligence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Loved by Teams Worldwide
                </span>
              </h2>
              <p className="text-xl text-slate-400">
                See how MasterSearch transforms workflows
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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

        <section id="pricing" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-slate-400">
                Choose the plan that's right for you
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                tier={pricing.free}
                themeColor={themeColor}
                ctaLabel="Get Started"
                onSelect={() => window.location.href = appVariable.launchUrl}
              />
              <PricingCard
                tier={pricing.pro}
                themeColor={themeColor}
                ctaLabel="Start Free Trial"
                onSelect={() => window.location.href = appVariable.launchUrl}
              />
              <PricingCard
                tier={pricing.enterprise}
                themeColor={themeColor}
                ctaLabel="Contact Sales"
                onSelect={() => window.location.href = 'mailto:sales@prismicx.com'}
              />
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Master Your Searches?"
          subtitle="Join thousands of users who are finding exactly what they need, faster than ever."
          primaryCta="Start Free"
          primaryHref={appVariable.launchUrl}
          secondaryCta="Schedule Demo"
          secondaryHref={appVariable.demoUrl}
          themeColor={themeColor}
        />
      </main>

      <Footer appName={appName} themeColor={themeColor} />
    </div>
  );
}
