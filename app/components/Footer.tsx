"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  Bell, 
  Search, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut, 
  Building2,
  Calendar,
  Sparkles
} from "lucide-react";

interface HeaderProps {
  userRole?: "front-desk" | "doctor" | "admin";
  clinicName?: string;
  userName?: string;
}

export default function Header({
  userRole = "doctor",
  clinicName = "City Health Clinic",
  userName = "Dr. Sarah Jenkins"
}: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsCount] = useState(3);

  const getRoleBadgeColor = () => {
    switch (userRole) {
      case "doctor":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "admin":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "front-desk":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 text-white border-b border-slate-800 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Clinic Switcher */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight group-hover:text-slate-200 transition">
              ClinicSaaS
            </span>
          </Link>

          {/* Clinic Name Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            <Building2 className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-medium truncate max-w-[150px]">{clinicName}</span>
          </div>
        </div>

        {/* Global Quick Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search patient, phone, or MRN (Ctrl + K)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-800 transition"
            />
          </div>
        </div>

        {/* Right Action Icons & User Profile */}
        <div className="flex items-center gap-3.5">
          
          {/* Quick Date / Live Status (Optional) */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Calendar className="h-3.5 w-3.5" />
            <span>Today's OPD Active</span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          {/* Notifications Button */}
          <Link
            href="/notifications"
            className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {notificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 p-1.5 pr-2.5 rounded-xl hover:bg-slate-800 transition text-left"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white shadow-inner">
                {userName.charAt(0)}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-white leading-tight truncate max-w-[120px]">
                  {userName}
                </p>
                <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded border mt-0.5 ${getRoleBadgeColor()}`}>
                  {userRole.replace("-", " ")}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400 hidden sm:block" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-slate-800 border border-slate-700 rounded-xl shadow-xl shadow-black/40 py-1.5 z-50 text-xs">
                <div className="px-3 py-2 border-b border-slate-700 sm:hidden">
                  <p className="font-semibold text-white truncate">{userName}</p>
                  <p className="text-[10px] text-slate-400 capitalize">{userRole.replace("-", " ")}</p>
                </div>
                
                <Link
                  href="/admin/settings"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-slate-200 hover:bg-slate-700/60 hover:text-white transition"
                >
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  My Profile
                </Link>

                <Link
                  href="/admin/settings"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-slate-200 hover:bg-slate-700/60 hover:text-white transition"
                >
                  <Settings className="h-3.5 w-3.5 text-slate-400" />
                  Clinic Settings
                </Link>

                <div className="my-1 border-t border-slate-700/60" />

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    // Add logout handler here
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition text-left"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign Out
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}