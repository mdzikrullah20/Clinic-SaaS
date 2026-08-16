"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  DollarSign, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Sparkles,
  CreditCard,
  FileText
} from "lucide-react";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export default function CreateInvoicePage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "General Routine Consultation", quantity: 1, price: 150 },
  ]);

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now().toString(), description: "", quantity: 1, price: 0 },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length === 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleItemChange = (
    id: string, 
    field: keyof InvoiceItem, 
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.price || 0), 
    0
  );
  const tax = subtotal * 0.05; // 5% tax preview
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      router.push("/billing");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1128] font-sans">

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/billing"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#5e6b82] hover:text-[#0a1128] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Billing
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8 pb-6 border-b border-[#e2e8f0]">
            <h1 className="text-2xl font-extrabold text-[#0a1128]">
              Create New Invoice
            </h1>
            <p className="text-xs text-[#5e6b82] mt-1">
              Generate an invoice for patient consultations, procedures, or lab services.
            </p>
          </div>

          {/* Success Banner */}
          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1128]">Invoice Generated!</h3>
              <p className="text-xs text-[#5e6b82]">
                Redirecting back to the billing dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Eleanor Pena"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2">
                    Patient ID <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="e.g. P-101"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  />
                </div>
              </div>

              {/* Due Date & Payment Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Payment Due Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium text-[#0a1128] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-slate-400" /> Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  >
                    <option>Credit Card</option>
                    <option>Cash</option>
                    <option>Insurance</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="pt-4 border-t border-[#e2e8f0]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-[#0a1128] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#1d4ed8]" /> Invoice Services & Items
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="flex items-center gap-1 text-xs font-bold text-[#1d4ed8] hover:underline"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Service
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-[#e2e8f0]"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Service description (e.g., Dental Consultation)"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                        className="flex-1 px-3 py-2 bg-white rounded-lg border border-[#e2e8f0] text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />

                      <div className="w-20">
                        <input
                          type="number"
                          min="1"
                          required
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, "quantity", parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-[#e2e8f0] text-xs text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>

                      <div className="w-28 relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          required
                          value={item.price}
                          onChange={(e) => handleItemChange(item.id, "price", parseFloat(e.target.value) || 0)}
                          className="w-full pl-6 pr-3 py-2 bg-white rounded-lg border border-[#e2e8f0] text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        disabled={items.length === 1}
                        className="p-2 text-slate-400 hover:text-rose-600 disabled:opacity-30 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Calculation Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-[#e2e8f0] space-y-2 max-w-xs ml-auto text-xs">
                <div className="flex justify-between text-[#5e6b82]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#0a1128]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5e6b82]">
                  <span>Estimated Tax (5%)</span>
                  <span className="font-bold text-[#0a1128]">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#0a1128] pt-2 border-t border-[#e2e8f0]">
                  <span>Total Due</span>
                  <span className="text-[#1d4ed8]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e2e8f0]">
                <Link
                  href="/billing"
                  className="px-5 py-2.5 rounded-xl border border-[#e2e8f0] text-xs font-bold text-[#5e6b82] hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" /> Save & Issue Invoice
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}