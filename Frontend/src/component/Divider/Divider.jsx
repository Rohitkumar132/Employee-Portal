import React from 'react'

const Divider = ({ title, className = '' }) => {
    return (
        <div className="vh-center gap-2 my-3">
            <div className="divider w-100" />
            <span className={`text-nowrap ${className}`}>{title}</span>
            <div className="divider w-100" />
        </div>
    )
}

export default Divider;