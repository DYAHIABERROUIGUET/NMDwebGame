const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const data = require('./events.json');
const filePath = 'data.json';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// ...

// Nouvelle route pour mettre à jour la valeur de l'alignment
app.put("/update/alignment", (req, res) => {
    const newAlignment = req.body.alignment - 20; // La nouvelle valeur d'alignment que vous souhaitez définir

    jsonData.alignment = newAlignment; // Mettez à jour la valeur d'alignment dans jsonData

    // Vous pouvez également enregistrer la nouvelle valeur dans le fichier data.json si nécessaire.
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.json({ success: true, message: "Alignment mis à jour avec succès" });
});

// ...

app.listen(port, () => console.log('Server listening on port ' + port));
