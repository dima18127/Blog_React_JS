import React from 'react'
import s from '../dialogs.module.css';

function MessageItem({text}) {
    return (
        <div>
            <li>{text}</li>
        </div>
        )
}

export default MessageItem