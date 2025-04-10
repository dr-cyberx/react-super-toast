import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Toast } from '../components/Toast';
import { ToastContext } from '../context/ToastContext';
import { iToast } from '../types';
import { Toaster } from '../components/Toaster';


describe('Toast Component', () => {
    it('calls removeToast on close button click', () => {
        const mockRemoveToast = vi.fn();

        const mockToast: iToast = {
            id: 'test-toast-id',
            message: 'Test Toast',
            type: 'default',
            size: 'medium',
        };

        render(
            <ToastContext.Provider
                value={{
                    toasts: [mockToast],
                    addToast: vi.fn(),
                    removeToast: mockRemoveToast,
                    position: 'top-right',
                }}
            >
                <Toast {...mockToast} />
            </ToastContext.Provider>
        );

        fireEvent.click(screen.getByRole('button')); // Or better: use getByLabelText if set

        expect(mockRemoveToast).toHaveBeenCalledWith('test-toast-id');
    });
});



describe('Toast Component', () => {
    const mockRemoveToast = vi.fn();

    const mockToast: iToast = {
        id: 'test-toast-id',
        message: 'Test Toast Message',
        type: 'default',
        size: 'medium',
        position: 'top-right',
    };

    beforeEach(() => {
        mockRemoveToast.mockClear(); // Clear previous calls
    });

    it('renders toast message', () => {
        render(
            <ToastContext.Provider
                value={{
                    addToast: vi.fn(),
                    removeToast: mockRemoveToast,
                    toasts: [mockToast],
                    position: 'top-right',
                }}
            >
                <Toast {...mockToast} />
            </ToastContext.Provider>
        );

        expect(screen.getByText('Test Toast Message')).toBeInTheDocument();
    });

    it('calls removeToast when close button is clicked', () => {
        render(
            <ToastContext.Provider
                value={{
                    addToast: vi.fn(),
                    removeToast: mockRemoveToast,
                    toasts: [mockToast],
                    position: 'top-right',
                }}
            >
                <Toast {...mockToast} />
            </ToastContext.Provider>
        );

        fireEvent.click(screen.getByLabelText('close-toast'));
        expect(mockRemoveToast).toHaveBeenCalledWith('test-toast-id');
        expect(mockRemoveToast).toHaveBeenCalledTimes(1);
    });
});



describe('Toaster Component', () => {
    const mockToasts: iToast[] = [
        {
            id: 'toast-1',
            message: 'First Toast',
            type: 'default',
            size: 'medium',
            position: 'bottom-left',
        },
        {
            id: 'toast-2',
            message: 'Second Toast',
            type: 'success',
            size: 'large',
            position: 'bottom-left',
        },
    ];

    it('renders all toasts from context', () => {
        render(
            <ToastContext.Provider
                value={{
                    addToast: vi.fn(),
                    removeToast: vi.fn(),
                    toasts: mockToasts,
                    position: 'bottom-left',
                }}
            >
                <Toaster position="bottom-left" />
            </ToastContext.Provider>
        );

        expect(screen.getByText('First Toast')).toBeInTheDocument();
        expect(screen.getByText('Second Toast')).toBeInTheDocument();
    });

    it('applies correct positioning class', () => {
        const { container } = render(
            <ToastContext.Provider
                value={{
                    addToast: vi.fn(),
                    removeToast: vi.fn(),
                    toasts: mockToasts,
                    position: 'bottom-left',
                }}
            >
                <Toaster position="bottom-left" />
            </ToastContext.Provider>
        );

        // Assuming positionStyles.bottom-left = 'bottom-4 left-4'
        expect(container.firstChild).toHaveClass('bottom-4', 'left-4');
    });
});
