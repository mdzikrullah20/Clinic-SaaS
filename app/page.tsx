"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomePage from "./components/Homepage";

type UserData = {
  name: string;
  email: string;
  activePrescriptionsCount: number;
  lastOrderStatus: string;
};

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const userRole = localStorage.getItem("user_role");
    const storedUser = localStorage.getItem("user");

    if (userRole === "admin") {
      router.push("/admin");
      return;
    }

    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserData({
          name: parsed.name || "Patient",
          email: parsed.email || "",
          activePrescriptionsCount: parsed.activePrescriptionsCount || 1,
          lastOrderStatus: parsed.lastOrderStatus || "Delivered",
        });
      } catch (e) {
        console.error("User data parsing error:", e);
      }
    } else {
      setUserData({
        name: "Valued Patient",
        email: "patient@cliniccare.com",
        activePrescriptionsCount: 2,
        lastOrderStatus: "Processing",
      });
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 border-4 border-[#1b5e5d] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xs font-semibold text-slate-500">Loading ClinicCare Portal...</p>
        </div>
      </div>
    );
  }

  return <HomePage {...({ user: userData } as any)} />;
}