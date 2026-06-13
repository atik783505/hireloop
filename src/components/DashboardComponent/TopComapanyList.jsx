import React from "react";
import { Button, Card, Link } from "@heroui/react";
import { Cube, Thunderbolt } from "@gravity-ui/icons";

export default function TopCompanies() {
  // ১. ইমেজ অনুযায়ী ডাইনামিক কোম্পানি ডেটা
  const companies = [
    {
      id: 1,
      name: "Google Inc.",
      category: "Technology",
      location: "Mountain View",
      activeJobs: 24,
      iconType: "image",
      iconUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&auto=format&fit=crop&q=60", // প্লেসহোল্ডার ইমেজ টেকনোলজির জন্য
    },
    {
      id: 2,
      name: "Meta Platforms",
      category: "Social Media",
      location: "Menlo Park",
      activeJobs: 18,
      iconType: "image",
      iconUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&auto=format&fit=crop&q=60", // প্লেসহোল্ডার সোশাল মিডিয়ার জন্য
    },
    {
      id: 3,
      name: "Stripe",
      category: "Fintech",
      location: "San Francisco",
      activeJobs: 12,
      iconType: "icon",
      icon: Cube, // GravityUI আইকন স্ট্রাইপের লোগোর মতো কিউব
    },
    {
      id: 4,
      name: "Tesla",
      category: "Automotive",
      location: "Austin",
      activeJobs: 31,
      iconType: "icon",
      icon: Thunderbolt, // টেসলার ইলেকট্রিক থিমের জন্য থান্ডারবোল্ট আইকন
    },
  ];

  return (
    <Card 
      className="w-full max-w-[420px] bg-[#111113] border border-neutral-800 rounded-2xl p-5 flex flex-col gap-5 shadow-none"
    >
      {/* 🏢 কোম্পানিগুলোর লিস্ট বডি */}
      <div className="flex flex-col gap-4">
        {companies.map((company) => {
          const IconComponent = company.icon;

          return (
            <div 
              key={company.id} 
              className="flex items-center justify-between w-full py-1.5"
            >
              {/* বাম পাশের অংশ: লোগো + নাম ও ডিটেইলস */}
              <div className="flex items-center gap-4">
                
                {/* 🎨 লোগো কন্টেইনার */}
                <div className="w-12 h-12 rounded-xl bg-[#1c1c1e] border border-neutral-800 flex items-center justify-center text-neutral-300 overflow-hidden flex-shrink-0">
                  {company.iconType === "image" ? (
                    <img 
                      src={company.iconUrl} 
                      alt={`${company.name} logo`} 
                      className="w-full h-full object-cover opacity-80"
                    />
                  ) : (
                    <IconComponent 
                      aria-label={`${company.name} icon`} 
                      className="size-5 text-neutral-400" 
                    />
                  )}
                </div>

                {/* 📝 কোম্পানির নাম ও সাবটাইটেল */}
                <div className="flex flex-col">
                  <span className="font-semibold text-white tracking-wide text-sm md:text-base">
                    {company.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium mt-0.5">
                    {company.category} • {company.location}
                  </span>
                </div>
              </div>

              {/* ডান পাশের অংশ: একটিভ জবের সংখ্যা */}
              <div className="flex flex-col items-end gap-0.5">
                <span className="font-semibold text-white text-base">
                  {company.activeJobs}
                </span>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                  Active Jobs
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* 🔘 নিচতলার ভিউ অল বাটন */}
      <Button
        as={Link}
        href="/dashboard/companies" // তোমার রাউট অনুযায়ী লিংক পরিবর্তন করতে পারো
        variant="bordered"
        className="w-full py-5 border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-medium text-sm rounded-xl transition-colors bg-transparent"
      >
        View All Companies
      </Button>

    </Card>
  );
}