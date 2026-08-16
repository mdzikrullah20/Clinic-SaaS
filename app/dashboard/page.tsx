"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  ArrowUpRight,
  MoreVertical,
  Search,
  Filter,
  Activity,
  FileText
} from "lucide-react";

export default function DashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Month");

  // Stat Card Data
  const stats = [
    {
      label: "Total Patients",
      value: "1,284",
      change: "+12.5%",
      isPositive: true,
      icon: Users,
      bgColor: "bg-blue-50",
      textColor: "text-[#1d4ed8]",
    },
    {
      label: "Appointments Today",
      value: "24",
      change: "+4 vs yesterday",
      isPositive: true,
      icon: Calendar,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      label: "Total Revenue",
      value: "$18,420",
      change: "+8.2%",
      isPositive: true,
      icon: DollarSign,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      label: "Pending Lab Reports",
      value: "7",
      change: "-2 from yesterday",
      isPositive: true,
      icon: Activity,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  // Upcoming Appointments
  const todayAppointments = [
    {
      id: "APT-101",
      patient: "Eleanor Pena",
      type: "General Routine Checkup",
      time: "09:00 AM",
      doctor: "Dr. Smith",
      status: "Confirmed",
      avatar: "EP",
    },
    {
      id: "APT-102",
      patient: "Cody Fisher",
      type: "Dental Consultation",
      time: "10:30 AM",
      doctor: "Dr. Smith",
      status: "In Progress",
      avatar: "CF",
    },
    {
      id: "APT-103",
      patient: "Jane Cooper",
      type: "Cardiology Follow-up",
      time: "01:15 PM",
      doctor: "Dr. Smith",
      status: "Pending",
      avatar: "JC",
    },
    {
      id: "APT-104",
      patient: "Robert Fox",
      type: "Blood Pressure Review",
      time: "03:00 PM",
      doctor: "Dr. Smith",
      status: "Confirmed",
      avatar: "RF",
    },
  ];

  // Recent Patient Activity
  const recentActivities = [
    {
      patient: "Sarah Jenkins",
      action: "New Prescription issued for Amoxicillin",
      time: "12 mins ago",
      icon: FileText,
      color: "bg-blue-50 text-blue-600",
    },
    {
      patient: "Michael Brown",
      action: "Invoice #INV-2024-089 paid ($210.00)",
      time: "45 mins ago",
      icon: DollarSign,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      patient: "Emily Davis",
      action: "Appointment rescheduled to Aug 18",
      time: "2 hours ago",
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#0a1128]">
      {/* Reusable Header Navigation */}

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title & Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1128]">
              Dashboard
            </h1>
            <p className="text-sm text-[#5e6b82] mt-1">
              Welcome back, <span className="font-bold text-[#0a1128]">Dr. Smith</span>. Here is your clinic overview for today.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-xl text-xs font-semibold text-[#5e6b82] shadow-sm hover:border-slate-300 focus:outline-none"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>

            <button className="flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95 whitespace-nowrap">
              <Plus className="w-4 h-4" /> New Appointment
            </button>
          </div>
        </div>

        {/* 4 Primary Key Performance Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5e6b82]">
                    {stat.label}
                  </span>
                  <div className={`p-2.5 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">
                    {stat.value}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Today's Appointments Table (2 Columns wide) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#0a1128]">
                  Today's Schedule
                </h2>
                <p className="text-xs text-[#5e6b82]">
                  Upcoming appointments scheduled for today
                </p>
              </div>

              <button className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-1">
                View All <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-[#e2e8f0] text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
                    <th className="px-6 py-3.5">Patient</th>
                    <th className="px-6 py-3.5">Consultation Type</th>
                    <th className="px-6 py-3.5">Time</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0] text-xs font-medium">
                  {todayAppointments.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1d4ed8] font-bold text-xs flex items-center justify-center shrink-0">
                            {app.avatar}
                          </div>
                          <div>
                            <span className="font-bold text-[#0a1128] block">{app.patient}</span>
                            <span className="text-[11px] text-[#5e6b82]">{app.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#5e6b82]">
                        {app.type}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#0a1128]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {app.time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          app.status === "Confirmed"
                            ? "bg-emerald-50 text-emerald-600"
                            : app.status === "In Progress"
                            ? "bg-blue-50 text-[#1d4ed8]"
                            : "bg-amber-50 text-amber-600"
                        }`}>
                          {app.status === "Confirmed" && <CheckCircle2 className="w-3 h-3" />}
                          {app.status === "Pending" && <AlertCircle className="w-3 h-3" />}
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-slate-400 hover:text-[#0a1128] rounded-lg hover:bg-slate-100 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Activity Feed & Quick Actions */}
          <div className="space-y-6">
            
            {/* Quick Actions Panel */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm">
              <h3 className="text-base font-bold text-[#0a1128] mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                  <Users className="w-5 h-5 text-[#1d4ed8] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#0a1128]">Add Patient</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-center group">
                  <FileText className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#0a1128]">New Prescription</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-purple-50 hover:border-purple-200 transition-all text-center group">
                  <DollarSign className="w-5 h-5 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#0a1128]">Create Invoice</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-amber-50 hover:border-amber-200 transition-all text-center group">
                  <Activity className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#0a1128]">Lab Request</span>
                </button>
              </div>
            </div>

            {/* Recent Clinic Activity */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm">
              <h3 className="text-base font-bold text-[#0a1128] mb-4">
                Recent Activity
              </h3>

              <div className="space-y-4">
                {recentActivities.map((act, i) => {
                  const ActivityIcon = act.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className={`p-2 rounded-xl shrink-0 ${act.color}`}>
                        <ActivityIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#0a1128]">
                          {act.patient}
                        </p>
                        <p className="text-[11px] text-[#5e6b82] truncate">
                          {act.action}
                        </p>
                        <span className="text-[10px] font-semibold text-slate-400 mt-0.5 block">
                          {act.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}