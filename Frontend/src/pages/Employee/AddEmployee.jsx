import BreadcrumbList from 'components/Common/BreadcrumbList';
import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';

const AddEmployee = () => {
    return (
        <div className='page-content'>
            <Container fluid>
                <BreadcrumbList title="Add Employee" />
                <Card>
                    <CardBody>

                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default AddEmployee;