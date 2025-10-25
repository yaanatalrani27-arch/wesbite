import React from 'react';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  themeColor: string;
}

export default function FeatureCard({ title, description, icon, themeColor }: FeatureCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    <div className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${themeColor}20` }}
      >
        {IconComponent && <IconComponent size={24} style={{ color: themeColor }} />}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
