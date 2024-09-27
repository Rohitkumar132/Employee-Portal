import React, { useState } from "react";
import { Label } from "reactstrap";

const FloatLabel = ({ children, label, value, labelClass = "", labelProps = {} }) => {
    if (!label) {
        return children;
    }

    const [focus, setFocus] = useState(false);

    const labelClassName =
        focus || (value && value.length !== 0)
            ? `label labelFloat`
            : `label`;

    return (
        <div
            className={`floatLabel`}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <Label className={`${labelClassName} ${labelClass}`} {...labelProps}>
                {label}
            </Label>
        </div>
    );
};

export default FloatLabel;
