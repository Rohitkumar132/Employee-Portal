import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Avatar from './Avatar';
const EmployeeCards = ({ data = {} }) => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex gap-3 align-items-center">
                    <Avatar name={data?.firstName} />
                    <div>
                        <div className='fw-bold'>{data?.firstName} {data?.lastName}</div>
                        <span className='text-muted font-size-11'>
                            {data?.email}
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default EmployeeCards;