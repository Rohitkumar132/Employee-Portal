import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Avatar from 'component/Avatar/Avatar';
import { Link } from 'react-router-dom';
const EmployeeCards = ({ data = {} }) => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex gap-3 align-items-center">
                    <Avatar name={data?.firstName} />
                    <div>
                        <Link to={`/add-employee/${data?._id}`} className='fw-bold text-body'>{data?.firstName} {data?.lastName}</Link>
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