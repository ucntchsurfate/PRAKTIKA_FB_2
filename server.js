const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'index.html'));
});
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index', '404.html'));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});