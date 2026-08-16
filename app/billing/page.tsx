"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CreditCard, 
  Download, 
  Search, 
  Filter, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  ArrowUpRight,
  Receipt
} from "lucide-react";

export default function BillingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const billingStats = [
    {
      label: "Total Revenue (MTD)",
      value: "$18,420.00",
      change: "+8.2% vs last month",
      isPositive: true,
      icon: DollarSign,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      label: "Outstanding Invoices",
      value: "$2,150.00",
      change: "4 invoices pending",
      isPositive: false,
      icon: Clock,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      label: "Overdue Payments",
      value: "$420.00",
      change: "1 invoice overdue",
      isPositive: false,
      icon: AlertCircle,
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
    },
  ];

  const invoices = [
    {
      id: "INV-2026-001",
      patient: "Eleanor Pena",
      patientId: "P-101",
      service: "General Routine Consultation",
      amount: "$150.00",
      date: "Aug 10, 2026",
      dueDate: "Aug 24, 2026",
      status: "Paid",
      paymentMethod: "Credit Card",
    },
    {
      id: "INV-2026-002",
      patient: "Cody Fisher",
      patientId: "P-102",
      service: "Dental Cleaning & X-Ray",
      amount: "$320.00",
      date: "Aug 12, 2026",
      dueDate: "Aug 26, 2026",
      status: "Pending",
      paymentMethod: "Insurance",
    },
    {
      id: "INV-2026-003",
      patient: "Jane Cooper",
      patientId: "P-103",
      service: "Cardiology Follow-Up",
      amount: "$210.00",
      date: "Aug 14, 2026",
      dueDate: "Aug 28, 2026",
      status: "Paid",
      paymentMethod: "Cash",
    },
    {
      id: "INV-2026-004",
      patient: "Robert Fox",
      patientId: "P-104",
      service: "Blood Work & Lab Analysis",
      amount: "$420.00",
      date: "Jul 28, 2026",
      dueDate: "Aug 11, 2026",
      status: "Overdue",
      paymentMethod: "Pending",
    },
  ];

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch =
      inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.service.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || inv.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#0a1128]">

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header & Main Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1128]">
              Billing & Invoices
            </h1>
            <p className="text-xs sm:text-sm text-[#5e6b82] mt-1">
              Track revenue, process payments, and manage patient invoices.
            </p>
          </div>

          {/* Connected Create Invoice Button */}
          <Link
            href="/billing/create"
            className="flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" /> Create Invoice
          </Link>
        </div>

        {/* Financial Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {billingStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5e6b82]">
                    {stat.label}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] mt-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-semibold text-[#5e6b82] mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by invoice ID, patient name, or service..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#e2e8f0] bg-slate-50/50 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-[#5e6b82]">Status:</span>
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50/50 border border-[#e2e8f0] rounded-xl text-xs font-semibold text-[#0a1128] focus:outline-none"
            >
              <option value="All">All Invoices</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-[#e2e8f0] text-[11px] font-bold text-[#5e6b82] uppercase tracking-wider">
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date / Due</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0] text-xs font-medium">
                {filteredInvoices.length > 0 ? (
                  filteredInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Receipt className="w-4 h-4 text-slate-400" />
                          <span className="font-bold text-[#0a1128]">{inv.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <span className="font-bold text-[#0a1128] block">{inv.patient}</span>
                          <span className="text-[11px] text-[#5e6b82]">ID: {inv.patientId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#5e6b82]">
                        {inv.service}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#0a1128]">
                        {inv.amount}
                      </td>
                      <td className="px-6 py-4 text-[#5e6b82]">
                        <div>
                          <span className="block text-[#0a1128]">{inv.date}</span>
                          <span className="text-[11px] text-slate-400">Due: {inv.dueDate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          inv.status === "Paid"
                            ? "bg-emerald-50 text-emerald-600"
                            : inv.status === "Pending"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-rose-50 text-rose-600"
                        }`}>
                          {inv.status === "Paid" && <CheckCircle2 className="w-3 h-3" />}
                          {inv.status === "Pending" && <Clock className="w-3 h-3" />}
                          {inv.status === "Overdue" && <AlertCircle className="w-3 h-3" />}
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            title="Download PDF"
                            className="p-1.5 text-slate-400 hover:text-[#0a1128] rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-0.5">
                            View <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                      No invoices matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}