"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  UserPlus, 
  Phone, 
  Mail, 
  Calendar, 
  MoreVertical, 
  FileText, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGender, setFilterGender] = useState("All");

  const patients = [
    {
      id: "P-101",
      name: "Eleanor Pena",
      age: 34,
      gender: "Female",
      phone: "+1 (555) 234-5678",
      email: "eleanor.pena@example.com",
      bloodType: "O+",
      lastVisit: "Aug 10, 2026",
      condition: "Hypertension",
      status: "Active",
      avatar: "EP",
    },
    {
      id: "P-102",
      name: "Cody Fisher",
      age: 42,
      gender: "Male",
      phone: "+1 (555) 876-5432",
      email: "cody.fisher@example.com",
      bloodType: "A-",
      lastVisit: "Jul 28, 2026",
      condition: "Type 2 Diabetes",
      status: "Active",
      avatar: "CF",
    },
    {
      id: "P-103",
      name: "Jane Cooper",
      age: 29,
      gender: "Female",
      phone: "+1 (555) 345-6789",
      email: "jane.cooper@example.com",
      bloodType: "B+",
      lastVisit: "Aug 02, 2026",
      condition: "Asthma",
      status: "Active",
      avatar: "JC",
    },
    {
      id: "P-104",
      name: "Robert Fox",
      age: 58,
      gender: "Male",
      phone: "+1 (555) 901-2345",
      email: "robert.fox@example.com",
      bloodType: "AB+",
      lastVisit: "Jun 15, 2026",
      condition: "Routine Checkup",
      status: "Inactive",
      avatar: "RF",
    },
  ];

  // Search and Filter logic
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGender = 
      filterGender === "All" || patient.gender === filterGender;

    return matchesSearch && matchesGender;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#0a1128]">

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Title & Primary Action */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1128]">
              Patients Directory
            </h1>
            <p className="text-xs sm:text-sm text-[#5e6b82] mt-1">
              Manage patient records, health histories, and contact information.
            </p>
          </div>

          <Link
            href="/patients/create"
            className="flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <UserPlus className="w-4 h-4" /> Add New Patient
          </Link>
        </div>

        {/* Search, Filter & Controls */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, ID, or email..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#e2e8f0] bg-slate-50/50 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-[#5e6b82]">Gender:</span>
            </div>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="px-3 py-2 bg-slate-50/50 border border-[#e2e8f0] rounded-xl text-xs font-semibold text-[#0a1128] focus:outline-none"
            >
              <option value="All">All Genders</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </div>

        {/* Patients Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card Info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1d4ed8] font-bold text-sm flex items-center justify-center shrink-0">
                        {patient.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[#0a1128]">{patient.name}</h3>
                        <span className="text-[11px] font-medium text-slate-400">ID: {patient.id}</span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      patient.status === "Active" 
                        ? "bg-emerald-50 text-emerald-600" 
                        : "bg-slate-100 text-[#5e6b82]"
                    }`}>
                      {patient.status}
                    </span>
                  </div>

                  {/* Medical Badges */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-bold text-[#5e6b82]">
                      {patient.gender}, {patient.age} yrs
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-red-50 text-[11px] font-bold text-red-600">
                      Blood: {patient.bloodType}
                    </span>
                  </div>

                  {/* Contact & Medical Details */}
                  <div className="space-y-2.5 text-xs text-[#5e6b82]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-[#0a1128]">{patient.condition}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Last visit: {patient.lastVisit}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <button className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Medical Record
                  </button>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-[#e2e8f0]">
              <p className="text-sm font-bold text-[#0a1128]">No patients found</p>
              <p className="text-xs text-[#5e6b82] mt-1">Try adjusting your search query or filter options.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}