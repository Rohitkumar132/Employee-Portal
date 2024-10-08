import React from "react";

const Avatar = ({ name, picture, text, size = "md" }) => {
    return (
        <div className='vh-center justify-content-start gap-3'>
            <div className={`avatar-${size}`}>
                <span className='avatar-title rounded-circle bg-light text-primary font-size-16 overflow-hidden text-capitalize'>
                    {picture ? (
                        <img className={`rounded-circle avatar-${size}`} src={`${process.env.REACT_APP_APIBASE}/${picture}`} alt='profile picture' />
                    ) : (
                        name?.charAt(0)
                    )}
                </span>
            </div>
            {text && text}
        </div>
    );
};

export default Avatar;
