"use client";
import { Header } from "@/components/common/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudentCornerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#2D0C1F] text-white">
      {/* 1. Global Header */}
      <Header />

      {/* 2. Dashboard Title Strip */}
      <div className="bg-[#4a1228] py-2 text-center border-t border-b border-orange-500/30">
        <h1 className="text-xl md:text-2xl font-bold text-[#e5cca9] tracking-widest uppercase font-serif">
          STUDENT DASHBOARD
        </h1>
      </div>

      {/* 3. Welcome Banner & User Details */}
      <div className="bg-[#5c1c38] p-4 md:px-8 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Photo & Welcome */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            {/* Placeholder for User Photo box as seen in design (white box) */}
            <div className="w-24 h-24 bg-[#FFFDD0] rounded-sm shadow-md shrink-0"></div>

            <h2 className="text-2xl md:text-3xl font-amaranath text-[#e5cca9] font-medium">
              Welcome Manisha Naskar
            </h2>
          </div>

          {/* Right: Batch Details & Status */}
          <div className="flex flex-col items-end gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Active</span>
            </div>

            <div className="text-right text-[10px] md:text-xs text-orange-100 space-y-1 font-mono">
              <p>
                <span className="text-orange-300 font-bold">Batch:</span>{" "}
                KAMA_OFL_1YR_BATCH-33/2024
              </p>
              <div className="flex gap-4 justify-end">
                <p>
                  <span className="text-orange-300 font-bold">Roll:</span> 229
                </p>
                <p>
                  <span className="text-orange-300 font-bold">Class Mode:</span>{" "}
                  ONLINE
                </p>
              </div>
              <div className="flex gap-4 justify-end">
                <p>
                  <span className="text-orange-300 font-bold">DAY:</span> TUE
                  THURS SAT
                </p>
                <p>
                  <span className="text-orange-300 font-bold">TIME:</span> 21:30
                  - 23:30
                </p>
              </div>
            </div>

            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-indigo-700 transition-colors mt-2">
              Join Live Class
            </button>
          </div>
        </div>
      </div>

      {/* 4. Main Content Area (Sidebar + Children) */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Fixed SIDEBAR */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-3">
          <SidebarLink
            href="/studentcorner/fees"
            label="Fees Structure & Exam Marks"
          />
          <SidebarLink
            href="/studentcorner/study-materials"
            label="Study Materials & Example"
          />
          <SidebarLink href="/studentcorner/profile" label="Profile" />
          <SidebarLink
            href="/studentcorner/videos"
            label="Class Recorded Video"
          />
          <SidebarLink href="/studentcorner/re-exam" label="Re-Exam Fees" />
          <SidebarLink href="/studentcorner/others-fees" label="Others Fees" />

          {/* Logout (pushed to bottom if needed, but here just listed) */}
          <div className="mt-8">
            <button className="w-full bg-[#e5cca9] hover:bg-[#d4b58e] text-[#2D0C1F] font-bold py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              Logout
            </button>
          </div>
        </aside>

        {/* Dynamic Page Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
             w-full text-left px-4 py-3 rounded-md font-semibold text-sm md:text-base shadow-md transition-all block
             ${
               isActive
                 ? "bg-[#8d5e68] text-[#e5cca9] border-l-4 border-[#e5cca9] shadow-inner"
                 : "bg-[#f3dcc0] text-[#4a1228] hover:bg-[#ffebd4] hover:pl-5"
             }
           `}
    >
      {label}
    </Link>
  );
}
