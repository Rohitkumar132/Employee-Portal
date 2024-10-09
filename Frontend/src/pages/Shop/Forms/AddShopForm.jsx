import AppButton from 'component/Buttons/AppButton';
import Divider from 'component/Divider/Divider';
import FormInput from 'component/FormControls/FormInput';
import { daysList, posQty, storeList } from 'constants/constants';
import { Form, Formik } from 'formik';
import { use } from 'i18next';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'reactstrap';
import { useStores } from 'store/storeProvider';
import * as Yup from 'yup';

const AddShopForm = () => {
  const { shopStore } = useStores();
  const { list, getCategoriesList } = shopStore;

  const formikRef = useRef();

  useEffect(() => {
    if (formikRef.current?.values?.isExistingShop == 'true') {
      getCategoriesList()
    }
  }, [formikRef.current?.values?.isExistingShop]);

  return (
    <Formik
      enableReinitialize
      innerRef={formikRef}
      initialValues={{
        isExistingShop: 'true',
        timings: 'true'
      }}
      validationSchema={Yup.object({
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <h4 className="text-center">Add Shop</h4>
          <Row className='d-flex gap-3 mb-3'>
            <Col>
              <FormInput
                type='radio'
                name='isExistingShop'
                label='Add new Customer'
                inputProps={{ value: 'false' }}
              />
            </Col>
            <Col>
              <FormInput
                type='radio'
                name='isExistingShop'
                label='Select Customer'
                inputProps={{ value: 'true' }}
              />
            </Col>
          </Row>
          {values.isExistingShop == 'false' &&
            <Row className='row-cols-1 row-cols-2 g-2'>
              <Col md={12}><Divider title="Owner Details" className='fw-bold' /></Col>
              <Col><FormInput name='firstName' label='First Name' /></Col>
              <Col><FormInput name='lastName' label='Last Name' /></Col>
              <Col><FormInput name='phoneNumber' label='Phone Number' /></Col>
              <Col><FormInput name='email' label='Email' /></Col>
            </Row>
          }
          {values.isExistingShop == 'true' &&
            <Row className='row-cols-1 row-cols-md-2 g-2'>
              <Col md={12}><Divider title="Owner Details" className='fw-bold' /></Col>
              <Col md={12}><FormInput name='customer' label='Select Customer' type='select' options={[]} /></Col>
              <Col><FormInput disabled name='firstName' label='First Name' /></Col>
              <Col><FormInput disabled name='lastName' label='Last Name' /></Col>
              <Col><FormInput disabled name='phoneNumber' label='Phone Number' /></Col>
              <Col><FormInput disabled name='email' label='Email' /></Col>
            </Row>
          }

          <Divider title="Shop Details" className='fw-bold' />
          <Row className='row-cols-1 row-cols-md-2 g-2 mb-3'>
            <Col><FormInput name='name' label='Name' /></Col>
            <Col><FormInput name='address' label='Address' /></Col>
            <Col><FormInput name='city' label='City' /></Col>
            <Col><FormInput name='state' label='State' type='select' /></Col>
            <Col><FormInput name='zipcode' label='Zipcode' /></Col>
            <Col><FormInput name='store_phoneNumber' label='Phone Number' /></Col>
            <Col><FormInput name='pos_name' label='POS Company' /></Col>
            <Col><FormInput name='pos_qty' label='POS Quantity' type='select' options={posQty} /></Col>
            <Col md={12}><FormInput label='Category' name='category' type='select' isMulti options={list?.map(_ => ({ label: _.store_category, value: _._id })) || []} /></Col>
            <Col>
              <FormInput
                type='radio'
                name='timings'
                label='24 X 7'
                inputProps={{ value: 'false' }}
              />
            </Col>
            <Col>
              <FormInput
                type='radio'
                name='timings'
                label='Other'
                inputProps={{ value: 'true' }}
              />
            </Col>
          </Row>

          {values.timings == 'true' &&
            <Row className='mb-3row-cols-1 row-cols-md-4 g-2'>
              <Col><FormInput name='opening_day' label='From' type='select' options={daysList} /></Col>
              <Col><FormInput name='closing_day' label='To' type='select' options={daysList} /></Col>
              <Col><FormInput name='start_time' label='Start' type='time' /></Col>
              <Col><FormInput name='end_time' label='End' type='time' /></Col>
            </Row>
          }

          <Row className='mb-3row-cols-1 row-cols-md-2 g-2'>
            <Col><FormInput name='nest_account' label='Nest Account' /></Col>
            <Col><FormInput name='store_img' label='Store Image' type="select" options={storeList} /></Col>
          </Row>

          <AppButton className='mt-3' center type='submit' label='Submit' isSubmitting={isSubmitting} />
        </Form>
      )
      }
    </Formik >
  )
}

export default observer(AddShopForm);