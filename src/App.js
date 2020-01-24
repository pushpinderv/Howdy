import React, {useContext} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {useMediaPredicate} from 'react-media-hook';
import {ModeContext} from './Store';
import Div100vh from 'react-div-100vh';
import useScrollLock from 'react-use-scroll-lock';

function App() {

	useScrollLock(true);

	const [mode, setMode] = useContext(ModeContext);

	const isDesktop = useMediaPredicate('(min-width: 600px)');
	const state = isDesktop ? 'Desktop' : 'Mobile';
	console.log('App.js rendering..');

	if(!(mode===state))
	{
		console.log('Mode (App.js) is', state);
		setMode(state);
	}

	if(state === 'Desktop')
	{
	return (
	    <div style = {{height: '100vh'}} className="App" onClick = {()=>console.log('App Clicked')}>
	          <ContactsWindow mode = {mode}/>
	          <ChatWindow mode = {mode} />
	    </div>
			);
	}
	else
	{
		return (
	    <Div100vh className="App" onClick = {()=>console.log('App Clicked')}>
	          <ContactsWindow mode = {mode} />
	    </Div100vh>
			);
	}

}

export default App;
