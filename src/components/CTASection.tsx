import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  themeColor: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  themeColor
}: CTASectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {title}
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: themeColor }}
          >
            {primaryCta}
            <ArrowRight size={20} />
          </a>
          {secondaryCta && secondaryHref && (
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-900 text-lg bg-slate-100 hover:bg-slate-200 transition-all"
            >
              {secondaryCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
