import { Navbar } from '@/src/components/UI/navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>
                {children}
            </main>
            {/* Footer */}
        </div>
    );
};

export default layout;