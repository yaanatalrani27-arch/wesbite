import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface App {
  id: string;
  name: string;
  themeColor: string;
  icon: string;
}

interface AppSelectorProps {
  apps: App[];
  selectedApp: string | null;
  onSelectApp: (appId: string) => void;
}

export default function AppSelector({ apps, selectedApp, onSelectApp }: AppSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Select an App</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apps.map((app) => {
          const isSelected = selectedApp === app.id;
          return (
            <button
              key={app.id}
              onClick={() => onSelectApp(app.id)}
              className={`relative p-6 rounded-2xl transition-all text-left ${
                isSelected
                  ? 'bg-white/10 border-2 scale-105'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
              style={{
                borderColor: isSelected ? app.themeColor : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: `${app.themeColor}20`, color: app.themeColor }}
                >
                  {app.icon}
                </div>
                {isSelected && (
                  <CheckCircle2 size={24} style={{ color: app.themeColor }} />
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
              <p className="text-sm text-slate-400">
                {isSelected ? 'Currently Selected' : 'Click to select'}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
