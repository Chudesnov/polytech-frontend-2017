import React from 'react';
import TaskList from '../../features/TaskList1/TaskList';
// import { WelcomePage } from '../page/WelcomePage';

export default (routes) => Component => function RouterComponent(props) {
    return <Component
        {...props}
        component={TaskList}
    />
    // document.location.pathname // /, /about/, /tasks/
}