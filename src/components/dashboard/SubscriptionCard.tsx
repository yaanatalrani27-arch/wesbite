import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SubscriptionTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

interface SubscriptionCardProps {
  tier: SubscriptionTier;
  themeColor: string;
  currentTier?: boolean;
  onSelect: () => void;
}

export default function SubscriptionCard({ tier, themeColor, currentTier, onSelect }: SubscriptionCardProps) {
  return (
    <div className={`group relative ${tier.popular ? 'scale-105' : ''}`}>
      {tier.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: themeColor }}
        >
          Most Popular
        </div>
      )}

      <div
        className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
        style={{ background: `linear-gradient(to bottom right, ${themeColor}30, ${themeColor}10)` }}
      />

      <div className={`relative bg-white/5 backdrop-blur-sm border rounded-3xl p-8 hover:bg-white/10 transition-all ${
        tier.popular ? 'border-2' : 'border-white/10'
      }`}
        style={{ borderColor: tier.popular ? themeColor : undefined }}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold" style={{ color: themeColor }}>
              {tier.price}
            </span>
            <span className="text-slate-400">/ {tier.period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: themeColor }}
              />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onSelect}
          disabled={currentTier}
          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
            currentTier
              ? 'bg-white/10 text-slate-400 cursor-not-allowed'
              : tier.popular
              ? 'text-white hover:scale-105 hover:shadow-2xl'
              : 'bg-white/5 border border-white/10 hover:bg-white/10'
          }`}
          style={
            !currentTier && tier.popular
              ? { background: `linear-gradient(to right, ${themeColor}, ${themeColor}dd)` }
              : undefined
          }
        >
          <span>{currentTier ? 'Current Plan' : tier.popular ? 'Upgrade Now' : 'Select Plan'}</span>
          {!currentTier && <ArrowRight size={18} />}
        </button>
      </div>
    </div>
  );
}
