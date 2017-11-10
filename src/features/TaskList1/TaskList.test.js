import { mount } from 'enzyme'; 
import React from 'react';
import TaskList from './TaskList';

describe('TaskList', () => {
    it('should render a list of items', () => {
        const OriginalTaskList = TaskList.originalComponent();
        const date = new Date();
        expect(mount(<OriginalTaskList
            tasks={[
                {
                    dueDate: date,
                    author: 'Vasya',
                    title: 'Get up'
                }
            ]}
        />).find('TaskCard').props()).toEqual({
            dueDate: date,
            author: 'Vasya',
            title: 'Get up',
            onRemove: expect.any(Function)
        })
    })
})