import React, {useContext} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {useMediaPredicate} from 'react-media-hook';
import {ModeContext} from './Store';

function App() {

const [mode, setMode] = useContext(ModeContext);

const isDesktop = useMediaPredicate('(min-width: 600px)');
const state = isDesktop ? 'Desktop' : 'Mobile';
console.log('App.js rendering..');

if(!(mode===state)){
	console.log('Setting Mode in App.js to', state);
	setMode(state);}

	if(mode === "Desktop")
	{
		return (
		    <div className="App">
		          <ContactsWindow />
		          <ChatWindow mode = {mode} />
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
