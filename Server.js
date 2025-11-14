const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let locations = [];

app.post("/track-location", (req, res) => {
  const { lat, lng } = req.body;
  if (lat == null || lng == null) return res.status(400).json({ error: "Missing lat/lng" });
  locations.push({ lat, lng, timestamp: new Date() });
  res.json({ message: "Location saved" });
});

app.get("/locations", (req, res) => res.json(locations));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
