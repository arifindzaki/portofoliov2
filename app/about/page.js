import React from 'react';
import { GraduationCap, Briefcase, Code2, Target } from 'lucide-react';

const PROFILE_DATA = {
  name: "Arif",
  role: "Frontend & Fullstack Developer",
  shortBio: "Saya membangun aplikasi web modern dan mobile yang cepat, responsif, dan user friendly.",
  fullBio: "Saya adalah seorang developer yang memiliki pengalaman dalam pengembangan aplikasi web, mobile, dan IoT. Selalu tertarik untuk belajar teknologi baru dan membuat solusi yang bermanfaat.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:arif@example.com"
  },
  stats: [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "Politeknik Negeri Jember",
      detail: "D4 Teknik Informatika"
    },
    {
      icon: Briefcase,
      title: "Experience",
      subtitle: "Magang & Project",
      detail: "2+ Tahun"
    },
    {
      icon: Code2,
      title: "Specialization",
      subtitle: "Web Development, Mobile App,",
      detail: "IoT, Database"
    },
    {
      icon: Target,
      title: "Focus",
      subtitle: "Membangun aplikasi yang",
      detail: "bermanfaat dan inovatif"
    }
  ]
};

export default function AboutPage() {
  return (
    <section className="py-12 bg-[#0B0F17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h1>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {PROFILE_DATA.fullBio}
            </p>

            {/* Grid 2x2 Stats/Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE_DATA.stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#121826] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-white">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
                alt="Workspace Setup"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121826]/90 backdrop-blur-md border border-slate-800">
                <p className="text-xs font-medium text-slate-300">
                  <span className="text-blue-400 font-semibold">Workspace Setup:</span> Lingkungan koding berkinerja tinggi untuk Web, Mobile & IoT.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}