import { X } from 'lucide-react';
import { useToastContext } from '../context/ToastContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { iToast, } from '../types';
import { getAnimationByPosition, getRandomRainbowColor, iconSizeMap, toastSizeStyles, toastTypeStyles } from './toast.utils';

export const Toast = ({ id, message, type, size = 'medium', position = 'top-right' }: iToast) => {
    const { removeToast } = useToastContext();

    const chameleonColors = useMemo(() => {
        return {
            from: getRandomRainbowColor(),
            to: getRandomRainbowColor(),
        };
    }, []); // only compute once when the component mounts

    const animation = getAnimationByPosition(position);


    return (
        <motion.div
            id={id}
            layout
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 0.3 }}
            className={clsx(
                'rounded-lg shadow-md mb-3 flex items-center justify-between gap-2 text-white',
                type !== 'chameleon' && toastTypeStyles[type],
                toastSizeStyles[size]
            )}
            style={
                type === 'chameleon'
                    ? {
                        background: `linear-gradient(to right, ${chameleonColors.from}, ${chameleonColors.to})`,
                    }
                    : undefined
            }
        >
            <span className="flex-1">{message}</span>
            <button onClick={() => removeToast(id)} className="ml-2">
                <X className="w-4 h-4" size={iconSizeMap[size]} />
            </button>
        </motion.div>

    );
};
