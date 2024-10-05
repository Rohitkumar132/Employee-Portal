import BreadcrumbList from 'components/Common/BreadcrumbList';
import React, { useState } from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkInfoForm from './Forms/WorkInfoForm';
import BankDetailForm from './Forms/BankDetailForm';
import DocumentForm from './Forms/DocumentForm';
import withRouter from 'components/Common/withRouter';
const AddEmployee = ({ router }) => {
    const [tab, setTab] = useState(0);

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
                                <PersonalInfoForm onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <WorkInfoForm onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <BankDetailForm onSuccess={onSuccess} />
                            </TabPanel>
                            <TabPanel>
                                <DocumentForm onSuccess={onSuccess} />
                            </TabPanel>
                        </Tabs>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default withRouter(AddEmployee);