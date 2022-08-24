const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'La base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'El límite de la multiplicación'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Imprime la tabla en consola'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) throw 'La base tiene que ser un número';
                    if(isNaN(argv.h)) throw 'El límite tiene que ser un número';

                    return true;
                })
                .argv;

module.exports = argv;