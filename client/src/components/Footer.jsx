import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#f2f2f2", // Light grey background
    color: "#333333", // Darker grey for the text
    padding: "40px 0",
    textAlign: "center",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    color: "#4a4a4a", // Dark grey for section titles
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#555555", // Medium grey for links
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const socialIconStyle = {
    fontSize: "24px",
    color: "#333333", // Darker grey for social icons
    marginRight: "15px",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const handleHover = (e, isHovering) => {
    e.target.style.color = isHovering ? "#000000" : "#333333"; // Black on hover
    e.target.style.transform = isHovering ? "scale(1.2)" : "scale(1)";
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={sectionTitleStyle}>About Us</h5>
            <p>
              Discover a world of shopping with quality and convenience. Your
              satisfaction is our priority.
            </p>
          </Col>
          <Col md={4}>
            <h5 style={sectionTitleStyle}>Quick Links</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/shop" style={linkStyle}>
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" style={linkStyle}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" style={linkStyle}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" style={linkStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={sectionTitleStyle}>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
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
