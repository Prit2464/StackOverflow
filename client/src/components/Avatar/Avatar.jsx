import React from 'react'

function Avatar({
    children,
    backgroundColor,
    px,
    py,
    borderRadius,
    color, fontSize,
    cursor
}) {
    const style = {
        backgroundColor,
        color: color || "black",
        padding: `${py} ${px}`,
        borderRadius,
        fontSize,
        cursor: cursor || null,
        textAlign: "center",
        textDecoration: "none"
    }


    return (
        <div style={style}>{children}</div>
    )
}

export default Avatar