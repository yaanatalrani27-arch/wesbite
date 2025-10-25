import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  themeColor: string;
}

export default function TestimonialCard({ quote, author, role, avatar, themeColor }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <Quote size={32} className="mb-4 opacity-20" style={{ color: themeColor }} />
      <p className="text-slate-700 text-lg mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: themeColor }}
        >
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
