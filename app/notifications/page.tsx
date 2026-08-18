"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Appointment Confirmed",
      msg: "Your appointment with Dr. Mehta is confirmed for 3:00 PM.",
      time: "10 mins ago",
      type: "success",
    },
    {
      id: 2,
      title: "System Maintenance Scheduled",
      msg: "Clinic SaaS will undergo routine maintenance tonight at 12:00 AM IST.",
      time: "2 hours ago",
      type: "info",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Notifications</h1>
        <p className="text-xs text-slate-500">Stay updated with real-time updates and system alerts.</p>
      </div>

      <div className="space-y-3">
        {notifications.map((item) => (
          <div key={item.id} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-start gap-3">
            {item.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
            )}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{item.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}