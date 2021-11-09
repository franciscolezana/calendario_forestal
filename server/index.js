const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Calendario Forestal api');
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/actividad.routes")(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})