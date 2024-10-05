import AppButton from 'component/Buttons/AppButton';
import FormInput from 'component/FormControls/FormInput';
import { Form, Formik } from 'formik';
import React from 'react';
import { Col, Row } from 'reactstrap';
import * as Yup from 'yup';

const BankDetailForm = ({ onSuccess = () => { } }) => {
    return (
        <Formik
            initialValues={{
                name_on_passbook: '',
                bank_name: '',
                account_number: '',
                ifsc: '',
                branch_name: '',
                city: '',
            }}
            validationSchema={Yup.object().shape({
                name_on_passbook: Yup.string().required('Name on passbook is required'),
                bank_name: Yup.string().required('Bank name is required'),
                account_number: Yup.string()
                    .required('Account number is required')
                    .matches(/^\d{9,18}$/, 'Account number must be between 9 and 18 digits'),
                ifsc: Yup.string()
                    .required('IFSC code is required')
                    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'IFSC code format ABCD0XYZ123'),
                branch_name: Yup.string().required('Branch name is required'),
                city: Yup.string().required('City is required'),
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
                            <h6 className='mb-0'>Bank Details</h6>
                        </Col>
                        <Col><FormInput label='Name on Passbook' name='name_on_passbook' /></Col>
                        <Col><FormInput label='Bank Name' name='bank_name' /></Col>
                        <Col><FormInput label='Account Number' name='account_number' /></Col>
                        <Col><FormInput label='IFSC Code' name='ifsc' /></Col>
                        <Col><FormInput label='Branch Name' name='branch_name' /></Col>
                        <Col><FormInput label='City' name='city' /></Col>
                    </Row>
                    <div className="text-end">
                        <AppButton label='Next' isSubmitting={isSubmitting} type='submit' prefixIconList='right-arrow' />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default BankDetailForm;
