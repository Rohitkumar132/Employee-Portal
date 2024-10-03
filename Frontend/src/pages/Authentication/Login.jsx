import { Row, Col, CardBody, Card, Container } from "reactstrap";
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";
import LoginForm from "./Forms/LoginForm";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <div className="account-pages my-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="overflow-hidden">
              <div className="bg-primary-subtle">
                <Row>
                  <Col className="col-7">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Welcome Back!</h5>
                      <p>Sign in to continue</p>
                    </div>
                  </Col>
                  <Col className="col-5 align-self-end">
                    <img src={profile} alt="" className="img-fluid" />
                  </Col>
                </Row>
              </div>
              <CardBody className="pt-0">
                <div>
                  <Link to="/" className="logo-light-element">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={logo} alt="" className="rounded-circle" height="34" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="p-2">
                  <LoginForm />
                </div>
              </CardBody>
            </Card>
            {/* <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    Signup now{" "}
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" />
                </p>
              </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
