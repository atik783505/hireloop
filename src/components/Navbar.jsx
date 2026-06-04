'use client';
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();
    console.log("Session in Navbar:", session);
    const user = session?.user;

    const handleSignOut = () => {
        signOut()

    }

    // ডেস্কটপ এবং মোবাইলের জন্য কমন মেইন লিংক
    const mainLinks = (
        <>
            <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Browse Jobs</Link>
            </li>
            <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Company</Link>
            </li>
            <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            </li>
        </>
    );

    // ডেস্কটপ এবং মোবাইলের জন্য কমন অ্যাকশন লিংক (Sign In / Get Started)
    const actionLinks = (
        <>
           <>
            {user ? (
                <div className="flex items-center gap-4">
                    <span className="text-gray-300 text-sm font-medium">Hello, {user.name || user.email}</span>
                    <Button size="sm" className="bg-white text-black font-semibold rounded-xl px-4 py-2 hover:bg-gray-200 transition-all" onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </div>
            ) : (
                <li>
                    <Link href="/auth/signin" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-semibold px-2">
                        Sign In
                    </Link>
                </li>
            )}
           </>
            <li>
                <Link href="#">
                    <Button size="sm" className="bg-white text-black font-semibold rounded-xl px-4 py-2 hover:bg-gray-200 transition-all">
                        Get Started
                    </Button>
                </Link>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-40 w-full bg-[#121212] py-4 px-6 md:px-12 flex items-center justify-between">

            {/* Left Side: Logo (No Background) */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Logo Area */}
                <div className="flex items-center cursor-pointer">
                    <Image
                        src="/images/logo.png" // Extension-ti oboshshoi check kore niben (.png/.jpg)
                        alt="Hire Loop Logo"
                        width={160}  // Apnar pochondo mto width (pixel-e)
                        height={50}  // Apnar pochondo mto height (pixel-e)
                        className="object-contain"
                        priority // Logo layout-e shobar age load hobar jonno
                    />
                </div>
            </div>

            {/* Right Side: Glassmorphism Container for Links (Desktop Only) */}
            <div className="hidden md:flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-6 shadow-xl">
                {/* Main Navigation Links */}
                <ul className="flex items-center gap-6">
                    {mainLinks}
                </ul>

                {/* Vertical Separator */}
                <span className="h-5 w-[1px] bg-white/20"></span>

                {/* Auth Actions Links */}
                <ul className="flex items-center gap-4">
                    {actionLinks}
                </ul>
            </div>

            {/* Mobile Responsive Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 mx-6 p-5 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl md:hidden z-50">
                    <ul className="flex flex-col gap-4 items-center">
                        {mainLinks}
                        <hr className="w-full border-white/10" />
                        {actionLinks}
                    </ul>
                </div>
            )}
        </nav>
    );
}