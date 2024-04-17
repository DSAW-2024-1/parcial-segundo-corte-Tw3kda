const express = require('express');
const router = express.Router();


router.get('/:coinName', async (req, res) => {
    try {
        let name = req.params.coinName;
        let data = await getData(name);

        res.send("El precio en dólares de " + name + " para el día de hoy es: " + data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

async function getData(name) {
    const response = await fetch('https://api.coincap.io/v2/assets/' + name); 

    if (!response.ok) {
        throw new Error("El nombre de la moneda no fue encontrado en la base de datos");
    }

    let responseData = await response.json();
    let value = responseData.data.priceUsd;

    return value;
}

module.exports = router;