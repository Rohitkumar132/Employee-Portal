import { Input, InputGroup, InputGroupText, Label } from "reactstrap";
import Creatable from "react-select/creatable";
import React, { useState } from "react";
import Select from "react-select";
import { Field } from "formik";
import FloatLabel from "./FloatLabel";
// import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";

/**
 * FormInput component for handling various input types in a form.
 *
 * @typedef {'md'|'sm'|'default'} SizeType
 * @typedef {'text' | 'password' | 'select' | 'multi-select' | 'creatable' | 'file' | 'switch' | 'checkbox' | 'radio' | 'email' | 'number' | 'date' | 'time' | 'textarea'} InputType
 *
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the input field
 * @param {InputType} [props.type='text'] - The type of the input field
 * @param {string} [props.label=''] - The label for the input field
 * @param {string} [props.labelClass=''] - Additional CSS classes for the label
 * @param {Object} [props.labelProps={}] - Additional props for the label
 * @param {Array} [props.options=[]] - Options for select inputs
 * @param {boolean} [props.withShowPassword=false] - Whether to show a toggle for password visibility
 * @param {string} [props.acceptableFormat='.png, .jpeg, .jpg, .pdf, .doc, .docx, .xlse, .csv,'] - Acceptable file formats
 * @param {boolean} [props.forDisplay=false] - Whether the input is for display purposes only
 * @param {string} [props.containerClass=''] - Additional CSS classes for the container
 * @param {string} [props.errorMsgClass=''] - Additional CSS classes for error messages
 * @param {Object} [props.containerStyle={}] - Inline styles for the container
 * @param {string} [props.inputClass=''] - Additional CSS classes for the input field
 * @param {boolean} [props.required=false] - Whether the input field is required
 * @param {boolean} [props.disabled=false] - Whether the input field is disabled
 * @param {Object} [props.inputProps={}] - Additional props for the input field
 * @param {boolean} [props.isMulti=true] - Whether the select input allows multiple selections
 * @param {string|boolean} [props.defaultOption=false] - Default option for select inputs
 * @param {boolean} [props.lg=false] - Whether the checkbox is large
 * @param {SizeType} [props.size='default'] - Size of the input field
 * @param {boolean} [props.withoutFormik=false] - Whether to use Formik
 * @param {boolean} [props.noDefaultValue=false] - Whether to omit the default value option for select inputs
 *
 * @returns {JSX.Element} FormInput component
 */
const FormInput = ({
    name = "",
    type = "text",
    label = "",
    labelClass = "",
    labelProps = {},
    options = [],
    withShowPassword = false,
    acceptableFormat = ".png, .jpeg, .jpg, .pdf, .doc, .docx, .xlse, .csv,",
    forDisplay = false,
    containerClass = "",
    errorMsgClass = "",
    containerStyle = {},
    inputClass = "",
    required = false,
    disabled = false,
    inputProps = {},
    isMulti = true,
    defaultOption = false,
    lg = false, // use with checkbox
    size = "default",
    withoutFormik = false,
    noDefaultValue = false,
}) => {
    if (forDisplay) {
        return (
            <div className={containerClass}>
                {label && (
                    <Label className={labelClass} {...labelProps}>
                        {label}
                    </Label>
                )}
                <Input type={type || "textarea"} className={`form-control ${inputClass}`} {...inputProps} disabled />
            </div>
        );
    }

    if (withoutFormik) {
        if (type === "select") {
            return (
                <div className={containerClass}>
                    {label && (
                        <Label htmlFor={name + "form"} className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )}
                    <Input type={type || "text"} name={name} id={name + "form"} className={`form-control ${inputClass}`} {...inputProps} disabled={disabled}>
                        {!noDefaultValue && <option value=''>{defaultOption || "Select"}</option>}
                        {options?.length !== 0 &&
                            options.map((option, ind) => (
                                <option value={option?.value} key={ind}>
                                    {option?.label}
                                </option>
                            ))}
                    </Input>
                </div>
            );
        } else {
            return (
                <div className={containerClass}>
                    {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )}
                    <Input type={type || "text"} className={`form-control ${inputClass}`} {...inputProps} disabled={disabled} />
                </div>
            );
        }
    }

    if (type === "checkbox" && lg) {
        inputClass += " checkbox-lg-form form-check ";
    }

    if (size === "sm") {
        inputClass += type === "select" ? " form-select-sm" : " form-control-sm";
    } else if (size === "lg") {
        inputClass += type === "select" ? " form-select-lg" : " form-control-lg";
    }

    switch (type) {
        case "password":
            const [showPass, setShowPass] = useState(false);
            return (
                <>
                    {/* {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )} */}
                    <Field name={name}>
                        {({ field, meta }) => (
                            <FloatLabel label={label} labelClass={labelClass} labelProps={labelProps} value={field.value}>
                                <InputGroup>
                                    <Input
                                        {...field}
                                        {...inputProps}
                                        disabled={disabled}
                                        required={required}
                                        type={showPass ? "text" : "password"}
                                        invalid={meta.touched && meta.error ? true : false}
                                        className={`form-control ${!withShowPassword ? "" : "border-end-0"} ${inputClass}`}
                                    />
                                    {withShowPassword && (
                                        <InputGroupText className={`bg-white border-start-0`} onClick={() => setShowPass(!showPass)}>
                                            {showPass ? (
                                                <i className='font-size-14 mdi mdi-eye-outline' role='button' />
                                            ) : (
                                                <i role='button' className='font-size-14 mdi mdi-eye-off-outline' />
                                            )}
                                        </InputGroupText>
                                    )}
                                </InputGroup>
                                {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                            </FloatLabel>
                        )}
                    </Field>
                </>
            );

        case "select":
            return (
                <>
                    {/* {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )} */}
                    <Field name={name}>
                        {({ field, meta }) => (
                            <FloatLabel label={label} labelClass={labelClass} labelProps={labelProps} value={field.value}>
                                <Input
                                    {...field}
                                    type={type}
                                    {...inputProps}
                                    disabled={disabled}
                                    required={required}
                                    className={`form-control ${inputClass}`}
                                    invalid={meta.touched && meta.error ? true : false}>
                                    {!noDefaultValue && <option value=''>{defaultOption || ""}</option>}
                                    {options?.length !== 0 &&
                                        options.map((option, ind) => (
                                            <option value={option?.value} key={ind}>
                                                {option?.label}
                                            </option>
                                        ))}
                                </Input>
                                {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                            </FloatLabel>
                        )}
                    </Field>
                </>
            );

        case "multi-select":
            return (
                <>
                    {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )}
                    <Field name={name}>
                        {({ field, meta, form }) => (
                            <>
                                <Select
                                    {...field}
                                    options={options}
                                    isDisabled={disabled}
                                    name={field.name}
                                    isMulti={isMulti}
                                    closeMenuOnSelect={!isMulti}
                                    onChange={selected => form.setFieldValue(field.name, selected)}
                                    onBlur={() => form.handleBlur({ target: { name: field.name } })}
                                    {...inputProps}
                                />
                                {meta.touched && meta.error && (
                                    <div className={`error ${errorMsgClass}`}>{typeof meta.error === "string" ? meta.error : Object.values(meta.error)?.[0]}</div>
                                )}
                            </>
                        )}
                    </Field>
                </>
            );

        case "creatable":
            return (
                <>
                    {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )}
                    <Field name={name}>
                        {({ field, meta, form }) => (
                            <>
                                <Creatable
                                    {...field}
                                    isMulti={isMulti}
                                    options={options}
                                    name={field.name}
                                    closeMenuOnSelect={!isMulti}
                                    onChange={selected => form.setFieldValue(field.name, selected)}
                                    onBlur={() => form.handleBlur({ target: { name: field.name } })}
                                    {...inputProps}
                                />
                                {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                            </>
                        )}
                    </Field>
                </>
            );

        case "file":
            return (
                <div className={containerClass}>
                    <Label className={labelClass} {...labelProps}>
                        {label}
                    </Label>
                    <Field name={name}>
                        {({ field: { value, ...rest }, form, meta }) => (
                            <>
                                <Input
                                    {...rest}
                                    type='file'
                                    disabled={disabled}
                                    required={required}
                                    className={`form-control ${inputClass}`}
                                    accept={acceptableFormat}
                                    invalid={meta.touched && meta.error ? true : false}
                                    onChange={e => form.setFieldValue(rest.name, e.target.files[0])}
                                    {...inputProps}
                                />
                                {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                            </>
                        )}
                    </Field>
                </div>
            );

        case "switch":
            return (
                <Field name={name}>
                    {({ field, meta }) => (
                        <div style={containerStyle} className={`form-check form-switch form-switch-md mt-4 ${containerClass}`}>
                            <Input
                                {...field}
                                type='checkbox'
                                disabled={disabled}
                                required={required}
                                defaultChecked={field.value}
                                id={`checkbox-${name}`}
                                className={`form-control form-check-input ${inputClass}`}
                                invalid={meta.touched && meta.error ? true : false}
                                {...inputProps}
                            />
                            <Label className={`form-check-label ${labelClass}`} htmlFor={`checkbox-${name}`} {...labelProps}>
                                {label}
                            </Label>
                            {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                        </div>
                    )}
                </Field>
            );

        case "checkbox":
            return (
                <Field name={name}>
                    {({ field, meta }) => (
                        <div style={containerStyle} className={`form-check form-check-primary form-checkbox-outline ${label ? "mt-4" : ""} ${containerClass}`}>
                            <Input
                                {...field}
                                value={field.value ? true : false}
                                type='checkbox'
                                disabled={disabled}
                                required={required}
                                defaultChecked={field.value ? true : false}
                                id={`checkbox-${name}`}
                                className={`form-check-input ${inputClass}`}
                                invalid={meta.touched && meta.error ? true : false}
                                key={`${field.name}-${field.value}`}
                                {...inputProps}
                            />
                            <Label className={`form-check-label ${labelClass}`} htmlFor={`checkbox-${name}`} {...labelProps}>
                                {label}
                            </Label>
                            {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                        </div>
                    )}
                </Field>
            );

        case "radio":
            return (
                <Field name={name}>
                    {({ field, meta }) => (
                        <div className={`form-check mt-4 ${containerClass}`} style={containerStyle}>
                            <Input
                                {...field}
                                type='radio'
                                disabled={disabled}
                                required={required}
                                defaultChecked={field.value}
                                className={`form-check-input ${inputClass}`}
                                invalid={meta.touched && meta.error ? true : false}
                                {...inputProps}
                                id={`radio-${name}-${inputProps?.value || field?.value}`}
                            />
                            <Label className={`form-check-label ${labelClass}`} htmlFor={`radio-${name}-${inputProps?.value || field?.value}`} {...labelProps}>
                                {label}
                            </Label>
                            {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                        </div>
                    )}
                </Field>
            );

        default:
            return (
                <div className={containerClass}>
                    {/* {label && (
                        <Label className={labelClass} {...labelProps}>
                            {label}
                        </Label>
                    )} */}
                    <Field name={name}>
                        {({ field, meta }) => (
                            <FloatLabel label={label} labelClass={labelClass} labelProps={labelProps} value={field.value}>
                                <Input
                                    {...field}
                                    type={type}
                                    {...inputProps}
                                    disabled={disabled}
                                    required={required}
                                    className={`form-control ${inputClass} ${field.value ? "input-has-value" : ""}`}
                                    invalid={meta.touched && meta.error ? true : false}
                                />
                                {meta.touched && meta.error && <div className={`error ${errorMsgClass}`}>{meta.error}</div>}
                            </FloatLabel>
                        )}
                    </Field>
                </div>
            );
    }
};

export default FormInput;
