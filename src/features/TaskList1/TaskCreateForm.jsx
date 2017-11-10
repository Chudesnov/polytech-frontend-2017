import React from 'react';
import { Button } from "../../core/ui/button/Button";

const getFormData = cb => event => {
    event.preventDefault();
    const data = new FormData(event.target);
    let result = {};
    for(var [name, value] of data.entries()) {
        result[name] = name === 'dueDate' ? new Date(value) : value; 
    }
    cb(result)
}

export default function TaskCreateForm({
    onCreate
}) {
    return <form onSubmit={getFormData(onCreate)}>
        <input name='title' placeholder='Title' type='text' />
        <input name='author' placeholder='Author' type='text' />
        <input name='dueDate' placeholder='Date' type='date' />
        <Button type='submit'>Create</Button>
    </form>
}