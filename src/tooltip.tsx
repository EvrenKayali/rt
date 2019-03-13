import React from 'react'

import './style.css'

export interface Props {
    top: number,
    left: number,
    width: number,
    height: number,
    visible: boolean,
    onHover(): void,
    onBlur(): void,
}

export function Tooltip(props: Props) {

    return (
        <span
            style={{
                top: props.top,
                left: props.left + props.height - 5,
                width: props.width,
                height: props.height,
                visibility: props.visible ? 'visible' : 'hidden'
            }}
            className="tooltip"
            onMouseEnter={props.onHover}
            onMouseLeave={props.onBlur}>
            ksajdlkajdklsajd
        </span>
    )
}