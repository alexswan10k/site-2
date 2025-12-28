import { css, cx } from '@emotion/css';
import React from 'react';
import Image, { ImageProps } from "next/image";

interface ImageWrapperProps extends ImageProps {
    className?: string;
    wrapperClassName?: string;
    aspectRatio?: string;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ className, wrapperClassName, aspectRatio, style, ...props }) => {
    // Default to layout="fill" if no dimensions or layout provided
    const imageProps = { ...props };
    if (!imageProps.width && !imageProps.height && !imageProps.layout) {
        imageProps.layout = "fill";
    }

    return (
        <div className={cx(css`
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            background-color: #f0f0f0;
            ${aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}
            display: flex;
            justify-content: center;
            align-items: center;
            
            // If aspect ratio is set, we might need to enforce width/height behavior
             width: 100%;
        `, wrapperClassName)}>
            <Image
                style={style}
                className={className}
                {...imageProps}
            />
        </div>
    );
}
