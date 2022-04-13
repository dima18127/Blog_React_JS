import React from 'react'
import { NavLink } from 'react-router-dom';
// import s from '../dialogs.module.css';
import s from './DialogItem.module.css';

function DialogItem ({name, id}) {
    return (
    <div className={s.messages }>
        <NavLink to={ id } >{name}</NavLink>
    </div>
    )
};


export default DialogItem;