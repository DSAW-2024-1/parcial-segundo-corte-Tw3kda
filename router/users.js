
const express = require('express');
const router = express.Router();



const personas = [
    { "Apellido": "ACERO GARCIA", "Nombre": "SAMUEL" },
    { "Apellido": "ALJURI MARTINEZ", "Nombre": "DAREK" },
    { "Apellido": "CEPEDA URIBE", "Nombre": "JUAN FELIPE" },
    { "Apellido": "CHAVES PEREZ", "Nombre": "ANA MARIA" },
    { "Apellido": "CRUZ PAVAS", "Nombre": "CARLOS DAVID" },
    { "Apellido": "DIAZ ALGARIN", "Nombre": "DIEGO NORBERTO" },
    { "Apellido": "DIAZ BERNAL", "Nombre": "JORGE ESTEBAN" },
    { "Apellido": "DIAZ VARGAS", "Nombre": "DAVID ESTEBAN" },
    { "Apellido": "FORERO PEÑA", "Nombre": "JUAN JOSE" },
    { "Apellido": "GUTIERREZ DE PIÑERES BARBOSA", "Nombre": "SANTIAGO" },
    { "Apellido": "LOPEZ HUERTAS", "Nombre": "SAMUEL ESTEBAN" },
    { "Apellido": "MEDINA FERNANDEZ", "Nombre": "MICHAEL STEVEN" },
    { "Apellido": "MORENO CARVAJAL", "Nombre": "KATHERIN JULIANA" },
    { "Apellido": "MORENO PATARROYO", "Nombre": "JUAN PABLO" },
    { "Apellido": "MUÑOZ SENDOYA", "Nombre": "NICOLAS ESTEBAN" },
    { "Apellido": "NAVARRO CUY", "Nombre": "SANTIAGO" },
    { "Apellido": "PARRADO MORALES", "Nombre": "JUAN PABLO" },
    { "Apellido": "RAMIREZ CHINCHILLA", "Nombre": "DANIEL SANTIAGO" },      
    { "Apellido": "RESTREPO COCA", "Nombre": "JUAN PABLO" },
    { "Apellido": "REYES GONZALEZ", "Nombre": "GABRIELA" },
    { "Apellido": "RODRIGUEZ FALLA", "Nombre": "JUAN JOSE" },
    { "Apellido": "RUIZ TORRES", "Nombre": "VALENTINA" },
    { "Apellido": "SALAS GUTIERREZ", "Nombre": "MARIANA" },
    { "Apellido": "SANCHEZ SANDOVAL", "Nombre": "SEBASTIAN" },
    { "Apellido": "SARMIENTO GUARNIZO", "Nombre": "JOSUE DAVID" },
    { "Apellido": "SOLER PRADO", "Nombre": "SANTIAGO" },
    { "Apellido": "TAMAYO LOPEZ", "Nombre": "MARIA FERNANDA" },
    { "Apellido": "URREA LARA", "Nombre": "DEIVID NICOLAS" },
    { "Apellido": "AZCONA", "Nombre": "ANDRÉS" }
];

router.get('/users/:count', (req, res) => {
    const count = parseInt(req.params.count);
    if (isNaN(count) || count <= 0) {
        return res.status(400).json({ error: "Invalid parameter: count must be a positive integer." });
    }
    const sort = req.query.sort || "ASC";
    const order = sort.toUpperCase() === "DESC" ? "DESC" : "ASC";

    if (!["ASC", "DESC"].includes(order)) {
        return res.status(400).json({ error: "Invalid parameter: sort must be 'ASC' or 'DESC'." });
    }



    const selectedPersons = personas.slice(0, count);

    let sortedPersons;
    if (order === "ASC") {
        sortedPersons = selectedPersons.sort((a, b) => a.Apellido.localeCompare(b.Apellido));
    } else {
        sortedPersons = selectedPersons.sort((a, b) => b.Apellido.localeCompare(a.Apellido));
    }

    res.json(sortedPersons);
});

router.post('/users', (req, res) => {
    let { name, lastName, email, city, country } = req.body;
    
    if (!name || !lastName || !email) {
        return res.status(400).json({ error: 'Los campos nombre, apellido y correo son requeridos' });
    }
  city = city || 'Bogotá';
  country = country || 'Colombia';

  // Create user object
  const user = {
    name: name,
    lastName: lastName,
    email: email,
    city: city,
    country: country
  };

 

  res.status(201).json(user);
});
    
 
  


module.exports = router;
