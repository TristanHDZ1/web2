const os = require('os'); 
console.log('Hola, Información de mi sistema');
console.log('------------------------------');
console.log('Nombre del sistema:', os.platform());
console.log('Versión del sistema:', os.release());
console.log('Arquitectura del sistema:', os.arch());
console.log('Memoria total del sistema (bytes):', os.totalmem());
console.log('Memoria libre del sistema (bytes):', os.freemem());
console.log('------------------------------');