import { css, cx } from '@emotion/css';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className, fluid = false }) => {
    return (
        <div
            className={cx(
                css`
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-right: 1rem;
            padding-left: 1rem;
            
            ${!fluid && `
                max-width: 1200px;
            `}
        `,
                className
            )}
        >
            {children}
        </div>
    );
};
