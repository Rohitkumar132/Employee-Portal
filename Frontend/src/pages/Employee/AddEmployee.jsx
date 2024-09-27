import BreadcrumbList from 'components/Common/BreadcrumbList';
import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkInfoForm from './Forms/WorkInfoForm';
import BankDetailForm from './Forms/BankDetailForm';
import DocumentForm from './Forms/DocumentForm';
const AddEmployee = () => {
    return (
        <div className='page-content'>
            <Container fluid>
                <BreadcrumbList title="Add Employee" />
                <Card>
                    <CardBody>
                        <Tabs>
                            <TabList>
                                <Tab>Personal Info</Tab>
                                <Tab>Work Info</Tab>
                                <Tab>Back Details</Tab>
                                <Tab>Documents</Tab>
                            </TabList>
                            <TabPanel>
                                <PersonalInfoForm />
                            </TabPanel>
                            <TabPanel>
                                <WorkInfoForm />
                            </TabPanel>
                            <TabPanel>
                                <BankDetailForm />
                            </TabPanel>
                            <TabPanel>
                                <DocumentForm />
                            </TabPanel>
                        </Tabs>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default AddEmployee;