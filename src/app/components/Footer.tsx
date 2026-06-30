import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#431302] text-white mt-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-2">

              <div className="rounded-xl bg-white/10 p-2">
                <BriefcaseBusiness />
              </div>

              <span className="text-2xl font-black">
                Rozgaar<span className="text-[#F6C98F]">AI</span>
              </span>

            </div>

            <p className="mt-4 text-sm text-white/70 leading-6">
              AI-powered employment platform connecting skilled workers
              with trusted employers across India.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="font-bold mb-4">Quick Links</h3>

            <div className="space-y-2 text-white/70 text-sm">

              <Link href="/" className="block hover:text-white">
                Home
              </Link>

              <Link href="/jobs" className="block hover:text-white">
                Jobs
              </Link>

              <Link href="/dashboard" className="block hover:text-white">
                Dashboard
              </Link>

              <Link href="/ai-assistant" className="block hover:text-white">
                AI Assistant
              </Link>

            </div>

          </div>

          {/* FEATURES */}
          <div>

            <h3 className="font-bold mb-4">Features</h3>

            <div className="space-y-2 text-white/70 text-sm">

              <p>AI Job Matching</p>
              <p>Verified Employers</p>
              <p>Fair Wage System</p>
              <p>Multilingual Support</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-bold mb-4">Contact</h3>

            <div className="space-y-3 text-white/70 text-sm">

              <div className="flex items-center gap-2">
                <Mail size={16} />
                support@rozgaarai.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 99999 99999
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                India
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-sm">
            © 2026 Rozgaar AI. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-white/60 text-sm">

            <Sparkles size={14} />
            Built for connecting India’s workforce

          </div>

        </div>

      </div>

    </footer>
  );
}
