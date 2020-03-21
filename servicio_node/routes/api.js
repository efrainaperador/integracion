const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    let user = {
        nombre: "Efrain Aperador Mancipe",
        numero_documento: "1049620406",
        tipo_documento: "Cédula de Ciudadanía",
        direccion: {
            ciudad: {
                nombre: "Tunja",
                departamento: {
                    nombre: "Boyacá"
                }
            },
            principal: "Calle 19 # 13 - 49"
        },
        telefono: "3209624591",
        correo_electronico: "efrain.aperador@gmail.com"
    };
    res.json(user);
});

module.exports = router;