import { objectToFormData } from 'common/helperFunctions';
import AppButton from 'component/Buttons/AppButton';
import FormInput from 'component/FormControls/FormInput';
import { Form, Formik } from 'formik';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { useStores } from 'store/storeProvider';
import * as Yup from 'yup';

const DocumentForm = ({ onSuccess = () => { } }) => {
    const { employeeStore } = useStores();
    const { addUser } = employeeStore;
    console.log(employeeStore)

    return (
        <Formik
            initialValues={{
                aadhaar_card_doc: '',
                pan_card_doc: '',
                qualification: '',
                resume_doc: '',
                employment_doc: '',
                passport_doc: '',
                spouse_photo_id_doc: '',
                pcc_doc: '',
                code_of_conduct_doc: '',
                company_assets_doc: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                const data = JSON.parse(localStorage.getItem('newUser'));

                const formData = new FormData();
                objectToFormData({ ...data, ...values }, formData);
                addUser(data)
                    .then((res) => {
                        console.log(res)
                        onSuccess();
                    })
                    .finally(() => setSubmitting(false))

            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Row className="row-cols-2 g-3 border rounded overflow-hidden mb-3">
                        <Col sm={12} className='p-3 bg-primary bg-opacity-25 mb-3'>
                            <h6 className='mb-0'>Bank Details</h6>
                        </Col>
                        <Col><FormInput label='Aadhaar Card' name='aadhaar_card_doc' type='file' /></Col>
                        <Col><FormInput label='Pan Card' name='pan_card_doc' type='file' /></Col>
                        <Col><FormInput label='Qualification' name='qualification' type='file' /></Col>
                        <Col><FormInput label='Resume' name='resume_doc' type='file' /></Col>
                        <Col><FormInput label='Employment' name='employment_doc' type='file' /></Col>
                        <Col><FormInput label='Passport' name='passport_doc' type='file' /></Col>
                        <Col><FormInput label='Spouse Photo Id' name='spouse_photo_id_doc' type='file' /></Col>
                        <Col><FormInput label='PCC' name='pcc_doc' type='file' /></Col>
                        <Col><FormInput label='Code of Conduct' name='code_of_conduct_doc' type='file' /></Col>
                        <Col><FormInput label='Company Assets' name='company_assets_doc' type='file' /></Col>
                    </Row>
                    <div className="text-end">
                        <AppButton label='Submit' isSubmitting={isSubmitting} type='submit' />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default DocumentForm;
