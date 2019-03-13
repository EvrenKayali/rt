import React from 'react'

export interface Props {
    x: number;
    y: number;
    onHover(e: any): void;
    onMouseLeave(): void;
}

export interface TooltipData {
    clientRectangle: ClientRect;
}

export function Rectangle(props: Props) {

    const handleHover = (e: any) => {
        props.onHover(e.getBoundingClientRect());
    }

    return (
        <rect
            onMouseEnter={(e) => handleHover(e.target)}
            onMouseLeave={props.onMouseLeave}
            x={props.x}
            y={props.y}
            width="100"
            height="100"
            style={{
                fill: "rgb(0,0,255)",
            }} />
    )
}