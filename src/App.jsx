import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import SearchFilter from "./components/SearchFilter";
import BookingForm from "./components/BookingForm";
import BookingHistory from "./components/BookingHistory";
import Footer from "./components/Footer";
import { cars } from "./data/cars";

const getStored = () => {
  try { return JSON.parse(localStorage.getItem("driveeasy_bookings")) || []; }
  catch { return []; }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("driveeasy_dark") === "true");
  const [bookings, setBookings] = useState(getStored);
  const [selectedCar, setSelectedCar] = useState(null);
  const [toast, setToast] = useState("");
  const [filters, setFilters] = useState({ search: "", category: "All", fuel: "All", sort: "featured" });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("driveeasy_dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("driveeasy_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      const q = filters.search.toLowerCase().trim();
      return (!q || car.name.toLowerCase().includes(q) || car.category.toLowerCase().includes(q))
        && (filters.category === "All" || car.category === filters.category)
        && (filters.fuel === "All" || car.fuel === filters.fuel);
    });
    if (filters.sort === "low") result.sort((a,b) => a.price-b.price);
    if (filters.sort === "high") result.sort((a,b) => b.price-a.price);
    if (filters.sort === "rating") result.sort((a,b) => b.rating-a.rating);
    return result;
  }, [filters]);

  const resetFilters = () => setFilters({ search: "", category: "All", fuel: "All", sort: "featured" });

  const scrollToCars = () => document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });

  const chooseCar = (car) => {
    setSelectedCar(car);
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const showDetails = (car) => {
    setSelectedCar(car);
    window.setTimeout(() => document.getElementById("car-detail")?.scrollIntoView({ behavior: "smooth", block: "center" }), 20);
  };

  const addBooking = (booking) => {
    setBookings(prev => [booking, ...prev]);
    setToast(`Booking confirmed for ${booking.carName}!`);
    window.setTimeout(() => setToast(""), 4000);
  };

  const deleteBooking = (id) => setBookings(prev => prev.filter(item => item.id !== id));

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} bookingCount={bookings.length} />
      <Hero scrollToCars={scrollToCars} />

      <main>
        <section id="cars" className="section-pad cars-section">
          <div className="container">
            <div className="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3">
              <div>
                <span className="eyebrow dark">OUR FLEET</span>
                <h2>Choose your ride</h2>
                <p>From compact city cars to premium SUVs, find a vehicle that fits your journey.</p>
              </div>
              <span className="results-count">{filteredCars.length} vehicles available</span>
            </div>
            <SearchFilter filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
            <div className="row g-4 mt-1">
              {filteredCars.length ? filteredCars.map(car => (
                <div className="col-md-6 col-xl-4" key={car.id}>
                  <CarCard car={car} onBook={chooseCar} onDetails={showDetails} />
                </div>
              )) : (
                <div className="col-12">
                  <div className="empty-bookings">
                    <div className="empty-icon"><i className="bi bi-search"></i></div>
                    <h3>No cars found</h3>
                    <p>Try changing your search or filters.</p>
                    <button className="btn btn-dark" onClick={resetFilters}>Show All Cars</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {selectedCar && (
          <section id="car-detail" className="section-pad detail-section">
            <div className="container">
              <div className="detail-card">
                <div className="row g-0 align-items-stretch">
                  <div className="col-lg-6">
                    <img src={selectedCar.image} alt={selectedCar.name} className="detail-image" />
                  </div>
                  <div className="col-lg-6 p-4 p-lg-5">
                    <span className="eyebrow dark">{selectedCar.category}</span>
                    <h2 className="mt-2">{selectedCar.name}</h2>
                    <div className="rating mb-3"><i className="bi bi-star-fill"></i> {selectedCar.rating} · Excellent choice</div>
                    <p>{selectedCar.description}</p>
                    <div className="detail-specs">
                      <div><i className="bi bi-fuel-pump"></i><span>Fuel<strong>{selectedCar.fuel}</strong></span></div>
                      <div><i className="bi bi-people"></i><span>Seats<strong>{selectedCar.seats}</strong></span></div>
                      <div><i className="bi bi-gear"></i><span>Transmission<strong>{selectedCar.transmission}</strong></span></div>
                      <div><i className="bi bi-cash-stack"></i><span>Daily rate<strong>₹{selectedCar.price.toLocaleString("en-IN")}</strong></span></div>
                    </div>
                    <button className="btn btn-warning btn-lg mt-4 fw-bold" onClick={() => chooseCar(selectedCar)}>
                      Book this car <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="about" className="section-pad about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="eyebrow dark">WHY DRIVE EASY</span>
                <h2>More than a rental.<br />A better way to travel.</h2>
                <p className="lead">We make car rentals straightforward with transparent pricing, quality vehicles and an easy digital booking experience.</p>
                <div className="feature-grid">
                  <div><i className="bi bi-shield-check"></i><h4>Trusted & Safe</h4><p>Quality-checked vehicles for every booking.</p></div>
                  <div><i className="bi bi-wallet2"></i><h4>Fair Pricing</h4><p>Simple daily rates with no hidden surprises.</p></div>
                  <div><i className="bi bi-headset"></i><h4>24/7 Support</h4><p>Help whenever you need it on your journey.</p></div>
                  <div><i className="bi bi-lightning-charge"></i><h4>Quick Booking</h4><p>Choose, book and get ready to drive.</p></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-visual">
                  <img src={cars[2].image} alt="Car on the road" />
                  <div className="floating-card"><strong>4.8/5</strong><span>Average customer rating</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking-form" className="section-pad booking-section">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <span className="eyebrow dark">READY TO GO?</span>
                <h2>Book your next journey.</h2>
                <p>Fill in your details and choose your preferred car and dates. Your reservation will be saved locally in this browser.</p>
                <div className="booking-perks">
                  <span><i className="bi bi-check-circle-fill"></i> Instant confirmation</span>
                  <span><i className="bi bi-check-circle-fill"></i> Flexible vehicle options</span>
                  <span><i className="bi bi-check-circle-fill"></i> Secure local booking storage</span>
                </div>
              </div>
              <div className="col-lg-7">
                <BookingForm cars={cars} selectedCar={selectedCar} onBooked={addBooking} />
              </div>
            </div>
          </div>
        </section>

        <BookingHistory bookings={bookings} onDelete={deleteBooking} />
      </main>

      <Footer />

      {toast && (
        <div className="toast-message">
          <i className="bi bi-check-circle-fill"></i>
          <div><strong>Success!</strong><span>{toast}</span></div>
          <button onClick={() => setToast("")}><i className="bi bi-x"></i></button>
        </div>
      )}
    </>
  );
}