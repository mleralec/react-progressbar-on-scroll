import React from 'react';
declare type Direction = 'right' | 'left';
declare type Position = 'top' | 'bottom';
declare type Props = {
    color?: string;
    height?: number;
    direction?: Direction;
    position?: Position;
    gradient?: boolean;
    gradientColor?: string;
};
declare const ProgressBar: React.FC<Props>;
export default ProgressBar;
