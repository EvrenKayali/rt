import React from 'react'
import { Rectangle } from "./rectangle";

export interface Props {
    onRectangleHover(e: any): void;
    onRectangleMouseLeave(): void;
}

export function Tree(props: Props) {
    const handleRectangleHover = (e: any) => props.onRectangleHover(e);

    return (
        <svg width="800" height="600">
            <Rectangle x={10} y={10} onHover={handleRectangleHover} onMouseLeave={props.onRectangleMouseLeave} />
            <Rectangle x={120} y={10} onHover={handleRectangleHover} onMouseLeave={props.onRectangleMouseLeave} />
        </svg>
    );
}
