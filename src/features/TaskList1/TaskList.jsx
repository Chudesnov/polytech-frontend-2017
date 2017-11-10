// @ts-check
import React, { PureComponent } from 'react';

/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    return `${date.getDate()+1}.${date.getMonth()+1}.${date.getFullYear()}`;
}

class TaskCard extends PureComponent {
    render() {
        const { title, dueDate, author } = this.props;

        return <li>
            <h2>{title}</h2>
            <h3>Created by {author} on {formatDate(dueDate)}</h3>
        </li>
    }
}

class TaskList extends PureComponent {
    render() {
        return <ul>
            {this.props.tasks.map(task => <TaskCard
                title={task.title}
                dueDate={task.dueDate}
                author={task.author}
            />)}
        </ul>
    }
}

TaskList.defaultProps = {
    tasks: [
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
    ]
}

export default TaskList;