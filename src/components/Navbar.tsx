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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo appName={appName} themeColor={themeColor} />

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: themeColor || '#6366F1' }}
            >
              {ctaLabel}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="block px-4 py-2 rounded-lg font-semibold text-white text-center transition-all hover:shadow-lg"
              style={{ backgroundColor: themeColor || '#6366F1' }}
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
