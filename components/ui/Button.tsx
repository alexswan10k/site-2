import { css, cx } from '@emotion/css';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cx(
                    css`
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        border-radius: 8px;
                        font-family: 'Inter', sans-serif;
                        font-weight: 600;
                        cursor: pointer;
                        transition: background-color 0.2s, box-shadow 0.2s;
                        text-decoration: none;

                        ${size === 'sm' && `padding: 0.5rem 1rem; font-size: 0.875rem;`}
                        ${size === 'md' && `padding: 0.75rem 1.5rem; font-size: 1rem;`}
                        ${size === 'lg' && `padding: 1rem 2rem; font-size: 1.125rem;`}

                        ${variant === 'primary' && `
                            background-color: #0f172a;
                            color: white;
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                            &:hover {
                                background-color: #1e293b;
                                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                            }
                        `}
                         ${variant === 'secondary' && `
                            background-color: #f1f5f9;
                            color: #0f172a;
                            &:hover {
                                background-color: #e2e8f0;
                            }
                        `}
                        ${variant === 'outline' && `
                             background-color: transparent;
                             border: 2px solid #0f172a;
                             color: #0f172a;
                             &:hover {
                                background-color: #f8fafc;
                             }
                        `}
                    `,
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
