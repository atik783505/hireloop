import React from "react";
import { Table, Chip } from "@heroui/react";

export default function CandidateTable() {
  // ১. ইমেজ অনুযায়ী ডাইনামিক ক্যান্ডিডেট ডেটা
  const candidates = [
    {
      id: 1,
      name: "Julianne Moore",
      role: "Senior Product Designer",
      dateApplied: "Oct 24, 2023",
      experience: "6 years",
      status: "Interviewing",
    },
    {
      id: 2,
      name: "Robert Downey",
      role: "Backend Engineer",
      dateApplied: "Oct 23, 2023",
      experience: "4 years",
      status: "New",
    },
    {
      id: 3,
      name: "Emma Stone",
      role: "Marketing Lead",
      dateApplied: "Oct 22, 2023",
      experience: "8 years",
      status: "Reviewing",
    },
    {
      id: 4,
      name: "Chris Pratt",
      role: "Product Manager",
      dateApplied: "Oct 21, 2023",
      experience: "5 years",
      status: "Rejected",
    },
  ];

  // ২. স্ট্যাটাস অনুযায়ী ডাইনামিক Tailwind কালার স্কিম ম্যাপিং
  const statusColorMap = {
    Interviewing: "bg-green-950/40 text-green-400 border-green-800/60",
    New: "bg-neutral-800/60 text-neutral-300 border-neutral-700/60",
    Reviewing: "bg-amber-950/40 text-amber-400 border-amber-800/60",
    Rejected: "bg-red-950/40 text-red-400 border-red-800/60",
  };

  return (
    <div className="w-full bg-[#111113] border border-neutral-800 rounded-2xl p-4 shadow-sm">
      <Table 
        removeWrapper 
        aria-label="Candidate applications table"
        className="w-full"
      >
        <Table.ScrollContainer>
          <Table.Content className="min-w-[800px]">
            {/* 📋 টেবিল হেডার সেকশন */}
            <Table.Header>
              <Table.Column isRowHeader className="text-neutral-400 font-medium bg-transparent border-b border-neutral-800/80 py-4 px-6 text-left">
                Candidate Name
              </Table.Column>
              <Table.Column className="text-neutral-400 font-medium bg-transparent border-b border-neutral-800/80 py-4 px-6 text-left">
                Role
              </Table.Column>
              <Table.Column className="text-neutral-400 font-medium bg-transparent border-b border-neutral-800/80 py-4 px-6 text-left">
                Date Applied
              </Table.Column>
              <Table.Column className="text-neutral-400 font-medium bg-transparent border-b border-neutral-800/80 py-4 px-6 text-left">
                Experience
              </Table.Column>
              <Table.Column className="text-neutral-400 font-medium bg-transparent border-b border-neutral-800/80 py-4 px-6 text-left">
                Status
              </Table.Column>
            </Table.Header>

            {/* 👥 টেবিল বডি বা ডেটা রো সেকশন */}
            <Table.Body>
              {candidates.map((candidate) => (
                <Table.Row key={candidate.id} className="border-b border-neutral-900/50 hover:bg-neutral-900/20 transition-colors">
                  
                  {/* ক্যান্ডিডেট নাম + অবতার প্লেসহোল্ডার */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex-shrink-0" />
                      <span className="font-semibold text-white tracking-wide">
                        {candidate.name}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* রোল বা পজিশন */}
                  <Table.Cell className="text-neutral-400 py-5 px-6">
                    {candidate.role}
                  </Table.Cell>

                  {/* আবেদনের তারিখ */}
                  <Table.Cell className="text-neutral-400 py-5 px-6">
                    {candidate.dateApplied}
                  </Table.Cell>

                  {/* অভিজ্ঞতা */}
                  <Table.Cell className="text-neutral-400 py-5 px-6">
                    {candidate.experience}
                  </Table.Cell>

                  {/* ডাইনামিক স্ট্যাটাস ব্যাজ (HeroUI Chip) */}
                  <Table.Cell className="py-5 px-6">
                    <Chip
                      className={`px-3 py-1 text-xs font-medium border rounded-full capitalize ${
                        statusColorMap[candidate.status]
                      }`}
                      variant="flat"
                      size="sm"
                    >
                      {candidate.status}
                    </Chip>
                  </Table.Cell>

                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}