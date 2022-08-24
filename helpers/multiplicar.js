const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1, limite = 10, listar = false) => {
    try {
        let salida = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('====================='.zebra);
            console.log(`     Tabla del: ${base}    `.bgWhite.black);
            console.log('====================='.zebra);
    
            console.log(salida.random);
        }

        fs.writeFileSync(`./out/tabla-${base}.txt`, salida);

        return `Archivo 'tabla-${base}.txt' creado`.bgBrightCyan.black;
    } catch (error) {
        throw error.bgRed.black;
    }

}

module.exports = {
    crearArchivo,
}