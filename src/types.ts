import { ToastPosition } from "./context/ToastContext";

export type iToastType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "default"
  | "chameleon";

export interface iToast {
  id: string;
  message: string;
  type: iToastType;
  size?: "small" | "medium" | "big"; // Add this
  position?: ToastPosition; // Add this if not already
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
