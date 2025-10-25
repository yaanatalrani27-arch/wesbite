import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  themeColor: string;
  ctaLabel?: string;
  onSelect?: () => void;
}

export default function PricingCard({ tier, themeColor, ctaLabel = 'Get Started', onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
        tier.popular ? 'ring-2 scale-105' : 'hover:scale-105'
      }`}
      style={{ ringColor: tier.popular ? themeColor : undefined }}
    >
      {tier.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold"
          style={{ backgroundColor: themeColor }}
        >
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-slate-900">{tier.price}</span>
          {tier.period !== 'contact us' && (
            <span className="text-slate-600">/{tier.period}</span>
          )}
        </div>
        {tier.period === 'contact us' && (
          <span className="text-slate-600 text-sm">{tier.period}</span>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className="flex-shrink-0 mt-0.5"
              size={20}
              style={{ color: themeColor }}
            />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all hover:shadow-lg ${
          tier.popular
            ? 'text-white hover:scale-105'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
        style={tier.popular ? { backgroundColor: themeColor } : undefined}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
