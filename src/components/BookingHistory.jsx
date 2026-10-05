import React from "react";

export default function BookingHistory({ bookings, onDelete }) {
  return (
    <section id="bookings" className="section-pad booking-history-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow dark">YOUR RESERVATIONS</span>
          <h2>Booking History</h2>
          <p>Your recent reservations are stored locally in your browser.</p>
        </div>
        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon"><i className="bi bi-calendar2-x"></i></div>
            <h3>No bookings yet</h3>
            <p>Choose a car and complete the booking form to see your reservation here.</p>
            <a href="#cars" className="btn btn-dark">Browse Cars</a>
          </div>
        ) : (
          <div className="row g-3">
            {bookings.map(booking => (
              <div className="col-lg-6" key={booking.id}>
                <div className="booking-item">
                  <div>
                    <div className="booking-id">BOOKING #{String(booking.id).slice(-6)}</div>
                    <h3>{booking.carName}</h3>
                    <p className="mb-1"><i className="bi bi-calendar3 me-2"></i>{booking.pickup} → {booking.returnDate}</p>
                    <p className="mb-0"><i className="bi bi-geo-alt me-2"></i>{booking.location} · {booking.name}</p>
                  </div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(booking.id)} title="Delete booking">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}