import FormInput from "component/FormControls/FormInput";
import withRouter from "components/Common/withRouter";
import AppButton from "component/Buttons/AppButton";
import { useStores } from "store/storeProvider";
import { Row, Col, Alert } from "reactstrap";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginForm = (props) => {
    const { userStore } = useStores();

    return (
        <Formik
            initialValues={{
                username: "devshra" || '',
                password: "dev@123" || '',
            }}
            validationSchema={Yup.object({
                username: Yup.string().required("Please Enter Your Username"),
                password: Yup.string().required("Please Enter Your Password"),
            })}
            onSubmit={async (values) => {
                await userStore.loginUser(values, props.router.navigate);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="py-3">
                    {userStore.error ? <Alert color="danger">{userStore.error}</Alert> : null}
                    <Row className='row-cols-1 gap-3'>
                        <Col><FormInput label="Username" name="username" /></Col>
                        <Col><FormInput label="Password" name="password" type="password" withShowPassword /></Col>
                    </Row>
                    <AppButton label="Log In" type="submit" isSubmitting={isSubmitting} className="mt-3 w-100" />

                    <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                            <i className="mdi mdi-lock me-1" />
                            Forgot your password?
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default withRouter(observer(LoginForm));
