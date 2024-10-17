import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              &copy; {currentYear} Developed and maintained by Shukra Tamang.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
