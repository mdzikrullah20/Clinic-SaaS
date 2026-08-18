"use client";

import React from "react";
import { FileText, Download, Filter } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { title: "Monthly Financial Audit", date: "Aug 01, 2026", type: "Financial", status: "Ready" },
    { title: "Patient Demographics & Attendance", date: "Aug 10, 2026", type: "Analytics", status: "Ready" },
    { title: "Pharmacy Inventory & Sales", date: "Aug 15, 2026", type: "Inventory", status: "Processing" },
  ];

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Reports & Analytics</h1>
          <p className="text-xs text-slate-500">Download and review performance reports.</p>
        </div>
        <button className="px-4 py-2 bg-[#1b5e5d] text-white rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-teal-800 transition">
          <Filter className="w-4 h-4" /> Filter Reports
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase">
            <tr>
              <th className="p-4">Report Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date Generated</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {reports.map((report, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1b5e5d]" /> {report.title}
                </td>
                <td className="p-4">{report.type}</td>
                <td className="p-4">{report.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    report.status === "Ready" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-[#1b5e5d] font-semibold hover:underline flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> Export
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}