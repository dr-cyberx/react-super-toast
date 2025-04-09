import { useToastContext } from '../context/ToastContext';
import { Toast } from './Toast';

export const Toaster = () => {
    const { toasts } = useToastContext();

    return (
        <div className="fixed top-5 right-5 z-50 flex flex-col">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} />
            ))}
        </div>
    );
};
