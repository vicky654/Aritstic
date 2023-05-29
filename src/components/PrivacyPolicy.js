import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './titles/SectionTitle';
import ParagraphText from './paragraphTexts/ParagraphText';

const PrivacyPolicy = () => (
  <Container>
    <Row>
      <Col>
        <div className="privacy__info mx-5" style={{ textAlign: 'center' }}>
          <SectionTitle>Privacy Policy</SectionTitle>
          {/* <ParagraphText>We would love to hear from you.</ParagraphText> */}
        </div>
        <ParagraphText className="about__desc">
          Thank you for visiting blackwing.shop. At Blackwing, we are committed
          to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and
          disclose information when you interact with our website. By using our
          website, you consent to the practices described in this Privacy
          Policy.
          <br />
          <br />
          <span className="section-title">Information We Collect:</span>{' '}
          Personal Information: When you visit our website, we may collect
          certain personal information such as your name, email address,
          shipping address, and phone number. We collect this information when
          you voluntarily provide it to us through forms or when making a
          purchase.
          <br />
          <br />
          <span className="section-title"> Payment Information:</span> If you
          make a purchase on our website, we will collect payment information
          such as your credit card details or other payment method information.
          Please note that we do not store your complete payment information on
          our servers. We use trusted third-party payment processors to handle
          the secure processing of payments.
          <br />
          <br />
          <span className="section-title"> Usage Information:</span>
          We may automatically collect certain information about your visit to
          our website, including your IP address, browser type, operating
          system, referring URLs, pages visited, and the date and time of your
          visit. This information is used to analyze trends, administer the
          site, and track user movements on our website.
          <br />
          <br />
          <span className="section-title"> Cookies:</span> We may use cookies,
          web beacons, and similar technologies to enhance your browsing
          experience and personalize your interactions with our website. Cookies
          are small text files that are stored on your computer or mobile device
          when you visit a website. They help us remember your preferences and
          provide a more tailored experience. You can modify your browser
          settings to decline cookies or notify you when cookies are being used.
        </ParagraphText>
      </Col>
    </Row>
  </Container>
);
export default PrivacyPolicy;
