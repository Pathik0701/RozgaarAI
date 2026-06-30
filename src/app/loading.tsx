"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FCF8F4]">

      <div className="flex flex-col items-center">

        <div className="relative flex h-28 w-28 items-center justify-center">

          <div className="absolute h-28 w-28 animate-ping rounded-full bg-[#F3D9C4] opacity-30"></div>

          <div className="absolute h-24 w-24 animate-spin rounded-full border-[5px] border-[#E7D3C2] border-t-[#5B1E05]"></div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">

            <span className="text-3xl">🤝</span>

          </div>

        </div>

        <h1 className="mt-8 text-4xl font-black text-[#5B1E05]">
          RozgaarAI
        </h1>

        <p className="mt-3 text-[#7A726C]">
          Building Careers. Strengthening Bharat.
        </p>

        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-[#EBD9CB]">

          <div className="h-full w-full animate-[loading_2s_linear_infinite] rounded-full bg-[#8F3E13]"></div>

        </div>

      </div>

    </div>
  );
}
