import { useParams } from "react-router-dom";

const cityData = {
  London: { country: "UK", population: "8.9M", description: "A historic city with a modern vibe." },
  Tokyo: { country: "Japan", population: "14M", description: "A bustling metropolis full of life." },
  "New York": { country: "USA", population: "8.3M", description: "The city that never sleeps." },
  Paris: { country: "France", population: "2.1M", description: "The city of love and lights." },
  Sydney: { country: "Australia", population: "5.3M", description: "Famous for its Sydney Opera House and beaches." },
  Dubai: { country: "UAE", population: "3.4M", description: "A modern city known for its skyscrapers and luxury." },
  Rome: { country: "Italy", population: "2.8M", description: "Home to the ancient Colosseum and rich history." },
  Berlin: { country: "Germany", population: "3.6M", description: "A city with deep history and vibrant culture." },
  Beijing: { country: "China", population: "21M", description: "A city full of history, including the Great Wall." },
};

function CityInfo() {
  const { cityName } = useParams();
  const city = cityData[cityName];

  if (!city) return <h2>City not found!</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center", border: "1px solid #ccc" }}>
      <h1>{cityName}</h1>
      <h2>Country: {city.country}</h2>
      <h3>Population: {city.population}</h3>
      <p>{city.description}</p>
      <a href="/">Back to Home</a>
    </div>
  );
}

export default CityInfo;
