import { X, AlertTriangle, Loader2 } from 'lucide-react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-100 rounded-full">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                            <p className="mt-1 text-sm text-gray-500">{message}</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-xl border-t border-gray-100">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
