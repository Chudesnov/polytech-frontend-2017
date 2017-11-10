import React, { PureComponent } from 'react';
import { TaskStore } from "./TaskStore";

const defaultData = [
    {
        title: 'Create a React Component',
        dueDate: new Date(2017, 10, 10),
        author: 'Alex Chudesnov'
    },
    {
        title: 'Create another React Component',
        dueDate: new Date(2017, 11, 10),
        author: 'Alex Chudesnov'
    }
];
const increment = ({ revision }) => ({
    revision: revision + 1
}) 
const taskStoreConnect = Component => {
    class TaskStoreComponent extends PureComponent {
        constructor() {
            super();
            this.store = new TaskStore(defaultData);
            this.store.on('change', () => {
                this.setState(increment)
            })
            this.boundCreateTask = this.store.createTask.bind(this.store);
            this.boundRemoveTask = this.store.removeTask.bind(this.store);
            this.state = {
                revision: 0
            };
        }
        render() {
            return <Component
                {...this.props}
                tasks={this.store.getTasks()}
                createTask={this.boundCreateTask}
                removeTask={this.boundRemoveTask}
            />
        }
    }
    TaskStoreComponent.originalComponent = () => Component
    return TaskStoreComponent;
}

export default taskStoreConnect;