export class Todo {

    constructor( tarea ) {
        this.tarea      = tarea;
        this.id         = new Date().getTime(); //213247502245

        this.completado = false;
        this.creado     = new Date()
    }


}