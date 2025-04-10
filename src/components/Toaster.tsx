import clsx from 'clsx';
import { ToastPosition, useToastContext } from '../context/ToastContext';
import { Toast } from './Toast';
import { positionStyles } from './toast.utils';

export const Toaster = ({ position }: { position: ToastPosition }) => {
    const { toasts } = useToastContext();

    return (
        <div className={clsx(
            'fixed z-50 flex flex-col gap-2 transition-all ',
            positionStyles[position]
        )}>
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} position={position} />
            ))}
        </div>
    );
};
