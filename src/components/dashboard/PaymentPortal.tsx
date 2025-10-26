import React, { useState } from 'react';
import { CreditCard, DollarSign, Calendar, ArrowRight, Loader2 } from 'lucide-react';

interface PaymentPortalProps {
  appName: string;
  themeColor: string;
  currentPlan: {
    name: string;
    price: string;
    nextBilling?: string;
  };
}

export default function PaymentPortal({ appName, themeColor, currentPlan }: PaymentPortalProps) {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'paypal' | null>(null);

  const handleOpenPortal = async (method: 'stripe' | 'paypal') => {
    setLoading(true);
    setSelectedMethod(method);

    console.log(`Opening ${method} payment portal for ${appName}`);

    setTimeout(() => {
      setLoading(false);
      setSelectedMethod(null);
      alert(`Payment portal for ${appName} would open here. Integration with ${method} pending.`);
    }, 1500);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Current Plan</h3>
          <p className="text-sm text-slate-400">Manage your subscription</p>
        </div>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
        >
          <CreditCard size={20} />
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm">Plan</span>
          <span className="text-white font-semibold">{currentPlan.name}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm">Price</span>
          <span className="text-white font-semibold">{currentPlan.price}</span>
        </div>
        {currentPlan.nextBilling && (
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Next Billing</span>
            <span className="text-white font-semibold">{currentPlan.nextBilling}</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleOpenPortal('stripe')}
          disabled={loading}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
            >
              💳
            </div>
            <span className="text-white font-medium">Manage with Stripe</span>
          </div>
          {loading && selectedMethod === 'stripe' ? (
            <Loader2 size={18} className="text-slate-400 animate-spin" />
          ) : (
            <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          )}
        </button>

        <button
          onClick={() => handleOpenPortal('paypal')}
          disabled={loading}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
            >
              PP
            </div>
            <span className="text-white font-medium">Manage with PayPal</span>
          </div>
          {loading && selectedMethod === 'paypal' ? (
            <Loader2 size={18} className="text-slate-400 animate-spin" />
          ) : (
            <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href={`/apps/${appName.toLowerCase()}`}
          className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
        >
          View all plans for {appName}
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
