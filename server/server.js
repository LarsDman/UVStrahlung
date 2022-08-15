const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", async (req, res) => {
  try {
    await fetch(
      "https://opendata.dwd.de/climate_environment/health/alerts/uvi.json"
    )
      .then((response) => response.json())
      .then((data) => {
        res.json(data);
      });
  } catch (error) {}
});
