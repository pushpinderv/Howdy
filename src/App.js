import React, {useContext} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {ModeContext} from './Store';

function App() {
const [mode, setMode] = useContext(ModeContext);
	
	if(mode === "Desktop")
	{
		return (
		    <div className="App">
		          <ContactsWindow />
		          <ChatWindow />
		    </div>
  			);
	}
	else
	{
		return (
		    <div className="App">
		          <ChatWindow mode = {mode}/>
		    </div>
  			);
	}	

}

export default App;
