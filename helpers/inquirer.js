const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tareas'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tareas pendientes'
            },
            {
                value: 5,
                name: '5. Completar tarea/s'
            },
            {
                value: 6,
                name: '6. Borrar tarea'
            },
        ],
    }
]

const inquirerMenu = async() => {
    console.log('****************************'.green)
    console.log('    Seleccione una opción'.green)
    console.log('****************************\n'.green)

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'Enter'.green} para continuar`,
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Ingrese un valor'
                }
                return true
            },
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices,
        }
    ]

    const {id} = await inquirer.prompt(preguntas)
    return id
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}