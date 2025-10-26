import React from 'react';
import { TrendingUp, Activity, Calendar, BarChart3 } from 'lucide-react';

interface UsageData {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
}

interface UsageStatsProps {
  themeColor: string;
  stats: UsageData[];
}

export default function UsageStats({ themeColor, stats }: UsageStatsProps) {
  const iconMap: Record<number, React.ReactNode> = {
    0: <Activity size={24} />,
    1: <Calendar size={24} />,
    2: <BarChart3 size={24} />,
    3: <TrendingUp size={24} />
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Usage Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group relative">
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(to bottom right, ${themeColor}20, ${themeColor}10)` }}
            />

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
                >
                  {iconMap[index] || <Activity size={24} />}
                </div>

                {stat.change && (
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp size={16} className={stat.trend === 'down' ? 'rotate-180' : ''} />
                    {stat.change}
                  </div>
                )}
              </div>

              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
