"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleSendOtp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSendingOtp(true);
    // Logic to trigger WhatsApp/SMS OTP goes here
    setTimeout(() => setIsSendingOtp(false), 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResetting(true);
    // Logic to verify OTP and update password goes here
    setTimeout(() => setIsResetting(false), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* Centered Auth Card */}
      <div className="w-full max-w-[440px] bg-white rounded-xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[22px] font-extrabold text-[#0a1128] tracking-tight mb-2">
            Reset your password
          </h1>
          <p className="text-[13px] text-[#5e6b82] leading-relaxed pr-4">
            Enter your registered phone number. We&apos;ll send an OTP via WhatsApp/SMS.
          </p>
        </div>

        <form onSubmit={handleResetPassword} className="space-y-4">
          
          {/* Section 1: Phone Number & Send OTP */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 98765 43210"
              className="w-full px-3.5 py-2.5 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1a3b5c] focus:border-[#1a3b5c] transition-colors"
            />
          </div>

          <button
            type="button"
            onClick={handleSendOtp}
            disabled={isSendingOtp || !phoneNumber}
            className="w-full bg-[#204b77] hover:bg-[#163657] text-white py-2.5 rounded-md text-sm font-bold transition-all duration-200 disabled:opacity-70"
          >
            {isSendingOtp ? "Sending..." : "Send OTP"}
          </button>

          {/* Divider Text */}
          <div className="pt-2 pb-1">
            <p className="text-[13px] text-[#5e6b82]">
              Step 2 — after OTP is sent:
            </p>
          </div>

          {/* Section 2: OTP and New Passwords */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
              Enter OTP
            </label>
            <input
              type="text"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="6-digit code"
              maxLength={6}
              className="w-full px-3.5 py-2.5 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1a3b5c] focus:border-[#1a3b5c] transition-colors tracking-wide"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
              New Password
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1a3b5c] focus:border-[#1a3b5c] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#1a3b5c] focus:border-[#1a3b5c] transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-4">
            <button
              type="submit"
              disabled={isResetting || !otp || !newPassword || !confirmPassword}
              className="w-full bg-[#204b77] hover:bg-[#163657] text-white py-2.5 rounded-md text-sm font-bold transition-all duration-200 disabled:opacity-70"
            >
              {isResetting ? "Resetting..." : "Reset Password"}
            </button>

            <Link 
              href="/login" 
              className="block text-center text-[13px] font-bold text-[#204b77] hover:text-[#0a1128] transition-colors"
            >
              Back to Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}