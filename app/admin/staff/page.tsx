"use client";

import React from "react";
import { UserPlus, Mail, Shield } from "lucide-react";

export default function StaffPage() {
  const staffMembers = [
    { name: "Dr. Ananya Mehta", role: "Senior Cardiologist", email: "ananya@cliniccare.com", status: "Active" },
    { name: "Dr. Rajesh Kumar", role: "Orthopedic Surgeon", email: "rajesh@cliniccare.com", status: "Active" },
    { name: "Sunita Sharma", role: "Head Receptionist", email: "sunita@cliniccare.com", status: "On Leave" },
  ];

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Staff Management</h1>
          <p className="text-xs text-slate-500">Manage doctors, nurses, and administrative personnel.</p>
        </div>
        <button className="px-4 py-2 bg-[#1b5e5d] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-teal-800 transition">
          <UserPlus className="w-4 h-4" /> Add New Staff
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {staffMembers.map((member, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                <p className="text-xs text-teal-700 font-medium">{member.role}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                member.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
              }`}>
                {member.status}
              </span>
            </div>
            <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-100">
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {member.email}</p>
              <p className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-slate-400" /> Authorized Access</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}