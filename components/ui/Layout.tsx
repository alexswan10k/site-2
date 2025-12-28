import { css, cx } from '@emotion/css';
import React from 'react';

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cx(className, css`
        margin-bottom: 4rem;
        width: 100%;
        @media (max-width: 768px) {
            margin-bottom: 2.5rem;
        }
    `)}>
        {children}
    </section>
);

export const Grid = ({ children, className, cols = 1, gap = '1rem' }: { children: React.ReactNode, className?: string, cols?: number, gap?: string }) => (
    <div className={cx(css`
        display: grid;
        grid-template-columns: repeat(${cols}, 1fr);
        gap: ${gap};
        width: 100%;
        
        @media (max-width: 768px) {
             grid-template-columns: 1fr;
             gap: 2rem; // Normalize gap on mobile
        }
    `, className)}>
        {children}
    </div>
);

export const Flex = ({ children, className, direction = 'row', align = 'center', justify = 'flex-start', gap = '0' }: { children: React.ReactNode, className?: string, direction?: 'row' | 'column', align?: string, justify?: string, gap?: string }) => (
    <div className={cx(css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
        gap: ${gap};
    `, className)}>
        {children}
    </div>
);
