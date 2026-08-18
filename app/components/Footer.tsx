"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Send,
  Heart,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 font-sans">
  

      {/* 2. Main Footer Navigation Links */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Mission Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/dashboard" className="flex items-center gap-2.5 group w-fit">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-teal-700 transition">
              ClinicSaaS
            </span>
          </Link>

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            Your accredited online healthcare & prescription partner. Providing safe, generic price-matched medications and licensed pharmacist consultations delivered straight to your doorstep.
          </p>

          <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#1b5e5d] shrink-0" />
              <span>742 Evergreen Terrace, Medical District, NY 10001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#1b5e5d] shrink-0" />
              <a href="tel:+18005550199" className="hover:text-[#1b5e5d] transition font-medium">+1 (800) 555-0199 (24/7 Helpline)</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#1b5e5d] shrink-0" />
              <a href="mailto:support@clinicsaas.com" className="hover:text-[#1b5e5d] transition font-medium">support@clinicsaas.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#1b5e5d] shrink-0" />
              <span>Mon - Sun: 24 Hours Pharmacist On-Call</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              { name: "Refill Prescription", href: "/refill" },
              { name: "Price Match Guarantee", href: "/price-match" },
              { name: "Find a Doctor", href: "/doctors" },
              { name: "Online Consultation", href: "/consultation" },
              { name: "Order Tracking", href: "/track" },
              { name: "Patient Portal", href: "/dashboard" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-[#1b5e5d] transition flex items-center gap-1.5 group font-medium"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#1b5e5d] transition-transform group-hover:translate-x-0.5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
            Categories
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              { name: "Prescription Medicines", href: "/category/prescriptions" },
              { name: "Vitamins & Supplements", href: "/category/vitamins" },
              { name: "Medical Devices", href: "/category/devices" },
              { name: "Personal Care", href: "/category/personal-care" },
              { name: "First Aid & Wellness", href: "/category/first-aid" },
              { name: "Diabetes Care", href: "/category/diabetes" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-[#1b5e5d] transition flex items-center gap-1.5 group font-medium"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#1b5e5d] transition-transform group-hover:translate-x-0.5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Accreditations & Trust Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
            Trust & Compliance
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Fully FDA-approved pharmaceutical sourcing and HIPAA-compliant patient record security.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-[11px]">FDA Approved Sourcing</p>
                <p className="text-[10px] text-slate-500">100% Verified Medications</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-[11px]">HIPAA Compliant</p>
                <p className="text-[10px] text-slate-500">Encrypted Health Data</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-200 bg-slate-50 py-6 px-6 md:px-12 text-xs text-slate-600">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-1 text-slate-600 text-[11px]">
            <span>© {new Date().getFullYear()} ClinicSaaS Inc. All rights reserved. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>for better patient care.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-medium">
            <Link href="/privacy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-slate-900 transition">HIPAA Compliance</Link>
            <Link href="/fda-disclaimer" className="hover:text-slate-900 transition">FDA Disclaimer</Link>
          </div>

        </div>
      </div>

    </footer>
  );
}