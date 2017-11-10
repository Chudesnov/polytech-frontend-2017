// @ts-check
import React, { PureComponent } from 'react';
import taskStoreConnect from './store/taskStoreConnect';
import TaskCreateForm from './TaskCreateForm';
import TaskCard from './TaskCard';

@taskStoreConnect
class TaskList extends PureComponent {
    onChange() {
        this.forceUpdate();
    }
    render() {
        return <ul>
            {this.props.tasks.map(task => <TaskCard
                key={task.title+task.author}
                title={task.title}
                dueDate={task.dueDate}
                author={task.author}
                onRemove={() => this.props.removeTask(task)}
            />)}
            <TaskCreateForm onCreate={this.props.createTask} />
        </ul>
    }
}

export default TaskList;