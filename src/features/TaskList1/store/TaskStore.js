import EventEmitter from 'event-emitter-es6'

export class TaskStore extends EventEmitter {
    constructor(tasks) {
        super();
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    createTask(task) {
        this.tasks = this.tasks.slice();
        this.tasks.push(task);
        this.emit('change');
    }
    
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks = this.tasks.slice();
            this.tasks.splice(index, 1);
            this.emit('change');
        }
    }
}