import React from "react";

export default function SearchFilter({ filters, setFilters, resetFilters }) {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  return (
    <div className="filter-box">
      <div className="row g-3 align-items-end">
        <div className="col-lg-4">
          <label className="form-label">Search car</label>
          <div className="input-icon">
            <i className="bi bi-search"></i>
            <input
              className="form-control"
              placeholder="Search by model..."
              value={filters.search}
              onChange={e => update("search", e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-lg-2">
          <label className="form-label">Category</label>
          <select className="form-select" value={filters.category} onChange={e => update("category", e.target.value)}>
            <option>All</option><option>Sedan</option><option>SUV</option><option>Hatchback</option><option>Luxury</option>
          </select>
        </div>
        <div className="col-sm-6 col-lg-2">
          <label className="form-label">Fuel</label>
          <select className="form-select" value={filters.fuel} onChange={e => update("fuel", e.target.value)}>
            <option>All</option><option>Petrol</option><option>Diesel</option>
          </select>
        </div>
        <div className="col-sm-6 col-lg-2">
          <label className="form-label">Sort by</label>
          <select className="form-select" value={filters.sort} onChange={e => update("sort", e.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <div className="col-sm-6 col-lg-2">
          <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>
            <i className="bi bi-arrow-counterclockwise me-1"></i> Reset
          </button>
        </div>
      </div>
    </div>
  );
}