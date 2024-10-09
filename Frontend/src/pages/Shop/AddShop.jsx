import BreadcrumbList from 'components/Common/BreadcrumbList';
import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import AddShopForm from './Forms/AddShopForm';

const AddShop = () => {
  return (
    <div className='page-content'>
      <Container fluid>
        {/* <BreadcrumbList title='Add Shop' /> */}
        <Card>
          <CardBody>
            <AddShopForm />
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default AddShop;