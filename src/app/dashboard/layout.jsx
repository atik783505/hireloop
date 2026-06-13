import DashboardSidebar from '@/components/DashboardComponent/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background flex">
            <DashboardSidebar />
            <main className="p-6 w-full">{children}</main>
        </div>
    );
};

export default DashboardLayout;