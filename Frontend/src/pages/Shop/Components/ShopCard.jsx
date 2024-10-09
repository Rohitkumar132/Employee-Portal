import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Avatar from 'component/Avatar/Avatar';
const ShopCard = ({ data = {} }) => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex gap-3 align-items-center">
                    <Avatar name={data?.name} />
                    <div>
                        <div className='fw-bold'>{data?.name}</div>
                        <span className='text-muted font-size-11'>
                            {data?.state}
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default ShopCard;