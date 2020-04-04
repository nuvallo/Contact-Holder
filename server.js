// this is how you "import" in node"
const express = require("express");

const app = express();

// adding endpoint (Route)
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactHolder API" })
);

// Defined Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
