import React from "react";
import { Card } from "@heroui/react";
import { Calendar, Person, Thunderbolt, Check } from "@gravity-ui/icons";

export default function DashboardStats() {
  const statsData = [
    { id: 1, title: "Total Job Posts", count: "48", icon: Calendar },
    { id: 2, title: "Total Applicants", count: "1,284", icon: Person },
    { id: 3, title: "Active Jobs", count: "18", icon: Thunderbolt },
    { id: 4, title: "Jobs Closed", count: "32", icon: Check },
  ];

  return (
    <div className="w-full">
      {/* 👋 ওয়েলকাম হেডিং */}
      <h1 className="text-2xl font-semibold text-white mb-6 tracking-wide">
        Welcome back, jonayet!
      </h1>

      {/* 📊 রেসপন্সিভ গ্রিড লেআউট (w-full এবং items-stretch যোগ করা হয়েছে) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-stretch">
        {statsData.map((stat) => {
          const IconComponent = stat.icon;
          
          return (
            <Card 
              key={stat.id} 
              // 👈 এখানে w-full এবং flex-1 নিশ্চিত করা হয়েছে যাতে কার্ডগুলো চ্যাপ্টা না হয়ে পুরো খালি জায়গা টেনে নেয়
              className="bg-[#18181b] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between min-h-[150px] w-full flex-1 shadow-none"
            >
              {/* 🎨 আইকন বক্স */}
              <div className="w-9 h-9 rounded-xl bg-[#27272a] flex items-center justify-center text-neutral-300">
                <IconComponent 
                  aria-label={`${stat.title} icon`} 
                  className="size-5" 
                  role="img" 
                />
              </div>

              {/* 📝 HeroUI সাব-কম্পোনেন্ট */}
              <Card.Header className="p-0 mt-4 flex flex-col items-start gap-1 w-full">
                <Card.Description className="text-xs font-medium text-neutral-400 tracking-wide m-0">
                  {stat.title}
                </Card.Description>
                <Card.Title className="text-3xl font-semibold text-white tracking-tight m-0">
                  {stat.count}
                </Card.Title>
              </Card.Header>
            </Card>
          );
        })}
      </div>
    </div>
  );
}