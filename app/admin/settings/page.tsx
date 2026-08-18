"use client";

import React, { useState } from "react";
import { Save, Building, Bell, Lock } from "lucide-react";

export default function SettingsPage() {
  const [clinicName, setClinicName] = useState("ClinicCare Healthcare");

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Admin Settings</h1>
        <p className="text-xs text-slate-500">Manage clinic preferences, security, and notification settings.</p>
      </div>

      <div className="max-w-3xl bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Building className="w-4 h-4 text-[#1b5e5d]" /> Clinic Profile
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Clinic Name</label>
            <input 
              type="text" 
              value={clinicName} 
              onChange={(e) => setClinicName(e.target.value)} 
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
        </div>

        <hr className="border-slate-100" />

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#1b5e5d]" /> Notifications
          </h2>
          <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#1b5e5d] focus:ring-0" />
            Send email notifications for new appointment bookings
          </label>
        </div>

        <hr className="border-slate-100" />

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#1b5e5d]" /> Security
          </h2>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50">
            Change Admin Password
          </button>
        </div>

        <div className="pt-2">
          <button className="px-6 py-2.5 bg-[#1b5e5d] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-teal-800 transition">
            <Save className="w-4 h-4" /> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}