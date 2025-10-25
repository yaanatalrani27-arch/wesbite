import React from 'react';

interface LogoProps {
  appName?: string;
  themeColor?: string;
  className?: string;
}

export default function Logo({ appName, themeColor = '#F59E0B', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-amber-500">Prismic</span>
        <span className="text-slate-900">X</span>
        {appName && (
          <>
            <span className="text-slate-400 mx-2">·</span>
            <span style={{ color: themeColor }}>{appName}</span>
          </>
        )}
      </h1>
    </div>
  );
}
