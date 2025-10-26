import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AppSelector from '../components/dashboard/AppSelector';
import UsageStats from '../components/dashboard/UsageStats';
import SubscriptionCard from '../components/dashboard/SubscriptionCard';
import masterSearchConfig from '../../app-config/mastersearch.json';
import studioConfig from '../../app-config/studio.json';

interface AppConfig {
  id: string;
  name: string;
  themeColor: string;
  icon: string;
  pricing?: {
    free: any;
    pro: any;
    enterprise: any;
  };
}

export default function Dashboard() {
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  const apps: AppConfig[] = [
    {
      id: 'mastersearch',
      name: 'MasterSearch',
      themeColor: masterSearchConfig.themeColor,
      icon: '🔍',
      pricing: masterSearchConfig.pricing
    },
    {
      id: 'callai',
      name: 'CallAI',
      themeColor: '#8B5CF6',
      icon: '📞',
      pricing: {
        free: {
          name: 'Free',
          price: '$0',
          period: 'forever',
          features: ['10 calls per month', 'Basic transcription', 'Standard support']
        },
        pro: {
          name: 'Pro',
          price: '$29',
          period: 'per month',
          features: ['Unlimited calls', 'Advanced AI analysis', 'Priority support', 'Export & integrations'],
          popular: true
        },
        enterprise: {
          name: 'Enterprise',
          price: 'Custom',
          period: 'contact us',
          features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'SLA guarantees']
        }
      }
    },
    {
      id: 'vision',
      name: 'Vision',
      themeColor: '#3B82F6',
      icon: '👁️',
      pricing: {
        free: {
          name: 'Free',
          price: '$0',
          period: 'forever',
          features: ['50 scans per month', 'Basic recognition', 'Community support']
        },
        pro: {
          name: 'Pro',
          price: '$39',
          period: 'per month',
          features: ['Unlimited scans', 'Advanced AI vision', 'Priority support', 'API access', 'Batch processing'],
          popular: true
        },
        enterprise: {
          name: 'Enterprise',
          price: 'Custom',
          period: 'contact us',
          features: ['Everything in Pro', 'Custom models', 'Dedicated infrastructure', 'White-label option']
        }
      }
    }
  ];

  const selectedApp = apps.find(app => app.id === selectedAppId);
  const themeColor = selectedApp?.themeColor || '#6366F1';

  const getUsageStatsForApp = (appId: string) => {
    switch (appId) {
      case 'mastersearch':
        return [
          { label: 'Searches This Month', value: '1,247', change: '+12%', trend: 'up' as const },
          { label: 'Days Active', value: '28', change: '+5%', trend: 'up' as const },
          { label: 'Avg Response Time', value: '87ms', change: '-8%', trend: 'up' as const },
          { label: 'Data Sources', value: '12', change: '+2', trend: 'up' as const }
        ];
      case 'callai':
        return [
          { label: 'Calls This Month', value: '342', change: '+18%', trend: 'up' as const },
          { label: 'Total Minutes', value: '1,580', change: '+22%', trend: 'up' as const },
          { label: 'Transcription Accuracy', value: '98.5%', change: '+0.3%', trend: 'up' as const },
          { label: 'Active Campaigns', value: '5', change: '+1', trend: 'up' as const }
        ];
      case 'vision':
        return [
          { label: 'Scans This Month', value: '856', change: '+25%', trend: 'up' as const },
          { label: 'Recognition Rate', value: '99.2%', change: '+0.5%', trend: 'up' as const },
          { label: 'Processing Speed', value: '1.2s', change: '-15%', trend: 'up' as const },
          { label: 'Models Used', value: '8', change: '+3', trend: 'up' as const }
        ];
      default:
        return [];
    }
  };

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName} for ${selectedApp?.name}`);
  };

  return (
    <DashboardLayout themeColor={themeColor} appName={selectedApp?.name}>
      <div className="relative">
        <div className="absolute inset-0 -top-32">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
            style={{ background: `radial-gradient(circle, ${themeColor}, transparent)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
            style={{ background: `radial-gradient(circle, ${themeColor}, transparent)`, animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor}cc)`
                }}
              >
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              Manage your subscriptions and track usage across all apps
            </p>
          </div>

          <AppSelector
            apps={apps}
            selectedApp={selectedAppId}
            onSelectApp={setSelectedAppId}
          />

          {selectedApp && (
            <>
              <UsageStats
                themeColor={themeColor}
                stats={getUsageStatsForApp(selectedApp.id)}
              />

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Subscription Plans</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {selectedApp.pricing && (
                    <>
                      <SubscriptionCard
                        tier={selectedApp.pricing.free}
                        themeColor={themeColor}
                        currentTier={false}
                        onSelect={() => handlePlanSelect(selectedApp.pricing!.free.name)}
                      />
                      <SubscriptionCard
                        tier={selectedApp.pricing.pro}
                        themeColor={themeColor}
                        currentTier={true}
                        onSelect={() => handlePlanSelect(selectedApp.pricing!.pro.name)}
                      />
                      <SubscriptionCard
                        tier={selectedApp.pricing.enterprise}
                        themeColor={themeColor}
                        currentTier={false}
                        onSelect={() => handlePlanSelect(selectedApp.pricing!.enterprise.name)}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <div className="font-semibold text-white">Subscription Renewed</div>
                      <div className="text-sm text-slate-400">Pro Plan - Monthly</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold" style={{ color: themeColor }}>
                        ${selectedApp.pricing?.pro.price.replace('$', '') || '0'}
                      </div>
                      <div className="text-sm text-slate-400">2 days ago</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <div>
                      <div className="font-semibold text-white">Usage Milestone</div>
                      <div className="text-sm text-slate-400">Reached 1000 total uses</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">5 days ago</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-semibold text-white">Account Created</div>
                      <div className="text-sm text-slate-400">Welcome to {selectedApp.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">30 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {!selectedApp && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📊</div>
              <h2 className="text-3xl font-bold text-white mb-4">Select an App to Get Started</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Choose one of your apps above to view detailed usage statistics, manage your subscription, and track your activity.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
