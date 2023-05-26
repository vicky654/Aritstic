import React from 'react';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/buttons/PrimaryButton';
// import Header from '../components/Header'; // Commented out for now

export default function RegisterPage() {
  return (
    <>
      {/* <Header /> */}
      <header className="custom-header">
        <div className="container">
          <h1>Register Devices</h1>
        </div>
      </header>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card register-card mt-5">
          <div className="card-body border border-dark">
            <h2 className="card-title">
              Register your compatible TV or devices
            </h2>
            <h4>
              Enter the code shown on your TV or device to register it with your
              Prime account
            </h4>
            <div className="row main-body">
              <div className="col-lg-3 col-md-12">
                <h3 className="mt-4">Registration code:</h3>
              </div>
              <div className="col-lg-6 col-md-12">
                <input
                  type="text"
                  id="registerCode"
                  className="form-control"
                  style={{ padding: '17px' }}
                />
              </div>
              <div className="col-lg-3 col-md-12 mt-4 mt-md-0">
                <PrimaryButton
                  buttonType={Link}
                  smooth
                  to="contact"
                  className="btn btn-dark"
                >
                  Register Device
                </PrimaryButton>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">
                <h1>Step 1</h1>
                <h5>Select "Register on the Prime website"</h5>
              </div>
              <div className="col-md-4">
                <h1>Step 2</h1>
                <h5>Select "Register on the Prime website"</h5>
              </div>
              <div className="col-md-4">
                <h1>Step 3</h1>
                <h5>
                  Your registration code appears on the left of the screen
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclamer py-4 mb-4">
        <div className="container">
          <h3>Disclaimer: </h3>
          <h5>
            Disclaimer: Our website is independent and provides information
            about different streaming devices. We offer instructional guides and
            our own opinions on various streaming services and devices. It’s
            important to note that we don’t endorse or represent any specific
            brands, such as Amazon, Hulu, or Netflix, and we don’t claim
            ownership of any brands mentioned on our site.
          </h5>
        </div>
      </div>
    </>
  );
}
