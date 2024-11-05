import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p className="small">
              We are dedicated to providing top-quality products and a seamless
              shopping experience. Trust us for exceptional service and
              unparalleled convenience.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold">Connect with Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-light me-3" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-light me-3" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-light me-3" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-light" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0 small">
              &copy; {currentYear} Developed and maintained by Shukra Tamang.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
