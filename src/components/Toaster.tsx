// Toaster.tsx
import clsx from "clsx";
import { ToastPosition, useToastContext } from "../context/ToastContext";
import { Toast } from "./Toast";
import { positionStyles } from "./toast.utils";
import { ToastDefaults } from "../types";
import { AnimatePresence, motion } from "framer-motion";

export const Toaster = ({
    position,
    notification = false,
    toastDefaults = {},
}: {
    position: ToastPosition;
    notification?: boolean;
    toastDefaults?: ToastDefaults;
}) => {
    const { toasts } = useToastContext();

    return (
        <div
            className={clsx(
                "fixed z-50 flex flex-col-reverse items-end transition-all",
                positionStyles[toastDefaults?.position ?? position]
            )}
        >
            <AnimatePresence initial={false}>
                {toasts.map((toast, i) => (
                    <motion.div
                        key={toast.id}
                        layout
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            zIndex: 1000 - i,
                            marginBottom: i !== toasts.length - 1 ? "-2.5rem" : undefined, // -40px
                        }}
                    >
                        <Toast
                            {...toast}
                            position={toastDefaults?.position ?? position}
                            notification={notification}
                            toastDefaults={toastDefaults}
                            size={toastDefaults?.size}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
