"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  UserCheck, 
  FileText, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Header from "../components/Footer";

export default function CreateAppointmentPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    appointmentDate: "",
    appointmentTime: "09:00 AM",
    doctor: "Dr. Smith",
    appointmentType: "General Routine Checkup",
    priority: "Normal",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Redirect back to appointments list after 1.5s preview delay
    setTimeout(() => {
      router.push("/appointments");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0a1128] font-sans">

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#5e6b82] hover:text-[#0a1128] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Appointments
          </Link>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
          
          {/* Header */}
          <div className="mb-8 pb-6 border-b border-[#e2e8f0]">
            <h1 className="text-2xl font-extrabold text-[#0a1128]">
              Book New Appointment
            </h1>
            <p className="text-xs text-[#5e6b82] mt-1">
              Schedule a visit for an existing patient or record a new consultation booking.
            </p>
          </div>

          {/* Success Banner */}
          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1128]">Appointment Created!</h3>
              <p className="text-xs text-[#5e6b82]">Redirecting back to the appointments dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Patient Selection Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Patient Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
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
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    placeholder="e.g. P-101"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  />
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Date *
                  </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    required
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium text-[#0a1128] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Time Slot *
                  </label>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  >
                    <option>09:00 AM</option>
                    <option>09:45 AM</option>
                    <option>10:30 AM</option>
                    <option>11:15 AM</option>
                    <option>01:15 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Doctor & Appointment Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-slate-400" /> Assigned Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  >
                    <option>Dr. Smith (General Practitioner)</option>
                    <option>Dr. Davis (Cardiology)</option>
                    <option>Dr. Wilson (Pediatrics)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a1128] mb-2">
                    Consultation Type
                  </label>
                  <select
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                  >
                    <option>General Routine Checkup</option>
                    <option>Dental Consultation</option>
                    <option>Follow-up Visit</option>
                    <option>Lab Work / Blood Test</option>
                  </select>
                </div>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-xs font-bold text-[#0a1128] mb-2">
                  Priority Status
                </label>
                <div className="flex gap-3">
                  {["Normal", "Urgent", "Emergency"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, priority: level }))}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        formData.priority === level
                          ? "bg-blue-50 border-[#1d4ed8] text-[#1d4ed8]"
                          : "bg-white border-[#e2e8f0] text-[#5e6b82] hover:bg-slate-50"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#0a1128] mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> Medical Notes / Reason for Visit
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Provide additional details regarding symptoms, history, or special instructions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0] bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8]"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e2e8f0]">
                <Link
                  href="/appointments"
                  className="px-5 py-2.5 rounded-xl border border-[#e2e8f0] text-xs font-bold text-[#5e6b82] hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" /> Save & Schedule
                </button>
              </div>

            </form>
          )}

        </div>
      </main>
    </div>
  );
}