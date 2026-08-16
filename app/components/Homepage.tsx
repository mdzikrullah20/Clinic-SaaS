"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Activity, 
  CalendarCheck, 
  Users, 
  CreditCard, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Transparent Marketing Navbar */}
      <nav className="absolute top-0 w-full z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#0a1128] rounded-xl flex items-center justify-center shadow-md">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-[20px] font-extrabold text-[#0a1128] tracking-tight">
              ClinicSaaS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="hidden sm:block text-[15px] font-bold text-[#5e6b82] hover:text-[#0a1128] transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="bg-[#0a1128] hover:bg-[#111c3d] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold shadow-md transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-slate-50 pointer-events-none -z-10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[12px] font-bold text-[#5e6b82] uppercase tracking-wider">v2.0 is now live</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#0a1128] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            The modern operating system for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6]">clinic.</span>
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-[#5e6b82] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Streamline your appointments, automate billing, and manage patient records all in one beautifully designed platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-[14px] text-[16px] font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98]"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/demo" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#e2e8f0] hover:bg-slate-50 text-[#0a1128] px-8 py-4 rounded-[14px] text-[16px] font-bold shadow-sm transition-all active:scale-[0.98]"
            >
              Book a Demo
            </Link>
          </div>
          
          <p className="mt-5 text-[13px] font-medium text-[#94a3b8]">
            No credit card required. 14-day free trial.
          </p>
        </div>

        {/* Hero Dashboard Preview Image */}
        <div className="max-w-[1040px] mx-auto px-6 mt-16 lg:mt-24">
          <div className="relative rounded-[2rem] bg-white border border-[#e2e8f0] shadow-2xl p-2 lg:p-4 overflow-hidden">
            {/* Window Controls */}
            <div className="absolute top-5 left-5 flex gap-2 z-20 hidden sm:flex">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* Dashboard Mockup Image */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard Preview" 
              className="w-full rounded-[1.5rem] object-cover h-[300px] sm:h-[400px] lg:h-[600px] opacity-90"
            />
          </div>
        </div>
      </section>

      {/* 3. Features Grid Section */}
      <section className="py-24 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1128] tracking-tight mb-4">
              Everything you need to run a successful practice
            </h2>
            <p className="text-[16px] text-[#5e6b82] font-medium">
              We've replaced clunky legacy software with a lightning-fast, intuitive interface your staff will actually love using.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <CalendarCheck className="w-6 h-6 text-[#1d4ed8]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0a1128] mb-3">Smart Scheduling</h3>
              <p className="text-[14px] text-[#5e6b82] leading-relaxed">
                Manage appointments effortlessly with drag-and-drop calendars, automated SMS reminders, and waitlist management.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0a1128] mb-3">Electronic Records</h3>
              <p className="text-[14px] text-[#5e6b82] leading-relaxed">
                Access comprehensive patient histories, prescriptions, and lab results securely from any device, anywhere.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0a1128] mb-3">Integrated Billing</h3>
              <p className="text-[14px] text-[#5e6b82] leading-relaxed">
                Generate invoices in one click, process payments seamlessly, and track revenue with detailed financial reports.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Security & Trust Section */}
      <section className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-slate-200">Bank-grade security</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Your data is safe and strictly confidential.
            </h2>
            <p className="text-[16px] text-slate-400 font-medium mb-8 leading-relaxed">
              We take security seriously. ClinicSaaS is built from the ground up to be fully compliant with global healthcare data regulations.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-medium text-slate-200">HIPAA Compliant Infrastructure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-medium text-slate-200">End-to-end 256-bit Encryption</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-medium text-slate-200">Automated Daily Backups</span>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
              alt="Medical Team"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#0a1128]/40 mix-blend-multiply" />
          </div>

        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#0a1128] rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-[16px] font-extrabold text-[#0a1128] tracking-tight">
              ClinicSaaS
            </span>
          </div>

          <p className="text-[13px] font-medium text-[#5e6b82]">
            © {new Date().getFullYear()} ClinicSaaS Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[13px] font-bold text-[#5e6b82]">
            <Link href="/privacy" className="hover:text-[#0a1128]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0a1128]">Terms</Link>
            <Link href="/contact" className="hover:text-[#0a1128]">Contact</Link>
          </div>

        </div>
      </footer>

    </div>
  );
}