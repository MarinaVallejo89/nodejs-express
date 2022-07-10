// carga en una variable lo que necesita para cargar el dotenv
const dotenv = require('dotenv');
const path = require('path');
// se decide cual env se va a usar, para saber la ruta a utilizar utilizamos el path, con su ruta, nombre de archivo, hasta llegar a la carpeta
// y ahí estará production o development
dotenv.config({
  path: path.resolve(__dirname, '.env.' + process.env.NODE_ENV)
});
// De lo que se ha hecho en las líneas anteriores se cogen estos valores, si no hay nada, leemos development, o lo que pone respectivamente junto
// a host y port
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000
}
