"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Bell, 
  Search, 
  ChevronDown,
  Activity
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Appointments", href: "/appointments" },
  { name: "Patients", href: "/patients" },
  { name: "Billing", href: "/billing" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Left: Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-[#0a1128] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#1d4ed8] transition-colors">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-[18px] font-extrabold text-[#0a1128] tracking-tight">
                ClinicSaaS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 ml-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                      isActive 
                        ? "bg-blue-50 text-[#1d4ed8]" 
                        : "text-[#5e6b82] hover:bg-slate-50 hover:text-[#0a1128]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Actions & Profile */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Button */}
            <button className="p-2.5 text-[#5e6b82] hover:bg-slate-50 hover:text-[#0a1128] rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-2.5 text-[#5e6b82] hover:bg-slate-50 hover:text-[#0a1128] rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-6 w-px bg-[#e2e8f0] mx-2"></div>

            {/* Profile Dropdown Toggle */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 p-1.5 pr-3 bg-white border border-[#e2e8f0] hover:border-[#cbd5e1] rounded-full transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#1d4ed8] font-bold text-sm">
                  Dr
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-[#0a1128]">Dr. Smith</span>
                  <ChevronDown className="w-4 h-4 text-[#94a3b8]" />
                </div>
              </button>

              {/* Simple Profile Dropdown (Optional) */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e2e8f0] rounded-xl shadow-lg py-2 z-50">
                  <Link href="/settings" className="block px-4 py-2 text-sm text-[#5e6b82] hover:bg-slate-50 hover:text-[#0a1128]">Settings</Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">Log out</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <button className="relative text-[#5e6b82]">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0a1128] p-1 -mr-1"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-[15px] font-bold ${
                    isActive 
                      ? "bg-blue-50 text-[#1d4ed8]" 
                      : "text-[#5e6b82] hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1d4ed8] font-bold">
                  Dr
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#0a1128]">Dr. Smith</p>
                  <p className="text-[12px] text-[#5e6b82]">smith@clinic.com</p>
                </div>
              </div>
              <Link href="/settings" className="block px-4 py-3 mt-2 text-[15px] font-bold text-[#5e6b82] hover:bg-slate-50 rounded-xl">Settings</Link>
              <button className="w-full text-left px-4 py-3 text-[15px] font-bold text-red-600 hover:bg-red-50 rounded-xl">Log out</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}