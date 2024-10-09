import AppButton from 'component/Buttons/AppButton';
import FormInput from 'component/FormControls/FormInput';
import { monthOptions, roleOptions, shiftOptions, daysList } from 'constants/constants';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { useStores } from 'store/storeProvider';
import * as Yup from 'yup';

const WorkInfoForm = ({ initState, onSuccess = () => { } }) => {
    const { shopStore } = useStores();
    const { list } = shopStore;

    return (
        <Formik
            enableReinitialize
            initialValues={{
                role: initState?.role || '',
                shift: initState?.shift || '',
                doj: initState?.doj || '',
                allocation_under: initState?.allocation_under || '',
                biometric_id: initState?.biometric_id || '',
                week_off: initState?.week_off || '',
                opfin_id: initState?.opfin_id || '',
                category: initState?.category || '',
                travel_allowance: initState?.travel_allowance || '',
                epfo: initState?.epfo || '',
                esic: initState?.esic || '',
                username: initState?.username || '',
                password: initState?.password || '',
                confirm_password: initState?.confirm_password || '',
            }}
            validationSchema={Yup.object().shape({
                role: Yup.string().required('Role is required'),
                shift: Yup.string().required('Shift is required'),
                doj: Yup.date().required('Date of joining is required').nullable(),
                allocation_under: Yup.string().required('Allocated under is required'),
                biometric_id: Yup.string().optional(),
                week_off: Yup.string().required('Week off is required'),
                opfin_id: Yup.string().optional(),
                category: Yup.array().of(
                    Yup.object().required('Category is required')
                ).required('Category is required'),
                appraisal_month: Yup.string().required('Appraisal Month is required'),
                travel_allowance: Yup.number().typeError('Must be a number'),
                epfo: Yup.string()
                    .matches(/^[A-Z]{1}\d{7}$/, 'Invalid EPFO number format (A1234567)')
                    .optional(),
                esic: Yup.string()
                    .matches(/^\d{2}-\d{3}-\d{4}$/, 'Invalid ESIC number format (XX-XXX-XXXX)')
                    .optional(),
                username: Yup.string().required('Username is required'),
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
                    <Row className="row-cols-1 row-cols-md-2 border rounded overflow-hidden mb-3">
                        <Col md={12} className='p-3 bg-primary bg-opacity-25 mb-3'>
                            <h6 className='mb-0'>Work Information</h6>
                        </Col>
                        <Col><FormInput label='Role' name='role' type='select' options={roleOptions} /></Col>
                        <Col><FormInput label='Shift' name='shift' type='select' options={shiftOptions} /></Col>
                        <Col><FormInput label='Date of Joining' name='doj' type='date' /></Col>
                        <Col><FormInput label='Allocated Under' name='allocation_under' /></Col>
                        <Col><FormInput label='Biometric ID' name='biometric_id' /></Col>
                        <Col><FormInput label='Week Off' name='week_off' type='select' options={daysList} /></Col>
                        <Col><FormInput label='Opfin ID' name='opfin_id' /></Col>
                        <Col><FormInput label='Category' name='category' type='select' isMulti options={list?.map(_ => ({ label: _.store_category, value: _._id })) || []} /></Col>
                        <Col><FormInput label='Travel Allowance (Optional)' name='travel_allowance' /></Col>
                        <Col><FormInput label='Appraisal Month' name='appraisal_month' type='select' options={monthOptions} /></Col>
                        <Col><FormInput label='EPFO No (Optional)' name='epfo' /></Col>
                        <Col><FormInput label='ESIC No (Optional)' name='esic' /></Col>
                        <Col><FormInput label='Username' name='username' /></Col>
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

export default observer(WorkInfoForm);
