"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserHeader from "./components/UserHeader"; // Path to your UserHeader file
import LoginPage from "./login/page"; // Path to your LoginPage file
import { Calendar, UserCheck, Shield, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Session role check karna
    const userRole = localStorage.getItem("user_role");

    if (userRole === "admin") {
      // Rule: Admin ko seedha Admin Dashboard par bhejo
      router.push("/admin");
    } else {
      setRole(userRole);
      setLoading(false);
    }
  }, [router]);

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-[#1b5e5d] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 1. Unauthenticated -> Login Page Show Karo
  if (!role) {
    return <LoginPage />;
  }

  // 2. Normal User Logged In -> Home Page with UserHeader Show Karo
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Aapka Custom UserHeader */}
      <UserHeader />

      {/* Main Home Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="bg-gradient-to-br from-[#1b5e5d] to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-400/20 text-teal-200 rounded-full text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" /> Healthcare Portal
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Welcome to ClinicCare Portal
            </h1>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed">
              Book consultations with top doctors, manage medical records, read expert health blogs, and order products directly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="h-10 w-10 bg-teal-50 text-[#1b5e5d] rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Appointments</h3>
            <p className="text-xs text-slate-500">Schedule or reschedule consultations easily.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="h-10 w-10 bg-teal-50 text-[#1b5e5d] rounded-xl flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Find Doctors</h3>
            <p className="text-xs text-slate-500">Browse specialist profiles and availability.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="h-10 w-10 bg-teal-50 text-[#1b5e5d] rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Medical Shop</h3>
            <p className="text-xs text-slate-500">Order healthcare products and supplements.</p>
          </div>
        </div>
      </main>
    </div>
  );
}