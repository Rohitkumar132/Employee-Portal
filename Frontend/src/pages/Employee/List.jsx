import BreadcrumbList from "components/Common/BreadcrumbList";
import { Col, Container, Row } from "reactstrap";
import React, { useEffect } from 'react'
import { useStores } from "store/storeProvider";
import EmployeeCards from "./EmployeeCards";
import { observer } from "mobx-react-lite";

const EmployeeList = () => {

    const { employeeStore } = useStores();

    const { getList, list } = employeeStore;

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="page-content">
            <Container fluid>
                <BreadcrumbList title="Employee List" />
                <Row className='row-cols-3'>
                    {list.map((_, i) =>
                        <Col key={i}>
                            <EmployeeCards data={_} />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default observer(EmployeeList);