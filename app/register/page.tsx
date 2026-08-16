"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegisterClinicPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    clinicName: "",
    specialty: "",
    address: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Registration logic goes here
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* Main Registration Card */}
      <div className="w-full max-w-[640px] bg-white rounded-xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10">
        
        <h1 className="text-[22px] font-extrabold text-[#0a1128] tracking-tight mb-6">
          Register your clinic
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* --- OWNER DETAILS SECTION --- */}
          <div>
            <h2 className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-4">
              Owner Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>

            </div>
          </div>

          {/* --- CLINIC DETAILS SECTION --- */}
          <div>
            <h2 className="text-[12px] font-extrabold text-[#475569] uppercase tracking-wider mb-4">
              Clinic Details
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Clinic Name */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Clinic Name
                </label>
                <input
                  type="text"
                  name="clinicName"
                  required
                  value={formData.clinicName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>

              {/* Specialty / Type */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  Specialty / Type
                </label>
                <input
                  type="text"
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
                />
              </div>
            </div>

            {/* Clinic Address */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                Clinic Address
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-white border border-[#e2e8f0] rounded-md text-sm text-[#0a1128] focus:outline-none focus:ring-1 focus:ring-[#204b77] focus:border-[#204b77] transition-colors"
              />
            </div>
          </div>

          {/* --- SUBMISSION SECTION --- */}
          <div className="space-y-4 pt-2">
            
            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="agreeTerms"
                required
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-3.5 h-3.5 rounded-sm border-slate-300 text-[#204b77] focus:ring-[#204b77] cursor-pointer"
              />
              <span className="text-[13px] text-[#475569] group-hover:text-[#0a1128] transition-colors">
                I agree to the Terms of Service and Data Privacy Policy
              </span>
            </label>

            {/* Action Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#204b77] hover:bg-[#163657] text-white py-3 rounded-md text-sm font-bold shadow-sm transition-all duration-200 disabled:opacity-70"
            >
              {isLoading ? "Creating Account..." : "Create Account & Start Free Trial"}
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-[13px] text-[#64748b] pt-1">
            Already registered?{" "}
            <Link 
              href="/login" 
              className="font-bold text-[#204b77] hover:text-[#0a1128] transition-colors"
            >
              Log in
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}