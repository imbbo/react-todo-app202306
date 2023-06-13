import React from 'react'
import {MdDone} from 'react-icons/md';
import {MdDelete} from 'react-icons/md';

import './scss/TodoItem.scss';


const TodoItem = () => {

  return (
    <li className='todo-list-item'>
        <div className='check-circle'>
            <MdDone />
        </div>
        <span className='text'>할 일 할 일 할 일</span>
        <div className='remove'>
            <MdDelete />
        </div>
    </li>
    );
}

export default TodoItem;