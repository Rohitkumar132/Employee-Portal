import { CopyToClipboard } from "react-copy-to-clipboard";
// import MyToolTip from "component/ToolTip/ToolTip";
import { Button, Spinner } from "reactstrap";
import React, { useState } from "react";

/**
 * @typedef {'attachment'|'on'|'off'|'assign'|'plus'|'trash'|'download'|'update'|'edit'|'logs'|'send'|'email'|'check-list'|'view'|'pdf'|'minus'|'copy'|'repeat'} PrefixTypes
 * @typedef {'primary'|'secondary'|'warning'|'light'|'dark'|'success'|'info'|'danger'} ColorType
 * @typedef {'button'|'submit'} ButtonType
 * @typedef {'md'|'sm'} SizeType
 *
 * @param {Object} props
 * @param {Boolean} props.isSubmitting: Submission button, applied an loading prefix icon.
 * @param {PrefixTypes} props.prefixIconList: predefined Icons for prefix.
 * @param {Boolean} props.restrict Hide the button.
 * @param {Boolean} props.disabled Disable the button.
 * @param {Boolean} props.outline Enable outlined button.
 * @param {String} props.label Label of the button.
 * @param {String} props.className ClassName of the button.
 * @param {Boolean} props.pill Enable rounded-pill shaped button.
 * @param {ButtonType} props.type Button types.
 * @param {Boolean} props.isSubmitting Show prefix loading icon and disable button while submitting.
 * @param {ColorType} props.color Show prefix loading icon and disable button while submitting.
 * @param {HTMLLIElement} props.prefixIcon Show prefix icon.
 * @param {String} props.iconClass Class name for prefix icon list.
 * @param {Boolean} props.center Make button centered.
 * @param {String} props.copyable Make button content copyable.
 * @param {HTMLLIElement} props.suffixIcon Show suffix icon.
 * @param {SizeType} props.size Adjust the size of button.
 * @param {String} props.tooltip Show tooltip over the button.
 * @param {Function} props.onClick Show tooltip over the button.
 * @returns {HTMLButtonElement}
 */

const AppButton = ({
    restrict = false,
    disabled = false,
    label = "",
    outline = false,
    pill = false,
    type = "button",
    isSubmitting = false,
    color = "primary",
    className = "",
    prefixIcon = "",
    prefixIconList,
    iconClass = "",
    center = false,
    copyable,
    suffixIcon = "",
    size = "md",
    tooltip,
    onClick = () => { },
    ...rest
}) => {
    if (restrict) return null;
    const defaultClass = `d-flex align-items-center justify-content-center gap-1`;
    let predefinedIcon = undefined;
    switch (prefixIconList) {
        case "on":
            predefinedIcon = <i className={`fas fa-toggle-on font-size-18 ${iconClass}`} />;
            break;
        case "off":
            predefinedIcon = <i className={`fas fa-toggle-off font-size-18 ${iconClass}`} />;
            break;
        case "plus":
            predefinedIcon = <i className={`bx bx-plus font-size-17 ${iconClass}`} />;
            break;
        case "assign":
            predefinedIcon = <i className={`mdi mdi-account-check-outline ${iconClass}`} />;
            break;
        case "trash":
            predefinedIcon = <i className={`mdi mdi-trash-can-outline font-size-13 ${iconClass ? iconClass : "text-danger "}`} />;
            break;
        case "download":
            predefinedIcon = <i className={`bx bx-download fw-bold font-size-18 ${iconClass}`} />;
            break;
        case "update":
            predefinedIcon = <i className={`mdi mdi-autorenew fw-bold font-size-13 ${iconClass}`} />;
            break;
        case "edit":
            predefinedIcon = <i className={`mdi mdi-circle-edit-outline fw-bold font-size-13 ${iconClass}`} />;
            break;
        case "logs":
            predefinedIcon = <i className={`mdi mdi-format-list-text fw-bold font-size-13 ${iconClass}`} />;
            break;
        case "send":
            predefinedIcon = <i className={`mdi mdi-send fw-bold font-size-13 ${iconClass}`} />;
            break;
        case "email":
            predefinedIcon = <i className={`bx bx-mail-send font-size-18 ${iconClass}`} />;
            break;
        case "check-list":
            predefinedIcon = <i className={`bx bx-list-check font-size-18 ${iconClass}`} />;
            break;
        case "view":
            predefinedIcon = <i className={`bx bx-receipt font-size-18 ${iconClass}`} />;
            break;
        case "pdf":
            predefinedIcon = <i className={`mdi mdi-file-pdf-outline font-size-14 ${iconClass}`} />;
            break;
        case "minus":
            predefinedIcon = <i className={`bx bx-minus font-size-18 ${iconClass}`} />;
            break;
        case "copy":
            predefinedIcon = <i className={`mdi mdi-content-copy font-size-12 ${iconClass}`} />;
            break;
        case "repeat":
            predefinedIcon = <i className={`mdi mdi-autorenew font-size-12 ${iconClass}`} />;
            break;
        case "attachment":
            predefinedIcon = <i className={`mdi mdi-attachment font-size-13 ${iconClass}`} />;
            break;
        case "right-arrow":
            predefinedIcon = <i className={`bx bx-right-arrow-alt font-size-13 ${iconClass}`} />;
            break;
    }

    const [copied, setCopied] = useState(false);

    const onCopy = (msg, resutl) => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3500);
    };

    if (copyable) {
        return (
            <CopyToClipboard text={copyable} onCopy={onCopy}>
                <Button
                    size={size}
                    outline={outline || disabled}
                    type={type}
                    color={color}
                    className={`${className} ${pill ? "btn-rounded" : ""}`}
                    disabled={isSubmitting || disabled}
                    onClick={onClick}
                    {...rest}>
                    <div className={defaultClass}>
                        {isSubmitting && <Spinner size='sm' className='me-2' />}
                        {!isSubmitting && prefixIcon && prefixIcon}
                        {label}
                        {suffixIcon && suffixIcon}
                        {copied ? <i className='bx bx-check font-size-18 text-success align-middle' /> : <i className='mdi mdi-content-copy font-size-13 text-primary' />}
                    </div>
                </Button>
            </CopyToClipboard>
        );
    }

    return (
        // <MyToolTip heading={tooltip} placement='top'>
            <Button
                size={size}
                outline={outline || disabled}
                type={type}
                color={color}
                className={`${className} ${pill ? "btn-rounded" : ""} ${center ? "d-block mx-auto" : ""}`}
                disabled={isSubmitting || disabled}
                onClick={onClick}
                {...rest}>
                <div className={defaultClass}>
                    {isSubmitting && <Spinner size='sm' className='me-2' />}
                    {!isSubmitting && ((prefixIcon && prefixIcon) || (predefinedIcon && predefinedIcon))}
                    {label}
                    {suffixIcon && suffixIcon}
                </div>
            </Button>
        // </MyToolTip>
    );
};

export default AppButton;
