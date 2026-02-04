import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="bg-white shadow-sm md:hidden flex items-center p-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <h1 className="ml-4 text-lg font-bold text-gray-900">Expense Tracker</h1>
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
