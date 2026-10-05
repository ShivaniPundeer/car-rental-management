import React from "react";

export default function CarCard({ car, onBook, onDetails }) {
  return (
    <article className="car-card h-100">
      <div className="car-image-wrap">
        <img src={car.image} alt={car.name} className="car-image" />
        <span className="availability"><i className="bi bi-circle-fill"></i> Available</span>
        <span className="category-badge">{car.category}</span>
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div>
            <h3 className="h5 fw-bold mb-1">{car.name}</h3>
            <div className="rating"><i className="bi bi-star-fill"></i> {car.rating}</div>
          </div>
          <div className="text-end">
            <strong className="price">₹{car.price.toLocaleString("en-IN")}</strong>
            <small className="d-block text-muted">/ day</small>
          </div>
        </div>
        <div className="car-specs mt-3">
          <span><i className="bi bi-fuel-pump"></i>{car.fuel}</span>
          <span><i className="bi bi-people"></i>{car.seats} Seats</span>
          <span><i className="bi bi-gear"></i>{car.transmission}</span>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button className="btn btn-outline-dark flex-fill" onClick={() => onDetails(car)}>Details</button>
          <button className="btn btn-warning flex-fill fw-semibold" onClick={() => onBook(car)}>Book Now</button>
        </div>
      </div>
    </article>
  );
}