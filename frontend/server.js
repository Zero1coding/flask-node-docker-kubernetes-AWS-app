const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(
      "http://flask-backend-service:5000/submit",
      {
        item_id: req.body.item_id
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
