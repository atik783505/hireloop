'use client'
import CandidateTable from '@/components/DashboardComponent/ApllicationsTable';
import DashboardStats from '@/components/DashboardComponent/DashboardStats';
import TopCompanies from '@/components/DashboardComponent/TopComapanyList';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const page = () => {
    const { data: session } = useSession();
    const user = session?.user;
    return (
        <div>
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}!</h2>
            <DashboardStats />
            {/* 📊 মেইন গ্রিড কন্টেইনার: মোবাইলে ১ কলাম, বড় স্ক্রিনে (lg) ৩ কলাম হবে */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">

                {/* 1. Recent Applications (২ কলাম জায়গা নেবে) */}
                <div className="lg:col-span-2 w-full">
                    <div className="flex items-center justify-between mt-8 mb-3">
                        <h2 className="text-xl font-semibold text-white">Recent Applications</h2>
                        <p className="text-sm text-neutral-400 hover:text-white cursor-pointer transition-colors">
                            view all
                        </p>
                    </div>
                    <CandidateTable />
                </div>

                {/* 2. My Top Companies (১ কলাম জায়গা নেবে) */}
                <div className="lg:col-span-1 w-full">
                    <div className="flex items-center justify-between mt-8 mb-3">
                        <h2 className="text-xl font-semibold text-white">My Top Companies</h2>
                        <p className="text-sm text-neutral-400 hover:text-white cursor-pointer transition-colors">
                            view all
                        </p>
                    </div>
                    <TopCompanies />
                </div>

            </div>
        </div>
    );
};

export default page;