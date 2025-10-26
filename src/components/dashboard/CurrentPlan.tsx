import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CurrentPlanProps {
  appName: string;
  themeColor: string;
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
  };
}

export default function CurrentPlan({ appName, themeColor, plan }: CurrentPlanProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">Current Plan</h3>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
            >
              {plan.name}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">{plan.price}</span>
            <span className="text-slate-400 text-sm">/ {plan.period}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {plan.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: themeColor }} />
            <span className="text-sm text-slate-300">{feature}</span>
          </div>
        ))}
        {plan.features.length > 3 && (
          <div className="text-sm text-slate-400 pl-6">
            +{plan.features.length - 3} more features
          </div>
        )}
      </div>

      <a
        href={`/apps/${appName.toLowerCase()}#pricing`}
        className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
        style={{ color: themeColor }}
      >
        View all plans
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
