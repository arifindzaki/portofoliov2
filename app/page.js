'use client';
import Image from 'next/image';
import fotoSaya from './image/fotosaya.png';
import webdevbnsp from './image/webdevbnsp.jpg';
import { PROFILE_DATA as PORTFOLIO_DATA } from './data/portfolioData';
import AboutPage from './about/page';
import PortfolioPage from './portfolio/page';
import ContactPage from './contact/page';
import React, { useState } from 'react';
import { 
  Mail, 
  ArrowRight, 
  Sparkles,
  X 
} from 'lucide-react';

// SVG ikon merek mandiri agar tidak error di lucide-react versi terbaru
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/* 📍 IKON KUSTOM WHATSAPP                                                    */
/* -------------------------------------------------------------------------- */
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.637 0 5.116 1.028 6.98 2.894a9.804 9.804 0 012.878 6.979c-.001 5.446-4.43 9.875-9.872 9.875m0-18.147c-6.223 0-11.285 5.062-11.288 11.287 0 2.008.528 3.967 1.532 5.698l-1.628 5.946 6.084-1.595a11.22 11.22 0 005.295 1.334h.005c6.22 0 11.283-5.062 11.286-11.288 0-3.016-1.174-5.852-3.308-7.985a11.205 11.205 0 00-7.978-3.301"/>
  </svg>
);

const PROFILE_DATA = {
  name: "Mohammad Dzaki Arifin",
  role: "Frontend & Fullstack Developer",
  shortBio: "Mengembangkan aplikasi web, mobile, dan sistem IoT dari pemrosesan data sensor hingga tampilan antarmuka yang responsif.",
  socials: {
    github: "https://github.com/arifindzaki",
    linkedin: "https://www.linkedin.com/in/dzakiarifin/",
    instagram: "https://www.instagram.com/arifindzaki_/",
    email: "mailto:dzar2673@gmail.com",
    
    /* -------------------------------------------------------------------------- */
    /* 📍 LOKASI 1: GANTI NOMOR WHATSAPP & PESAN OTOMATIS DI SINI                */
    /* Format nomor WA: Gunakan kode negara (misal 628123456789) tanpa tanda '+' */
    /* -------------------------------------------------------------------------- */
    whatsapp: "https://wa.me/6285706514913?text=Halo%20Arif,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek."
  },
  projects: PORTFOLIO_DATA.projects
};

const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const latestProjects = [1, 3, 2]
    .map((id) => PORTFOLIO_DATA.projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden pt-8 pb-20 lg:py-24 bg-gradient-to-b from-[#0B0F17] via-[#0D1321] to-[#0B0F17]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-base sm:text-lg">
                <span>Halo, Saya {PROFILE_DATA.name}</span>
                <span className="inline-block animate-bounce">👋</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Frontend, Fullstack & IOT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                  Developer
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                {PROFILE_DATA.shortBio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Lihat Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium border border-slate-700/80 transition-all duration-200"
                >
                  Contact Me
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-3 sm:space-x-4 pt-6">
                <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all">
                  <GithubIcon />
                </a>
                <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all">
                  <LinkedinIcon />
                </a>
                <a href={PROFILE_DATA.socials.instagram} target="_blank" rel="noreferrer" title="Instagram" className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all">
                  <InstagramIcon />
                </a>
                
                {/* Email Link */}
                <a href={PROFILE_DATA.socials.email} title="Email Me" className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all">
                  <Mail className="w-5 h-5" />
                </a>

                {/* -------------------------------------------------------------------------- */}
                {/* 📍 LOKASI 2: TOMBOL LINK WHATSAPP SEBELAH EMAIL                              */}
                {/* -------------------------------------------------------------------------- */}
                <a 
                  href={PROFILE_DATA.socials.whatsapp} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Chat via WhatsApp"
                  className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

              </div>
            </div>

            {/* Right Column (Profile Image) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
     <Image
      src={fotoSaya}
      alt="Dzaki Portrait"
      className="w-full h-[420px] object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-300"
    />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-medium text-slate-200">Open for Projects & Hire</span>
                    </div>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Web Developer Certification */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-[#121826] shadow-lg">
          <div className="relative h-[28rem] bg-slate-950/60 p-4 sm:h-[34rem]">
            <Image
              src={webdevbnsp}
              alt="Sertifikat kompetensi Pengembang Web dari BNSP"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-left sm:p-8">
            <span className="mb-3 w-fit rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-400">
              Sertifikasi Kompetensi
            </span>
            <h2 className="text-2xl font-bold text-white">
              Web Developer BNSP
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sertifikat kompetensi Pengembang Web dari Badan Nasional
              Sertifikasi Profesi (BNSP), yang diterbitkan melalui LSP
              Politeknik Negeri Jember. Sertifikasi ini menjadi bukti
              kompetensi saya di bidang pengembangan web.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Portfolio Terkini</h2>
            <div className="w-10 h-1 bg-blue-500 rounded-full mt-2" />
          </div>
          <Link href="/#portfolio" className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            Lihat Semua <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#121826] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer hover:-translate-y-1 shadow-lg"
            >
              <div
                className={`relative overflow-hidden bg-slate-900 ${
                  project.imageOrientation === 'portrait'
                    ? 'h-[420px] md:h-[520px]'
                    : 'h-44'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-xs line-clamp-2">{project.description}</p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-medium bg-blue-950/80 text-blue-400 border border-blue-800/40">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Project Detail Modal */}

                <section id="about" className="scroll-mt-20">
                  <AboutPage />
                </section>

                <section id="portfolio" className="scroll-mt-20">
                  <PortfolioPage />
                </section>

                <section id="contact" className="scroll-mt-20">
                  <ContactPage />
                </section>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#121826] border border-slate-800 rounded-2xl overflow-hidden p-6 text-left">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{selectedProject.longDescription}</p>
            <div className="flex gap-3">
              {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Repository</span> <GithubIcon />
                </a>
              )}
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold"
                >
                  Video Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}