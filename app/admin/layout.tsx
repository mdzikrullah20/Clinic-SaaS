"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Activity, LayoutDashboard, Calendar, Users, Receipt, Bell, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const role = localStorage.getItem("user_role");
    
    if (role !== "admin") {
      // Kick non-admin users back to login
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("username");
    document.cookie = "user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/login");
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-xs font-semibold">
        Verifying Admin Credentials...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row text-slate-800">
      
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-5 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <Link href="/admin" className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="h-8 w-8 bg-[#1b5e5d] rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span>Clinic Admin</span>
          </Link>

          <nav className="space-y-1 text-xs">
            <Link
              href="/admin"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-slate-800 text-white font-semibold"
            >
              <LayoutDashboard className="w-4 h-4 text-teal-400" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/appointments"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
            >
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Appointments</span>
            </Link>

            <Link
              href="/patients"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
            >
              <Users className="w-4 h-4 text-slate-400" />
              <span>Patients</span>
            </Link>

            <Link
              href="/billing"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
            >
              <Receipt className="w-4 h-4 text-slate-400" />
              <span>Billing</span>
            </Link>
          </nav>
        </div>

        {/* Sign Out Button */}
        <div className="pt-6 border-t border-slate-800 text-xs">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-800 text-rose-400 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Dashboard Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}