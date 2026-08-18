  "use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  Calendar, 
  Activity, 
  LogOut, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  FileText 
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is authenticated as Admin
    const userRole = localStorage.getItem("user_role");
    const storedName = localStorage.getItem("username");

    if (userRole !== "admin") {
      // Redirect to home/login if not admin
      router.push("/");
    } else {
      setAdminName(storedName || "Admin");
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("username");
    document.cookie = "user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-[#1b5e5d] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      
      {/* Top Admin Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-[#1b5e5d] rounded-xl flex items-center justify-center shadow-md shadow-teal-700/20">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">ClinicCare</h1>
              <p className="text-[10px] text-teal-700 uppercase font-semibold tracking-wider">Admin Control Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 font-medium hidden sm:inline-block">
              Logged in as: <strong className="text-slate-900">{adminName}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 rounded-lg text-xs font-semibold transition-all border border-slate-200 hover:border-rose-200 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Dashboard Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-slate-50/50">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#1b5e5d] to-teal-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg text-white">
          <div className="relative z-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Welcome back, {adminName}! 👋
            </h2>
            <p className="text-sm text-teal-100 max-w-xl">
              Manage clinic operations, review doctor schedules, track patient registrations, and monitor system activities.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Patients</span>
              <Users className="w-4 h-4 text-[#1b5e5d]" />
            </div>
            <p className="text-2xl font-bold text-slate-900">1,248</p>
            <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% from last month
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Appointments</span>
              <Calendar className="w-4 h-4 text-[#1b5e5d]" />
            </div>
            <p className="text-2xl font-bold text-slate-900">84</p>
            <span className="text-[11px] text-slate-500 font-medium">12 scheduled today</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Active Doctors</span>
              <Activity className="w-4 h-4 text-[#1b5e5d]" />
            </div>
            <p className="text-2xl font-bold text-slate-900">16</p>
            <span className="text-[11px] text-emerald-600 font-medium">All on schedule</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Reports Pending</span>
              <FileText className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900">5</p>
            <span className="text-[11px] text-amber-600 font-medium">Requires approval</span>
          </div>
        </div>

        {/* Recent Activity Table Preview */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1b5e5d]" />
              Recent Appointments
            </h3>
            <span className="text-xs font-semibold text-[#1b5e5d] hover:underline cursor-pointer">View all</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">Patient</th>
                  <th className="px-6 py-3.5">Doctor</th>
                  <th className="px-6 py-3.5">Department</th>
                  <th className="px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-semibold text-slate-900">Rahul Sharma</td>
                  <td className="px-6 py-4">Dr. Ananya Mehta</td>
                  <td className="px-6 py-4">Cardiology</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-semibold">
                      Confirmed
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-semibold text-slate-900">Priya Patel</td>
                  <td className="px-6 py-4">Dr. Rajesh Kumar</td>
                  <td className="px-6 py-4">Orthopedics</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-semibold">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-semibold text-slate-900">Mohammed Ali</td>
                  <td className="px-6 py-4">Dr. Sarah Khan</td>
                  <td className="px-6 py-4">Dermatology</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-semibold">
                      Confirmed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}