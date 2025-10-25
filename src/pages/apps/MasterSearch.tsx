import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeatureCard from '../../components/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard';
import PricingCard from '../../components/PricingCard';
import CTASection from '../../components/CTASection';
import { ArrowRight, Play } from 'lucide-react';
import masterSearchConfig from '../../../app-config/mastersearch.json';

export default function MasterSearch() {
  const { appName, themeColor, pricing, appVariable, contentRefs } = masterSearchConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar
        appName={appName}
        themeColor={themeColor}
        links={[
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Testimonials', href: '#testimonials' }
        ]}
        ctaLabel="Launch App"
        ctaHref={appVariable.launchUrl}
      />

      <main className="pt-24">
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-50" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
              >
                AI-Powered Search Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                {contentRefs.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
                {contentRefs.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={appVariable.launchUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: themeColor }}
                >
                  {contentRefs.hero.cta}
                  <ArrowRight size={20} />
                </a>
                <a
                  href={appVariable.demoUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 text-lg bg-white hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
                >
                  <Play size={20} />
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

        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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

        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Search Smarter, Not Harder
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  MasterSearch uses advanced AI to understand what you're really looking for.
                  Get results that matter, not just results that match.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: themeColor }}
                    >
                      ✓
                    </div>
                    <span className="text-lg">Context-aware search that understands intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: themeColor }}
                    >
                      ✓
                    </div>
                    <span className="text-lg">Real-time results from multiple sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: themeColor }}
                    >
                      ✓
                    </div>
                    <span className="text-lg">Smart filtering and categorization</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold mb-4">AI</div>
                    <div className="text-xl">Powered Intelligence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Loved by Teams Worldwide
              </h2>
              <p className="text-xl text-slate-600">
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

        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600">
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
