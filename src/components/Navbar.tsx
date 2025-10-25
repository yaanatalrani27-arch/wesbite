import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  appName?: string;
  themeColor?: string;
  links?: Array<{ label: string; href: string }>;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  appName,
  themeColor,
  links = [],
  ctaLabel = 'Get Started',
  ctaHref = '#'
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo appName={appName} themeColor={themeColor} />

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: themeColor || '#F59E0B' }}
            >
              {ctaLabel}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="block px-4 py-2 rounded-lg font-semibold text-white text-center transition-all hover:shadow-lg"
              style={{ backgroundColor: themeColor || '#F59E0B' }}
              onClick={() => setIsOpen(false)}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
