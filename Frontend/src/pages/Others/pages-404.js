import React from "react";
import { Container, Row, Col } from "reactstrap";
import error from "assets/images/error-img.png";
import withRouter from "components/Common/withRouter";

const Pages404 = ({ router: { navigate } }) => {
  document.title = "Page Not Found";

  const onBack = () => {
    navigate("/")
  }

  return (
      <div className='account-pages my-5 pt-5'>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='text-center mt-5'>
                <h1 className='display-2 font-weight-medium'>
                  4<i className='bx bx-buoy bx-spin text-primary display-3' />4
                </h1>
                <h4 className='text-uppercase'>Sorry, page not found</h4>
                <div className='mt-5 text-center'>
                  <button className='btn btn-primary' onClick={onBack}>
                    Back
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col md='8' xl='6'>
              <div>
                <img src={error} alt='' className='img-fluid' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default withRouter(Pages404);
