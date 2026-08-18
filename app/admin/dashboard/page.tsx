"use client";

import React from "react";
import { Users, Calendar, Activity, TrendingUp, DollarSign } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Dashboard Overview</h1>
        <p className="text-xs text-slate-500">Monitor overall clinic operations and key performance metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase">Total Patients</span>
            <Users className="w-4 h-4 text-[#1b5e5d]" />
          </div>
          <p className="text-2xl font-bold text-slate-900">1,248</p>
          <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +12% this month
          </span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase">Appointments</span>
            <Calendar className="w-4 h-4 text-[#1b5e5d]" />
          </div>
          <p className="text-2xl font-bold text-slate-900">84</p>
          <span className="text-[11px] text-slate-500 font-medium">12 scheduled today</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase">Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">₹45,200</p>
          <span className="text-[11px] text-emerald-600 font-medium">+8% vs last week</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase">Active Doctors</span>
            <Activity className="w-4 h-4 text-[#1b5e5d]" />
          </div>
          <p className="text-2xl font-bold text-slate-900">16</p>
          <span className="text-[11px] text-emerald-600 font-medium">All active</span>
        </div>
      </div>
    </div>
  );
}