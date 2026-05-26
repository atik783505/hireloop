'use client';
import { Link } from "@heroui/react";
// Gravity UI Icons ইমপোর্ট করা হয়েছে
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer className="relative bg-black text-gray-400 font-sans overflow-hidden border-t border-white/10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black_80%)]" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
                
                {/* Top Section: Brand info & Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
                    
                    {/* Brand Info Column */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="h-8 w-8 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-black text-lg">
                                P
                            </div>
                            <span className="text-white font-bold text-xl tracking-wide">Hire<br/><span className="block -mt-1">Loop</span></span>
                        </div>
                        {/* Description */}
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Column 1: Product */}
                    <div className="space-y-4">
                        <h4 className="text-indigo-500 font-medium text-base">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Job discovery</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Worker AI</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Companies</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Salary data</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Navigations */}
                    <div className="space-y-4">
                        <h4 className="text-indigo-500 font-medium text-base">Navigations</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help center</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Career library</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="space-y-4">
                        <h4 className="text-indigo-500 font-medium text-base">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Brand Guideline</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Newsroom</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Socials & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
                    
                    {/* Social Media Icons (Gravity UI Icons Used Here) */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <Link href="#" className="h-9 w-9 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center rounded-lg transition-all border border-white/5">
                            <LogoFacebook width={16} height={16} />
                        </Link>
                        
                        {/* Pinterest (Gravity UI তে Pinterest না থাকায় কাস্টম SVG দিয়ে হুবহু ডিজাইন করা হয়েছে) */}
                        <Link href="#" className="h-9 w-9 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center rounded-lg transition-all">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.56-5.4 5.2 0 1.03.4 2.13.9 2.73.1.12.1.22.07.33-.07.31-.24.98-.28 1.12-.05.2-.18.24-.4.14-1.47-.68-2.4-2.83-2.4-4.54 0-3.7 2.69-7.1 7.75-7.1 4.07 0 7.23 2.9 7.23 6.77 0 4.04-2.54 7.3-6.08 7.3-1.19 0-2.3-.62-2.69-1.35l-.73 2.79c-.26 1.02-1 2.3-1.5 3.1C10.65 23.83 11.32 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                            </svg>
                        </Link>
                        
                        {/* Linkedin */}
                        <Link href="#" className="h-9 w-9 bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center rounded-lg transition-all border border-white/5">
                            <LogoLinkedin width={16} height={16} />
                        </Link>
                    </div>

                    {/* Copyright & Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-gray-500">
                        <p>Copyright 2026 — Hire Loop</p>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs">Terms & Policy</Link>
                            <span className="text-gray-700">-</span>
                            <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs">Privacy Guideline</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}