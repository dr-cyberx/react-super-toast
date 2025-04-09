export type ToastType = "success" | "error" | "info" | "warning" | "default";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
