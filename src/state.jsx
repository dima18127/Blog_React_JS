import React from 'react';

let state = [ 
    let dialogs = [
        {id: '1', name: "Морген",},
        {id: '2', name: "Баста",},
        {id: '3', name: "Ногано",},
        {id: '4', name: "FACE",},
    ];
    
    let Messages = [
        {id: '1', Message: "Че каво ребятушки?",},
        {id: '2', Message: "Понаехали тут",},
        {id: '3', Message: "а рам зам зам",},
        {id: '4', Message: "ну ваще ребята",},
    ];

]


let DialogElements = dialogs.map( d => <DialogItem id={d.id} name={d.name}/> );

let MessageElements = Messages.map (Message => <MessageItem text={Message.Message}/>);

export default state;
