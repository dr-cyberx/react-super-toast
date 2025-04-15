import { createContext, useContext, useState, ReactNode } from "react";
import { iToastType, iToast } from "../index";
import { nanoid } from "nanoid";
import { ToastDefaults } from "../types";

export type ToastPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

interface ToastContextProps {
    addToast: (message: string, type?: iToastType, duration?: number) => void;
    removeToast: (id: string) => void;
    toasts: iToast[];
    position?: ToastPosition;
    toastDefaults?: ToastDefaults;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
    undefined
);

export const ToastProvider = ({
    children,
    toastDefaults,
}: {
    children: ReactNode;
    toastDefaults?: ToastDefaults;
}) => {
    const [toasts, setToasts] = useState<iToast[]>([]);

    const addToast = (
        message: string,
        type: iToastType = "default",
        duration = 3000,
    ) => {
        const id = nanoid();

        setToasts(prev => [
            ...prev,
            {
                id,
                message,
                type,
                ...toastDefaults, // defaults (position, notification, styleOverrides, etc)
            },
        ]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider
            value={{ toasts, addToast, removeToast, toastDefaults }}
        >
            {children}
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context)
        throw new Error("useToastContext must be used within a ToastProvider");
    return context;
};
