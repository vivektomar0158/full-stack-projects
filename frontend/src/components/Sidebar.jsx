import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, CreditCard, PieChart, DollarSign, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { path: '/', label: 'Dashboard', icon: Home },
        { path: '/expenses', label: 'Expenses', icon: CreditCard },
        { path: '/budgets', label: 'Budgets', icon: PieChart },
    ];

    const sidebarClasses = `
    fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:shadow-none border-r border-gray-100
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={sidebarClasses}>
                <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                            <DollarSign className="h-8 w-8" />
                            Tracker
                        </h1>
                        <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="flex-1 px-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => onClose && onClose()}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-4 px-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-medium text-gray-800 truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
