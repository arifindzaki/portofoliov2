'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-12 bg-[#0B0F17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h1>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm mt-3">
            Punya ide proyek menarik atau berminat bekerjasama? Silahkan kirim pesan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#121826] border border-slate-800 space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-slate-400 font-bold">Email</h4>
                  <p className="text-sm font-medium text-white mt-1">dzar2673@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-slate-400 font-bold">Lokasi</h4>
                  <p className="text-sm font-medium text-white mt-1">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-slate-400 font-bold">Status</h4>
                  <p className="text-sm font-medium text-emerald-400 mt-1">Tersedia untuk Freelance & Full-time</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#121826] border border-slate-800 space-y-5">
              
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Pesan Anda berhasil terkirim! Terima kasih telah menghubungi.</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tuliskan pesan atau detail proyek Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}