// Initialize the Leaflet map
const map = L.map('map', { scrollWheelZoom: false }).setView([-28.452, 21.241], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Trigger search when button is clicked
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById("searchInput").value.trim();
  const resultCards = document.getElementById("resultCards");
  resultCards.innerHTML = ""; // Clear old results

  // Dummy result data (replace with API results later)
  const results =generateDummyResults(query);

   function generateDummyResults(query) {
  const stores = [
    { name: "FOODZONE", lat: -28.45, lon: 21.24 },
    { name: "martMart", lat: -28.454, lon: 21.243 },
    { name: "MegaStore", lat: -28.447, lon: 21.238 },
    { name: "BudgetBazaar", lat: -28.451, lon: 21.239 },
    { name: "DailyDeals", lat: -28.449, lon: 21.242 },
  ];

  const results = stores.slice(0, 3).map(store => {
    const price = "R" + (6+ Math.floor(Math.random() * 100)); // Random price between R200-R299
    return {
      name: query,
      price: price,
      store: store.name,
      lat: store.lat,
      lon: store.lon
    };
  });

  return results;
}



  // Add each result to the map and card list
  results.forEach((item, idx) => {
    L.marker([item.lat, item.lon])
      .addTo(map)
      .bindPopup(`<strong>${item.store}</strong><br>${item.name}<br>${item.price}`);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="store-logo">Logo</div>
      <div>
        <strong>${item.name}</strong><br>
        ${item.store}<br>
        <b>${item.price}</b><br>
        <button onclick="addToCart(${idx})">Add to Cart</button>
      </div>
    `;
    resultCards.appendChild(card);
  });
});

// Simple Add to Cart stub
function addToCart(index) {
  alert(`Item ${index + 1} added to cart!`);
  // You can expand this to real cart logic later
}



