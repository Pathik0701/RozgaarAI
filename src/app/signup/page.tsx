"use client";

import Link from "next/link";

import {
  BriefcaseBusiness,
  Lock,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("worker");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FCF8F4]">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-[#F5E7DA] p-4">
              <Sparkles className="text-[#8F3E13]" />
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-black text-[#2B0F05]">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">Join Rozgaar AI today</p>
        </div>

        {/* Role Selection */}
        <div className="mt-8">
          <p className="mb-2 text-sm font-semibold">I am a</p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setRole("worker")}
              className={`flex items-center justify-center gap-2 rounded-2xl border p-4 font-semibold transition ${
                role === "worker"
                  ? "bg-[#5B1E05] text-white"
                  : "bg-white text-[#5B1E05]"
              }`}
            >
              <User size={18} />
              Worker
            </button>

            <button
              onClick={() => setRole("employer")}
              className={`flex items-center justify-center gap-2 rounded-2xl border p-4 font-semibold transition ${
                role === "employer"
                  ? "bg-[#5B1E05] text-white"
                  : "bg-white text-[#5B1E05]"
              }`}
            >
              <BriefcaseBusiness size={18} />
              Employer
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <Input icon={<User size={18} />} placeholder="First Name" />

            <Input icon={<User size={18} />} placeholder="Last Name" />
          </div>

          {/* Email */}
          <Input icon={<Mail size={18} />} placeholder="Email" />

          {/* Phone */}
          <Input icon={<Phone size={18} />} placeholder="Phone Number" />

          {/* Password */}
          <Input
            icon={<Lock size={18} />}
            placeholder="Password"
            type="password"
          />

          {/* Submit */}
          <button className="w-full rounded-2xl bg-[#5B1E05] py-4 font-semibold text-white transition hover:bg-[#3f1203]">
            Create Account
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="cursor-pointer font-semibold text-[#8F3E13]"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

function Input({
  icon,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border p-4">
      <div className="text-[#8F3E13]">{icon}</div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none"
      />
    </div>
  );
}
