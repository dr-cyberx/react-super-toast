import { useToastContext } from "../context/ToastContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { iToast } from "../types";
import {
    getAnimationByPosition,
    getRandomRainbowColor,
    iconMap,
    iconSizeMap,
    toastSizeStyles,
    toastTypeStyles,
} from "./toast.utils";
import { playNotificationSound } from "../utils/playNotificationSound";
import { X } from "lucide-react";

export const Toast = ({
    id,
    message,
    type,
    size = "medium",
    position = "top-right",
    notification = false,
    toastDefaults,
}: iToast) => {
    const { removeToast } = useToastContext();
    const [isHovered, setIsHovered] = useState(false);
    const [isLatest, setIsLatest] = useState(false);

    useEffect(() => {
        if (notification) {
            playNotificationSound();
        }
    }, [notification]);

    const chameleonColors = useMemo(() => {
        return {
            from: getRandomRainbowColor(),
            to: getRandomRainbowColor(),
        };
    }, []);

    const animation = getAnimationByPosition(position);

    useEffect(() => {
        setIsLatest(true);
        return () => setIsLatest(false);
    }, []);

    return (
        <motion.div
            id={id}
            layout
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 0.3 }}
            className={clsx(
                "rounded-lg shadow-md mb-3 flex items-start justify-between gap-3",
                type !== "chameleon" && toastTypeStyles[type],
                toastSizeStyles[size],
                "transition-transform duration-300 transform",
                "hover:scale-105",
                isHovered ? "z-50" : isLatest ? "z-40" : "z-30",
                "max-w-sm w-full break-words overflow-hidden"
            )}
            style={{
                ...(type === "chameleon"
                    ? {
                        background: `linear-gradient(to right, ${chameleonColors.from}, ${chameleonColors.to})`,
                    }
                    : {}),
                ...toastDefaults?.styleOverrides,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Icon */}
            {!type.includes("modern") ? (
                <div className="p-1 pt-2">{iconMap[type]}</div>
            ) : (
                <></>
            )}

            {/* Message */}
            <div className="flex-1 text-sm leading-snug whitespace-pre-wrap break-words p-2 pr-0 overflow-hidden">
                {message}
            </div>

            {/* Close Button */}
            <button
                onClick={() => removeToast(id)}
                className="p-2"
                aria-label="close-toast"
            >
                <X className="w-4 h-4" size={iconSizeMap[size]} />
            </button>
        </motion.div>
    );
};
