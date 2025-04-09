export type iToastType = "success" | "error" | "info" | "warning" | "default";

export interface iToast {
  id: string;
  message: string;
  type: iToastType;
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
