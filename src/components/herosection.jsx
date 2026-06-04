import Image from 'next/image';
import React from 'react';

const Herosection = () => {
    return (
        <div className="py-12 md:py-16 lg:py-20 relative">
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-6 ">
                {/* টপ ব্যাজ */}
                <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#1e1e24] rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider text-gray-400 uppercase mb-8 shadow-inner">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span><strong className="text-white font-bold">50,000+</strong> New Jobs This Month</span>
                </div>

                {/* মেইন হেডিং */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent leading-[1.15]">
                    Find Your Dream Job Today
                </h1>

                {/* সাবটাইটেল */}
                <p className="text-gray-400 text-sm md:text-base max-w-xl md:max-w-2xl mb-8 leading-relaxed">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>

                {/* সার্চ বার (পুরো রেসপনসিভ) */}
                <div className="w-full max-w-2xl bg-[#121215]/90 border border-[#1e1e24] rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    {/* জব সার্চ ফিল্ড */}
                    <div className="flex items-center gap-3 px-3 py-2.5 w-full border-b border-[#1e1e24] sm:border-b-0 sm:border-r border-[#1e1e24]">
                        {/* Gravity UI style search icon */}
                        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Job title, or company"
                            className="bg-transparent text-sm w-full focus:outline-none text-white placeholder-gray-600 font-medium"
                        />
                    </div>

                    {/* লোকেশন ফিল্ড */}
                    <div className="flex items-center gap-3 px-3 py-2.5 w-full">
                        {/* Gravity UI style location icon */}
                        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="bg-transparent text-sm w-full focus:outline-none text-white placeholder-gray-600 font-medium"
                        />
                    </div>

                    {/* বেগুনি সার্চ বাটন */}
                    <button className="w-full sm:w-auto bg-[#4f46e5] hover:bg-[#4338ca] text-white p-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* ট্রেন্ডিং পজিশন ট্যাগসমূহ */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs text-gray-500">
                    <span className="font-medium mr-1">Trending Position:</span>
                    {['Product Designer', 'UI Engineering', 'DevOps Engineer'].map((tag) => (
                        <span
                            key={tag}
                            className="bg-[#121215] border border-[#1e1e24] px-3.5 py-1.5 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* ================= ২. গ্লোব (Glove) ব্যাকগ্রাউন্ড ও টেক্সট ================= */}
            <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center mt-12 z-0">
                {/* গ্লোব এর পেছনে Neon Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[45%] w-[85%] aspect-[2/1] bg-[#4f46e5]/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

                {/* গ্লোব ইমেজ কন্টেইনার (গ্লোবের নিচের দিকটা সুন্দর করে ফেইড করার জন্য মাস্ক এবং গ্রাডিয়েন্ট ব্যবহার করা হয়েছে) */}
                <div className="relative w-full aspect-[2/1] overflow-hidden rounded-t-[1000px] border-t ">
                    <Image
                        src="/images/globe.png" // আপনার public/images/glove.png ইমেজটি রেন্ডার করবে
                        alt="Globe Map Background"
                        fill
                        className="object-cover opacity-75  mix-blend-screen"
                        priority
                    />
                    {/* গ্লোব ওভারলে গ্রাডিয়েন্ট (নিচ থেকে ডার্ক ফেইড) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent" />
                </div>

                {/* গ্লোবের কেন্দ্রের ওপরে ওভারলে টেক্সট */}
                <div className="absolute top-[45%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-center w-full px-4">
                    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-sm sm:max-w-md mx-auto leading-relaxed drop-shadow-lg">
                        Assisting over <span className="text-white font-semibold">15,000 job seekers</span> find their dream positions.
                    </p>
                </div>
            </div>

            {/* ================= ৩. স্ট্যাটস কার্ড সেকশন (Overlapping) ================= */}
            {/* গ্লোবের ওপরে ভাসমান দেখানোর জন্য নেগেটিভ মার্জিন ব্যবহার করা হয়েছে */}
            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 -mt-10 sm:-mt-16 md:-mt-24">
                {[
                    {
                        icon: (
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        ),
                        count: '50K',
                        label: 'Active Jobs'
                    },
                    {
                        icon: (
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        ),
                        count: '12K',
                        label: 'Companies'
                    },
                    {
                        icon: (
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        ),
                        count: '2M',
                        label: 'Job Seekers'
                    },
                    {
                        icon: (
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ),
                        count: '97%',
                        label: 'Satisfaction Rate'
                    },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="group bg-[#0d0d11]/80 backdrop-blur-lg border border-[#1c1c22]/70 p-6 rounded-2xl flex flex-col justify-between h-36 md:h-40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] cursor-pointer"
                    >
                        {/* আইকন র‍্যাপার */}
                        <div className="p-1 w-fit rounded-lg bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-300">
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                                {stat.count}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Herosection;