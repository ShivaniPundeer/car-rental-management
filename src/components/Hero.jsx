import React from "react";

export default function Hero({ scrollToCars }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100 pt-5">
          <div className="col-lg-7">
            <div className="eyebrow"><i className="bi bi-stars"></i> Premium car rentals made simple</div>
            <h1>Find your perfect ride.<br /><span>Start your journey.</span></h1>
            <p className="hero-copy">
              Explore reliable cars, transparent daily rates and a simple booking experience designed for every journey.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-warning btn-lg px-4" onClick={scrollToCars}>
                Explore Cars <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <a className="btn btn-outline-light btn-lg px-4" href="#about">Why DriveEasy?</a>
            </div>
            <div className="hero-stats mt-5">
              <div><strong>50+</strong><small>Cars</small></div>
              <div><strong>4.8/5</strong><small>Customer rating</small></div>
              <div><strong>24/7</strong><small>Support</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}