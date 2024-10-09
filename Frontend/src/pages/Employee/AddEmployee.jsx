import BreadcrumbList from 'components/Common/BreadcrumbList';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkInfoForm from './Forms/WorkInfoForm';
import BankDetailForm from './Forms/BankDetailForm';
import DocumentForm from './Forms/DocumentForm';
import withRouter from 'components/Common/withRouter';
import { useStores } from 'store/storeProvider';
const AddEmployee = ({ router }) => {
    const { shopStore, employeeStore } = useStores();
    const { getCategoriesList } = shopStore;
    const { getEmployee } = employeeStore;

    const { id } = router.params;


    const [tab, setTab] = useState(0);
    const [initState, setInistate] = useState({});

    // useEffect(() => {
    //     if (localStorage.getItem('newUser'))
    //         setInistate(JSON.parse(localStorage.getItem('newUser')))
    // }, [localStorage.getItem('newUser')])
    useEffect(() => {
        if (id)
            getEmployee(id)
                .then(_ => setInistate(_))
    }, [id])

    useEffect(() => {
        if (tab === 1)
            getCategoriesList();
    }, [tab])

    const onTabChange = (index) => {
        setTab(index);
    }

    const onSuccess = () => {
        if (tab < 3) {
            setTab(tab + 1);
        } else {
            setTab(0);
            router.navigate('/dashboard');
        }
    }

    return (
        <div className='page-content'>
            <Container fluid>
                <BreadcrumbList title="Add Employee" />
                <Card>
                    <CardBody>
                        <Tabs selectedIndex={tab} onSelect={onTabChange}>
                            <TabList>
                                <Tab tabIndex='0'>Personal Info</Tab>
                                <Tab tabIndex='1'>Work Info</Tab>
                                <Tab tabIndex='2'>Back Details</Tab>
                                <Tab tabIndex='3'>Documents</Tab>
                            </TabList>
                            <TabPanel>
                                <PersonalInfoForm initState={initState} onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <WorkInfoForm initState={initState} onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <BankDetailForm initState={initState} onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <DocumentForm initState={initState} onSuccess={onSuccess} />
                            </TabPanel>
                        </Tabs>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default withRouter(AddEmployee);