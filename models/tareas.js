const {v4:uudiv4} = require('uuid')
const Tarea = require('./tarea')
/**
 * _listado:
 *      {'uuid-XXXX': {id: 12, desc:abc, completadoEn: 1234}}
 */
class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado
    }

    constructor() {
        this._listado = {}
    }

    crearTareaFromArray(tareas= []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    crearTarea(desc='') {
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
    }

    listadoCompleto() {
        console.log()

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}` .green
            const {desc, completadoEn} = tarea
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }

    listarPendientesCompletadas(completadas= true) {
        console.log()

        let indice = 0
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}` .green
            const {desc, completadoEn} = tarea
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

            if (completadas){
                //Completadas
                if (completadoEn){
                    indice += 1
                    console.log(`${(indice + '.').green} ${desc} :: ${completadoEn}`)
                }
            }else {
                //Pendientes
                if (!completadoEn){
                    indice += 1
                    console.log(`${(indice + '.').red} ${desc} :: ${completadoEn}`)
                }
            }
        })
    }

    borrar(id= '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }
}

module.exports = Tareas