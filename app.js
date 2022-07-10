// usamos el módulo config, el que hemos creado, config.js
const config = require('./config');
// cosas que cargamos de express, para poder utilizar express
const express = require('express');
const app = express();
const router = express.Router();

app.use('/quiz', express.static(__dirname + '/public'));
// siempre que se ponga la ruta home me va a llevar a la ruta alternativa
app.use('/home', router);

router.get('/contacto', (req, res, next) => {
    console.log('Página de contacto');
    next();
});

router.get('/info', (req, res,) => {
    res.send('Página de info');
});

router.get('/error', (req, res, next) => {
    console.log('Página de error');
    next('error');
});

app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error');
});

app.use((req, res) => {
    res.send('Página de cierre');
});

// el listen siempre se pone lo último, primero las rutas y luego el escuchador
app.listen(config.PORT, () => {
    console.log(`Express iniciado en el puerto ${config.PORT}.`);
})
