import React, { useMemo, useState } from "react";

const initialForm = { name: "", email: "", phone: "", carId: "", pickup: "", returnDate: "", location: "" };

export default function BookingForm({ cars, selectedCar, onBooked }) {
  const [form, setForm] = useState(() => ({ ...initialForm, carId: selectedCar?.id || "" }));
  const [error, setError] = useState("");

  React.useEffect(() => {
    if (selectedCar) setForm(prev => ({ ...prev, carId: String(selectedCar.id) }));
  }, [selectedCar]);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const change = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.carId || !form.pickup || !form.returnDate || !form.location) {
      setError("Please complete all required fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (form.returnDate <= form.pickup) {
      setError("Return date must be after the pickup date.");
      return;
    }

    const car = cars.find(c => c.id === Number(form.carId));
    const booking = {
      id: Date.now(),
      ...form,
      carName: car.name,
      price: car.price,
      createdAt: new Date().toLocaleString("en-IN")
    };

    onBooked(booking);
    setForm({ ...initialForm });
    setError("");
    document.getElementById("bookings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      {error && <div className="alert alert-danger py-2"><i className="bi bi-exclamation-circle me-2"></i>{error}</div>}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name *</label>
          <input className="form-control" value={form.name} onChange={e => change("name", e.target.value)} placeholder="Enter your name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email *</label>
          <input type="email" className="form-control" value={form.email} onChange={e => change("email", e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone *</label>
          <input type="tel" maxLength="10" className="form-control" value={form.phone} onChange={e => change("phone", e.target.value.replace(/\D/g, ""))} placeholder="10-digit mobile number" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Choose Car *</label>
          <select className="form-select" value={form.carId} onChange={e => change("carId", e.target.value)}>
            <option value="">Select a car</option>
            {cars.map(car => <option key={car.id} value={car.id}>{car.name} — ₹{car.price.toLocaleString("en-IN")}/day</option>)}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Pickup Date *</label>
          <input type="date" min={today} className="form-control" value={form.pickup} onChange={e => change("pickup", e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Return Date *</label>
          <input type="date" min={form.pickup || today} className="form-control" value={form.returnDate} onChange={e => change("returnDate", e.target.value)} />
        </div>
        <div className="col-12">
          <label className="form-label">Pickup Location *</label>
          <select className="form-select" value={form.location} onChange={e => change("location", e.target.value)}>
            <option value="">Select pickup location</option>
            <option>Delhi</option><option>Gurugram</option><option>Noida</option><option>Ghaziabad</option><option>Mathura</option>
          </select>
        </div>
        <div className="col-12">
          <button className="btn btn-warning btn-lg w-100 fw-bold" type="submit">
            Confirm Booking <i className="bi bi-check2-circle ms-2"></i>
          </button>
        </div>
      </div>
    </form>
  );
}