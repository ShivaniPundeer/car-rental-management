# 🚗 DriveEasy — Car Rental Management System

A modern, responsive **Car Rental Management System** built as an educational frontend project.

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5 / JSX
- CSS3
- Bootstrap 5
- Bootstrap Icons
- LocalStorage
- Vite

## Features

- Responsive homepage and navigation
- Hero section and company introduction
- Multiple car listings
- Search by car/model
- Filter by category and fuel type
- Sort by price and rating
- Car details section
- Booking form with validation
- Indian mobile number validation
- Date validation
- Booking history using LocalStorage
- Delete booking
- Dark mode
- Responsive design for mobile, tablet and desktop
- GitHub Pages-friendly Vite configuration

## Run Locally

Install Node.js, then:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production Build

```bash
npm run build
```

The production files are generated inside `dist/`.

## GitHub Pages

This project uses Vite with:

```js
base: "./"
```

For GitHub Pages, build the project and deploy the generated `dist` folder using GitHub Pages or a suitable GitHub Pages deployment workflow.

## Project Structure

```text
public/
src/
  components/
  data/
  pages/          # reserved for future page-based expansion
  App.jsx
  main.jsx
  style.css
package.json
vite.config.js
index.html
README.md
```

## Notes

The car images use remote Unsplash image URLs. An internet connection is required for those images to load.

This project is intended for learning, internship/task submission and portfolio demonstration. It does not process real payments or real vehicle reservations.
