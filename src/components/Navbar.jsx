import React from "react";

export default function Navbar({ darkMode, setDarkMode, bookingCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-glass">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home">
          <span className="brand-icon"><i className="bi bi-car-front-fill"></i></span>
          Drive<span>Easy</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#cars">Cars</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <button className="icon-btn ms-lg-2" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
                <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
              </button>
            </li>
            <li className="nav-item">
              <a className="btn btn-warning nav-book-btn ms-lg-2" href="#bookings">
                <i className="bi bi-calendar-check me-1"></i> Bookings
                {bookingCount > 0 && <span className="badge text-bg-dark ms-1">{bookingCount}</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}