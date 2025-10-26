import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
  themeColor: string;
  appName?: string;
}

export default function DashboardLayout({ children, themeColor, appName }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar
        appName={appName ? `${appName} Dashboard` : 'Dashboard'}
        themeColor={themeColor}
        links={[
          { label: 'Home', href: '/' },
          { label: 'Studio', href: '/studio' },
          { label: 'Dashboard', href: '/dashboard' }
        ]}
        ctaLabel="View Apps"
        ctaHref="/studio#products"
      />

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      <Footer appName={appName ? `${appName} Dashboard` : 'Dashboard'} themeColor={themeColor} />
    </div>
  );
}
