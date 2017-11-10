import React, { PureComponent } from 'react';
import { Button } from '../../core/ui/button/Button';
/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    return `${date.getDate()+1}.${date.getMonth()+1}.${date.getFullYear()}`;
}

export default class TaskCard extends PureComponent {
    render() {
        const { title, dueDate, author, onRemove } = this.props;

        return <li>
            <h2>{title}</h2>
            <h3>Created by {author} on {formatDate(dueDate)}</h3>
            <Button onClick={onRemove}>Delete</Button>
        </li>
    }
}