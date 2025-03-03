import Place from "./components/Place.jsx";
import PlaceDetails from "./components/PlaceDetails.jsx";
import CityInfo from "./components/CityInfo.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CITIES = ["London", "Tokyo", "New York", "Paris", "Sydney", "Dubai", "Rome", "Berlin", "Beijing"];

function Home() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "20px", background: "#f4f4f4" }}>
        <h1>🌍 PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>

      <main style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <nav>
          <h2>Explore Cities</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {CITIES.map((city) => (
              <li key={city} style={{ marginBottom: "5px" }}>
                <Link to={`/city/${city}`} style={{ textDecoration: "none", color: "#007bff" }}>
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2>Places</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {AVAILABLE_PLACES.map((place) => (
              <li key={place.id} style={{ marginBottom: "10px" }}>
                <Link to={`/place/${place.id}`} style={{ textDecoration: "none", color: "#28a745" }}>
                  <Place place={place} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/city/:cityName" element={<CityInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
