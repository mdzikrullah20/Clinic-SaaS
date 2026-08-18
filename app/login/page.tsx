"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const cleanIdentifier = identifier.trim();

      // 1. ADMIN LOGIN CHECK
      if (cleanIdentifier === "zikrullah" && password === "zikrullah") {
        localStorage.setItem("user_role", "admin");
        localStorage.setItem("username", "zikrullah");
        document.cookie = "user_role=admin; path=/";
        setIsLoading(false);
        router.push("/admin");
      }
      // 2. NORMAL USER LOGIN CHECK
      else if (cleanIdentifier.length > 0 && password.length > 0) {
        localStorage.setItem("user_role", "user");
        localStorage.setItem("username", cleanIdentifier);
        document.cookie = "user_role=user; path=/";
        setIsLoading(false);
        window.location.href = "/"; // Triggers page refresh to load Home with UserHeader
      } 
      // 3. INVALID INPUT
      else {
        setIsLoading(false);
        setError("Please enter a valid phone/email and password.");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* Main Glass/Card Container */}
      <div className="w-full max-w-[1040px] flex flex-col md:flex-row bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden border border-slate-100 min-h-auto md:min-h-[600px]">
        
        {/* Left Column: Login Form */}
        <div className="w-full md:w-[48%] px-6 py-10 sm:px-12 sm:py-14 lg:px-16 flex flex-col justify-center relative z-30 bg-white">
          
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h1 className="text-[26px] sm:text-[32px] font-extrabold text-[#0a1128] tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[#5e6b82] font-medium">
              Please enter your details to sign in.
            </p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {/* Username/Email Field */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[10px] sm:text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
                Phone number, email or username
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="zikrullah or your name/email"
                className="w-full px-4 py-3 sm:py-3.5 bg-white border border-[#e2e8f0] rounded-xl sm:rounded-[14px] text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-[10px] sm:text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 sm:py-3.5 bg-white border border-[#e2e8f0] rounded-xl sm:rounded-[14px] text-sm text-[#0a1128] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1 sm:pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="peer appearance-none w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] border border-[#cbd5e1] rounded-[4px] bg-white checked:bg-[#0a1128] checked:border-[#0a1128] focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
                  />
                  <svg className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#334155] group-hover:text-[#0a1128] transition-colors">Remember me</span>
              </label>
              
              <Link href="/forgot-password" className="text-[13px] sm:text-[14px] font-bold text-[#1d4ed8] hover:text-[#1e3a8a] transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 sm:mt-4 bg-[#0a1128] hover:bg-[#111c3d] text-white py-3 sm:py-3.5 rounded-xl sm:rounded-[14px] text-[14px] sm:text-[15px] font-bold shadow-md transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex justify-center items-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging In...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 sm:my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e2e8f0]" />
            </div>
            <div className="relative flex justify-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
              <span className="bg-white px-4">Or</span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full bg-white border border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-slate-50 text-[#0a1128] py-3 sm:py-3.5 rounded-xl sm:rounded-[14px] text-[14px] sm:text-[15px] font-semibold shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="mt-6 sm:mt-8 text-center text-[13px] sm:text-[14px] text-[#5e6b82] font-medium">
            New clinic?{" "}
            <Link href="/register" className="font-bold text-[#1d4ed8] hover:text-[#1e3a8a] transition-colors hover:underline underline-offset-4">
              Register your clinic
            </Link>
          </p>
        </div>

        {/* Right Column: Illustration & Deep Wavy Mask (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-[52%] relative items-center justify-center bg-slate-900">
          
          {/* Deep Wavy SVG Overlay */}
          <svg 
            viewBox="0 0 200 800" 
            preserveAspectRatio="none"
            className="absolute top-0 bottom-0 -left-[2px] w-24 md:w-32 lg:w-40 h-full text-white z-20 drop-shadow-[15px_0_20px_rgba(0,0,0,0.07)]"
            fill="currentColor"
          >
            <path d="M0,0 L160,0 C80,150 15,250 15,400 C15,550 170,650 120,800 L0,800 Z" />
          </svg>

          {/* High Quality Abstract Image Background */}
          <div className="absolute inset-0 w-full h-full z-10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Clinic Management"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-slate-900/20 mix-blend-multiply" />
          </div>

        </div>
      </div>
    </div>
  );
}