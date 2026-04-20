const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Delhi","Jammu and Kashmir","Ladakh","Puducherry","Chandigarh",
  "Andaman and Nicobar Islands","Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep"
];

function generateWeather() {
  const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy"];
  return {
    temperature: Math.floor(Math.random() * 15) + 20,
    condition: conditions[Math.floor(Math.random() * conditions.length)]
  };
}

app.get("/weather", (req, res) => {
  const state = req.query.state;

  if (!state) {
    return res.status(400).json({ message: "Please provide state name" });
  }

  const match = states.find(
    s => s.toLowerCase() === state.toLowerCase()
  );

  if (!match) {
    return res.status(404).json({ message: "State not found" });
  }

  res.json({
    state: match,
    ...generateWeather()
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});