import { ToastPosition } from "../context/ToastContext";
import { iToast, iToastType } from "../types";
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const rainbowColors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#00FF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#8B00FF", // Violet
];

export function getRandomRainbowColor() {
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
}

export const toastTypeStyles: Record<iToastType, string> = {
  success: "bg-green-500 text-white shadow-lg", // White text for high contrast
  error: "bg-red-500 text-white shadow-lg", // White text for high contrast
  info: "bg-blue-500 text-white shadow-lg", // White text for high contrast
  warning: "bg-yellow-500 text-black shadow-lg", // Black text for better readability on yellow background
  default: "bg-gray-800 text-white shadow-lg", // White text on dark background
  chameleon: `text-white shadow-lg`, // For rainbow effect
  modern: "bg-white/30 text-black backdrop-blur-md shadow-lg", // Modern style with black text for better readability
  modernDark: "bg-black/60 text-white backdrop-blur-md shadow-lg", // Modern dark style with white text and dark semi-transparent background
};

export const toastSizeStyles: Record<NonNullable<iToast["size"]>, string> = {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};

export const iconSizeMap: Record<NonNullable<iToast["size"]>, number> = {
  small: 14,
  medium: 16,
  large: 20,
};

export const positionStyles: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
};

export const getAnimationByPosition = (position: string) => {
  if (position.includes("top-center")) {
    return {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    };
  } else if (position.includes("bottom-center")) {
    return {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
    };
  } else if (position.includes("left")) {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    };
  } else if (position.includes("right")) {
    return {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
    };
  }

  // Default animation
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
};

export const iconMap: Record<string, React.ReactElement> = {
  success: <CheckCircle className="text-white" size={20} />,
  error: <XCircle className="text-white" size={20} />,
  info: <Info className="text-white" size={20} />,
  warning: <AlertTriangle className="text-white" size={20} />,
  default: <MessageCircle className="text-white" size={20} />,
  chameleon: <Sparkles className="text-white" size={20} />,
  modern: <></>,
  "modern-dark": <></>,
};
