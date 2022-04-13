import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialogs/DialogItem'
import MessageItem from './dialogs/MessageItem'


function Dialogs (props) {

let DialogElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name}/> );

let MessageElements = props.state.Messages.map (Message => <MessageItem text={Message.Message}/>);


    return (
        <div link='qwe' className={s.dialogs }>
            <div className={s.names }>
                <ul>
                {DialogElements}
            </ul>
            </div>

            <div className={s.messages }>
                <ul>
                {MessageElements}
                </ul>
            </div>
        </div>
    )
};


export default Dialogs;