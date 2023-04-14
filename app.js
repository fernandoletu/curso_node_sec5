require('colors')
const {
    inquirerMenu,
    pausa,
    leerInput,
} = require("./helpers/inquirer")
//const {mostrarMenu, pausa} = require("./helpers/mensajes")
const Tareas = require('./models/tareas')
const Tarea = require('./models/tarea')
const {
    guardarDB,
    leerDB
} = require('./db/guardarArchivo')

const main = async() => {
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()
    if (tareasDB){

    }

    await pausa()

    /*do {
        //opt = await mostrarMenu()
        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                const desc = await leerInput('Descripción:')
                tareas.crearTarea(desc)
                break;

            case 2:
                console.log(tareas.listadoArr)
                break;

            case 3:
                break;

            case 4:
                break;

            case 5:
                break;

            case 6:
                break;
        }

        guardarDB(tareas.listadoArr)

        await pausa()
    }while (opt !== '0')*/
}

main()