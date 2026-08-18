"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Activity,
  Calendar,
  UserCheck,
  BookOpen,
  CalendarDays,
  PhoneCall,
  ShoppingBag,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function UserHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    // Get logged-in username from localStorage
    const storedUser = localStorage.getItem("username");
    setUsername(storedUser || "Patient");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie = "user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/login";
  };

  // Updated Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Doctor", href: "/doctors", icon: UserCheck },
    { name: "Appointments", href: "/appointments", icon: Calendar },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Events", href: "/events", icon: CalendarDays },
    { name: "Contact Us", href: "/contact", icon: PhoneCall },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 bg-[#1b5e5d] rounded-xl flex items-center justify-center shadow-md">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                ClinicCare
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? "bg-teal-50 text-[#1b5e5d] font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Notifications Button */}
            <Link
              href="/notifications"
              className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition relative"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </Link>

            {/* User Info Badge */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="h-8 w-8 bg-teal-100 text-[#1b5e5d] font-bold rounded-full flex items-center justify-center text-xs">
                {username?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-none">{username}</p>
                <p className="text-[10px] text-slate-400 font-medium">Patient</p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleLogout}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Mobile / Tablet Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {/* Mobile User Info */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-3">
            <div className="h-9 w-9 bg-teal-100 text-[#1b5e5d] font-bold rounded-full flex items-center justify-center text-xs">
              {username?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{username}</p>
              <p className="text-[10px] text-slate-500">Logged in as Patient</p>
            </div>
          </div>

          {/* Mobile Nav Links */}
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? "bg-teal-50 text-[#1b5e5d] font-bold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-[#1b5e5d]" />}
                <span>{link.name}</span>
              </Link>
            );
          })}

          {/* Mobile Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-3 flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-100 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      )}
    </header>
  );
}