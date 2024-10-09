import BreadcrumbList from "components/Common/BreadcrumbList";
import { Col, Container, Row } from "reactstrap";
import React, { useEffect } from 'react'
import { useStores } from "store/storeProvider";
import { observer } from "mobx-react-lite";
import ShopCard from "./Components/ShopCard";

const ShopList = () => {

    const { shopStore } = useStores();
    const { getList, list } = shopStore;

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
                            <ShopCard data={_} />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default observer(ShopList);