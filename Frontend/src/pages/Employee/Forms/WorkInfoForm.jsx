import AppButton from 'component/Buttons/AppButton';
import FormInput from 'component/FormControls/FormInput';
import { Form, Formik } from 'formik';
import React from 'react';
import { Col, Row } from 'reactstrap';
import * as Yup from 'yup';

const roleOptions = [
    { label: 'Team Leader', value: 'team leader' },
    { label: 'Employee', value: 'employee' },
    { label: 'Super Admin', value: 'super admin' }
]

const WorkInfoForm = ({ onSuccess = () => { } }) => {
    return (
        <Formik
            initialValues={{
                role: '',
                shift: '',
                doj: '',
                allocation_under: '',
                biometric_id: '',
                week_off: '',
                opfin_id: '',
                category: '',
                travel_allowance: '',
                epfo: '',
                esic: '',
                userName: '',
                password: '',
                confirm_password: '',
            }}
            validationSchema={Yup.object().shape({
                role: Yup.string().oneOf(roleOptions.map(option => option.value), 'Invalid role').required('Role is required'),
                // shift: Yup.string().required('Shift is required'),
                doj: Yup.date().required('Date of joining is required').nullable(),
                allocation_under: Yup.string().required('Allocated under is required'),
                biometric_id: Yup.string().optional(),
                // week_off: Yup.string().required('Week off is required'),
                opfin_id: Yup.string().optional(),
                // category: Yup.string().required('Category is required'),
                travel_allowance: Yup.number().typeError('Must be a number'),
                epfo: Yup.string()
                    .matches(/^[A-Z]{1}\d{7}$/, 'Invalid EPFO number format (A1234567)')
                    .optional(),
                esic: Yup.string()
                    .matches(/^\d{2}-\d{3}-\d{4}$/, 'Invalid ESIC number format (XX-XXX-XXXX)')
                    .optional(),
                userName: Yup.string().required('Username is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters long')
                    .required('Password is required'),
                confirm_password: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                const data = JSON.parse(localStorage.getItem('newUser'));
                localStorage.setItem('newUser', JSON.stringify({ ...data, ...values }));
                setSubmitting(false);
                onSuccess();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Row className="row-cols-2 border rounded overflow-hidden mb-3">
                        <Col sm={12} className='p-3 bg-primary bg-opacity-25 mb-3'>
                            <h6 className='mb-0'>Work Information</h6>
                        </Col>
                        <Col><FormInput label='Role' name='role' type='select' options={roleOptions} /></Col>
                        <Col><FormInput label='Shift' name='shift' type='select' /></Col>
                        <Col><FormInput label='Date of Joining' name='doj' type='date' /></Col>
                        <Col><FormInput label='Allocated Under' name='allocation_under' /></Col>
                        <Col><FormInput label='Biometric ID' name='biometric_id' /></Col>
                        <Col><FormInput label='Week Off' name='week_off' type='select' /></Col>
                        <Col><FormInput label='Opfin ID' name='opfin_id' /></Col>
                        <Col><FormInput label='Category' name='category' type='select' /></Col>
                        <Col><FormInput label='Travel Allowance (Optional)' name='travel_allowance' /></Col>
                        <Col><FormInput label='Appraisal Month' name='appraisal_month' type='select' /></Col>
                        <Col><FormInput label='EPFO No (Optional)' name='epfo' /></Col>
                        <Col><FormInput label='ESIC No (Optional)' name='esic' /></Col>
                        <Col><FormInput label='Username' name='userName' /></Col>
                        <Col><FormInput label='Password' name='password' type='password' /></Col>
                        <Col><FormInput label='Confirm Password' name='confirm_password' type='password' withShowPassword /></Col>
                    </Row>
                    <div className="text-end">
                        <AppButton label='Next' isSubmitting={isSubmitting} type='submit' prefixIconList='right-arrow' />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default WorkInfoForm;
