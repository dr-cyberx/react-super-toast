import { useToastContext } from "../context/ToastContext";

export const useToast = () => {
  const { addToast } = useToastContext();

  return {
    toast: {
      success: (msg: string, duration?: number) =>
        addToast(msg, "success", duration),
      error: (msg: string, duration?: number) =>
        addToast(msg, "error", duration),
      info: (msg: string, duration?: number) => addToast(msg, "info", duration),
      warning: (msg: string, duration?: number) =>
        addToast(msg, "warning", duration),
      default: (msg: string, duration?: number) =>
        addToast(msg, "default", duration),
      chameleon: (msg: string, duration?: number) =>
        addToast(msg, "chameleon", duration),
      modern: (msg: string, duration?: number) =>
        addToast(msg, "modern", duration), // Modern style: Blur effect
      modernDark: (msg: string, duration?: number) =>
        addToast(msg, "modernDark", duration), // Modern dark style: Blur effect with dark background
    },
  };
};
