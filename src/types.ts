import { ToastPosition } from "./context/ToastContext";

export type iToastType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "default"
  | "chameleon"
  | "modern" // Add "modern" here
  | "modernDark"; // Add "modernDark" here
export interface iToast {
  id: string;
  message: string;
  type: iToastType;
  size?: "small" | "medium" | "large"; // Add this
  position?: ToastPosition; // Add this if not already
  notification?: boolean;
  toastDefaults?: ToastDefaults; // Add this if not already
}

export interface iToastOptions {
  duration?: number;
  type?: iToastType;
}
export interface ToastContextType {
  toasts: iToast[];
  addToast: (message: string, options?: iToastOptions) => void;
  removeToast: (id: string) => void;
}
export interface iToastProviderProps {
  children: React.ReactNode;
  duration?: number;
}

// types.ts
export interface ToastDefaults {
  position?: ToastPosition;
  size?: "small" | "medium" | "large";
  styleOverrides?: React.CSSProperties;
  notification?: boolean;
}
