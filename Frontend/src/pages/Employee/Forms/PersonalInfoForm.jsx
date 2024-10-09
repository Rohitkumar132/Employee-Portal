import AppButton from 'component/Buttons/AppButton';
import FormInput from 'component/FormControls/FormInput';
import { relationOptions } from 'constants/constants';
import { Form, Formik } from 'formik';
import React from 'react'
import { Col, Row } from 'reactstrap';
import * as Yup from 'yup';

const PersonalInfoForm = ({ initState, onSuccess = () => { } }) => {

    return (
        <Formik
            enableReinitialize
            initialValues={{
                firstName: initState?.firstName || '',
                lastName: initState?.lastName || '',
                fatherName: initState?.fatherName || '',
                motherName: initState?.motherName || '',
                officialEmail: initState?.officialEmail || '',
                dob: initState?.dob || '',
                education: initState?.education || '',
                aadhaar: initState?.aadhaar || '',
                pan: initState?.pan || '',
                currentAddress: initState?.currentAddress || '',
                phoneNumber: initState?.phoneNumber || '',
                permanentAddress: initState?.permanentAddress || '',
                contact: initState?.contact || '',
                email: initState?.email || '',
                emergency_name: initState?.emergency_name || '',
                emergency_contact: initState?.emergency_contact || '',
                emergency_relation: initState?.emergency_relation || '',
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                fatherName: Yup.string().required('Father name is required'),
                motherName: Yup.string().required('Mother name is required'),
                officialEmail: Yup.string()
                    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
                    .required('Official email is required'),
                dob: Yup.string().required('Date of birth is required'),
                education: Yup.string().required('Education is required'),
                aadhaar: Yup.string()
                    .matches(/^\d{4}\s\d{4}\s\d{4}$|^\d{12}$/, 'Invalid Aadhaar number')
                    .required('Aadhaar number is required'),
                pan: Yup.string()
                    .matches(/^[A-Z]{5}\d{4}[A-Z]{1}$/, 'Invalid PAN number format'),
                phoneNumber: Yup.string()
                    .matches(/^[789]\d{9}$/, 'Invalid phone number')
                    .required('Phone number is required'),
                currentAddress: Yup.string().required('Current address is required'),
                permanentAddress: Yup.string().required('Permanent address is required'),
                email: Yup.string()
                    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
                    .required('Email is required'),
                emergency_name: Yup.string().required('Emergency contact name is required'),
                emergency_contact: Yup.string()
                    .matches(/^[789]\d{9}$/, 'Invalid emergency contact number')
                    .required('Emergency contact is required'),
                emergency_relation: Yup.string().required('Emergency relation is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                localStorage.setItem('newUser', JSON.stringify(values));
                setSubmitting(false);
                onSuccess();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Row className="row-cols-2 border rounded overflow-hidden mb-3">
                        <Col sm={12} className='p-3 bg-primary bg-opacity-25 mb-3'>
                            <h6 className='mb-0'>Personal Information</h6>
                        </Col>
                        <Col><FormInput label='First Name' name='firstName' /></Col>
                        <Col><FormInput label='Last Name' name='lastName' /></Col>
                        <Col><FormInput label='Father Name' name='fatherName' /></Col>
                        <Col><FormInput label='Mother Name' name='motherName' /></Col>
                        <Col><FormInput label='Official Email Id' name='officialEmail' type='email' /></Col>
                        <Col><FormInput label='Email Id' name='email' type='email' /></Col>
                        <Col><FormInput label='Date of Birth' name='dob' type='date' /></Col>
                        <Col><FormInput label='Education' name='education' /></Col>
                        <Col><FormInput label='Aadhaar Number' name='aadhaar' type='text' /></Col>
                        <Col><FormInput label='Pan Number (optional)' name='pan' /></Col>
                        <Col><FormInput label='Phone Number' name='phoneNumber' type='text' /></Col>
                        <Col><FormInput label='Current Address' name='currentAddress' type='textarea' /></Col>
                        <Col><FormInput label='Permanent Address' name='permanentAddress' type='textarea' /></Col>
                    </Row>
                    <Row className="row-cols-2 border rounded overflow-hidden mb-3">
                        <Col sm={12} className='p-3 bg-primary bg-opacity-25 mb-3'>
                            <h6 className='mb-0'>Emergency Contact</h6>
                        </Col>
                        <Col><FormInput label='Name' name='emergency_name' /></Col>
                        <Col><FormInput label='Relation' name='emergency_relation' type='select' options={relationOptions} /></Col>
                        <Col><FormInput label='Contact' name='emergency_contact' type='text' /></Col>
                    </Row>
                    <div className="text-end">
                        <AppButton label='Next' isSubmitting={isSubmitting} type='submit' prefixIconList='right-arrow' />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default PersonalInfoForm;
