import { Toast as ToastType } from '../types';
import { X } from 'lucide-react';
import { useToastContext } from '../context/ToastContext';
import clsx from 'clsx';

const toastTypeStyles: Record<ToastType['type'], string> = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
    default: 'bg-gray-800 text-white',
};

export const Toast = ({ id, message, type }: ToastType) => {
    const { removeToast } = useToastContext();

    return (
        <div
            className={clsx(
                'rounded-lg px-4 py-2 shadow-md mb-3 flex items-center justify-between gap-2 animate-slide-in',
                toastTypeStyles[type]
            )}
        >
            <span className="flex-1">{message}</span>
            <button onClick={() => removeToast(id)} className="ml-2">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};
