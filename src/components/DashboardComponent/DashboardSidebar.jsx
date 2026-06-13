"use client";

import { useState } from "react"; // 👈 ১. useDisclosure এর বদলে useState ইম্পোর্ট করলাম
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

function DashboardSidebar() {
  // 👈 ২. ড্রয়ার ওপেন/ক্লোজ রাখার জন্য সাধারণ রিঅ্যাক্ট স্টেট
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const renderNavLinks = (
    <nav className="flex flex-col gap-1 w-full">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 w-full text-left"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* 📱 ১. মোবাইল ও ট্যাবলেটের জন্য */}
      <div className="lg:hidden">
        {/* 👈 ৩. বাটনে ক্লিক করলে স্টেট true করে দিচ্ছি */}
        <Button variant="secondary" onPress={() => setIsOpen(true)} isIconOnly>
          <Bars />
        </Button>

        {/* 👈 ৪. ড্রয়ারের প্রপসগুলোতে আমাদের কাস্টম স্টেট ও সেট-স্টেট ফাংশন বসিয়ে দিলাম */}
        <Drawer 
          isOpen={isOpen} 
          onOpenChange={(open) => setIsOpen(open)} 
          placement="left"
        >
          <Drawer.Backdrop>
            <Drawer.Content>
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading className="font-bold text-lg">Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  {renderNavLinks}
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>

      {/* 💻 ২. বড় স্ক্রিনের জন্য (ফিক্সড সাইডবার) */}
      <aside className="hidden lg:flex flex-col w-64 h-[calc(100vh-80px)] border-r border-neutral-200 dark:border-neutral-800 p-4 sticky top-20 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm">
        <div className="mb-4 px-2">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Menu
          </h2>
        </div>
        {renderNavLinks}
      </aside>
    </>
  );
}

export default DashboardSidebar;