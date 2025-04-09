import { createContext, useContext, useState, ReactNode } from 'react';
import { iToastType, iToast } from '../index';
import { nanoid } from 'nanoid';

interface ToastContextProps {
    addToast: (message: string, type?: iToastType, duration?: number) => void;
    removeToast: (id: string) => void;
    toasts: iToast[];
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<iToast[]>([]);

    const addToast = (message: string, type: iToastType = 'default', duration = 3000) => {
        const id = nanoid();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), duration);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToastContext must be used within a ToastProvider');
    return context;
};
