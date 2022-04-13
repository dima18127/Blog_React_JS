
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile.jsx'
import { Route, Routes } from 'react-router-dom';


// let dialogs = [
//   {id: '1', name: "Морген",},
//   {id: '2', name: "Баста",},
//   {id: '3', name: "Ногано",},
//   {id: '4', name: "FACE",},
// ];

// let Messages = [
//   {id: '1', Message: "Че каво ребятушки?",},
//   {id: '2', Message: "Понаехали тут",},
//   {id: '3', Message: "а рам зам зам",},
//   {id: '4', Message: "ну ваще ребята",},
// ];
// let DialogElements = dialogs.map( d => <DialogItem id={d.id} name={d.name}/> );

// let MessageElements = Messages.map (Message => <MessageItem text={Message.Message}/>);





function App(props) {

  return (
    <div className="wrapper">
      <Header />
      <NavBar/>
      <div className="wrapper-content" >
        <Routes>
        <Route path = '/*'  element = {<Profile messages={props.messages}/>}  />;
        <Route path = 'dialogs*' element = {<Dialogs/>} />;
        {/* <Route path = '/1' element = {<Dialogs/>} />; */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
