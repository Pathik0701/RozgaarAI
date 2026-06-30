"use client";

import {
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  MapPin,
  Sparkles,
  User,
  XCircle,
} from "lucide-react";

export default function ApplicationsPage() {
  const applications = [
    {
      name: "Ramesh Kumar",
      role: "Electrician",
      location: "Delhi",
      job: "Electrician Needed",
      status: "pending",
    },
    {
      name: "Suresh Patel",
      role: "Plumber",
      location: "Mumbai",
      job: "Plumber for Site Work",
      status: "shortlisted",
    },
    {
      name: "Amit Sharma",
      role: "Helper",
      location: "Bangalore",
      job: "Construction Helper",
      status: "rejected",
    },
    {
      name: "Vikram Singh",
      role: "Electrician",
      location: "Delhi",
      job: "Electrician Needed",
      status: "pending",
    },
  ];

  const getStatusUI = (status: string) => {
    if (status === "pending") {
      return (
        <span className="flex items-center gap-2 text-yellow-600 font-semibold">
          <Clock size={16} /> Pending
        </span>
      );
    }

    if (status === "shortlisted") {
      return (
        <span className="flex items-center gap-2 text-green-600 font-semibold">
          <CheckCircle size={16} /> Shortlisted
        </span>
      );
    }

    return (
      <span className="flex items-center gap-2 text-red-600 font-semibold">
        <XCircle size={16} /> Rejected
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-[#FCF8F4]">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#5B1E05] to-[#8F3E13] py-12">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-4">

          <div className="rounded-2xl bg-white/20 p-4">
            <Sparkles className="text-white" />
          </div>

          <div>

            <h1 className="text-4xl font-black text-white">
              Applications
            </h1>

            <p className="text-white/80 mt-1">
              Manage all job applications in one place
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid gap-6">

          {applications.map((app, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* LEFT */}
                <div className="flex items-center gap-5">

                  <div className="h-14 w-14 rounded-2xl bg-[#F5E7DA] flex items-center justify-center">
                    <User className="text-[#8F3E13]" />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-[#2B0F05]">
                      {app.name}
                    </h2>

                    <p className="text-gray-500">
                      {app.role}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">

                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {app.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <BriefcaseBusiness size={14} />
                        {app.job}
                      </span>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">

                  {/* STATUS */}
                  <div>
                    {getStatusUI(app.status)}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-3">

                    <button className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition">
                      Accept
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
                      Reject
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
