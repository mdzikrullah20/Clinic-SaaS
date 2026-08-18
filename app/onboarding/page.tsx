"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleComplete = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 text-center">
        <div className="h-12 w-12 bg-teal-50 text-[#1b5e5d] rounded-2xl flex items-center justify-center mx-auto">
          <Sparkles className="w-6 h-6" />
        </div>

        <div>
          <h1 className="text-2xl font-black text-slate-900">Setup Your Account</h1>
          <p className="text-xs text-slate-500 mt-1">Step {step} of 2 - Let's customize your profile.</p>
        </div>

        {step === 1 ? (
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-[#1b5e5d] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-teal-800 transition cursor-pointer"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <button
              onClick={handleComplete}
              className="w-full py-3 bg-[#1b5e5d] text-white rounded-xl text-sm font-bold hover:bg-teal-800 transition cursor-pointer"
            >
              Complete Onboarding
            </button>
          </div>
        )}
      </div>
    </div>
  );
}