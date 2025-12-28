import { css, cx } from '@emotion/css';
import React from 'react';

// Using system fonts as fallback for now, assume Inter/Outfit will be added globally later or used here if imported
const fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const headingFontFamily = "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className, ...props }) => (
    <h1
        className={cx(
            css`
        font-family: ${headingFontFamily};
        font-size: 3rem;
        font-weight: 800;
        color: #0f172a; // Navy
        line-height: 1.2;
        margin-bottom: 1.5rem;
        @media (max-width: 768px) {
            font-size: 2.25rem;
        }
      `,
            className
        )}
        {...props}
    >
        {children}
    </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className, ...props }) => (
    <h2
        className={cx(
            css`
        font-family: ${headingFontFamily};
        font-size: 2.25rem;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.3;
        margin-bottom: 1.25rem;
         @media (max-width: 768px) {
            font-size: 1.75rem;
        }
      `,
            className
        )}
        {...props}
    >
        {children}
    </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className, ...props }) => (
    <h3
        className={cx(
            css`
        font-family: ${headingFontFamily};
        font-size: 1.5rem;
        font-weight: 600;
        color: #0f172a;
        line-height: 1.4;
        margin-bottom: 1rem;
      `,
            className
        )}
        {...props}
    >
        {children}
    </h3>
);

export const Text: React.FC<TypographyProps> = ({ children, className, ...props }) => (
    <p
        className={cx(
            css`
        font-family: ${fontFamily};
        font-size: 1rem;
        color: #334155; // Slate
        line-height: 1.6;
        margin-bottom: 1rem;
      `,
            className
        )}
        {...props}
    >
        {children}
    </p>
);
