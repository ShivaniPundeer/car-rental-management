import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <a href="#home" className="footer-brand">Drive<span>Easy</span></a>
            <p className="mt-3">Simple, reliable and affordable car rentals for every kind of journey.</p>
            <div className="socials mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Explore</h5>
            <a href="#home">Home</a><a href="#cars">Our Cars</a><a href="#about">About</a><a href="#bookings">Bookings</a>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Support</h5>
            <a href="#contact">Help Center</a><a href="#contact">Contact</a><a href="#contact">Privacy</a><a href="#contact">Terms</a>
          </div>
          <div className="col-lg-3">
            <h5>Contact</h5>
            <p><i className="bi bi-envelope me-2"></i>hello@driveeasy.example</p>
            <p><i className="bi bi-telephone me-2"></i>+91 98765 43210</p>
            <p><i className="bi bi-clock me-2"></i>24/7 Customer support</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small">
          <span>© 2026 DriveEasy. Built for educational purposes.</span>
          <span>React.js · JavaScript · Bootstrap · CSS</span>
        </div>
      </div>
    </footer>
  );
}