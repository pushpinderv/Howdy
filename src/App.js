import React, {useContext} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {useMediaPredicate} from 'react-media-hook';
import {ModeContext} from './Store';
import Div100vh from 'react-div-100vh';
import useScrollLock from 'react-use-scroll-lock';
import GlobalOverlay from 'components/GlobalOverlay/GlobalOverlay';
import Login from 'components/Login/Login';
import {LogInContext} from 'Store';

function App() {

	useScrollLock(true);

	const [mode, setMode] = useContext(ModeContext);
	const [login, ] = useContext(LogInContext);

	const isDesktop = useMediaPredicate('(min-width: 600px)');
	const state = isDesktop ? 'Desktop' : 'Mobile';
	console.log('App.js rendering..');

	if(!(mode===state))
	{
		console.log('Mode (App.js) is', state);
		setMode(state);
	}

	let chatWindow;

	if(state === 'Desktop')
	{
		chatWindow = <ChatWindow mode = {mode} />
	}

	if(!login)
		return (<Div100vh className="App" 
	    onClick = {()=>console.log('App.js: Consuming touch to prevent zooming')}>
			<Login />		
	    </Div100vh>);

	return (
	    <Div100vh className="App" 
	    onClick = {()=>console.log('App.js: Consuming touch to prevent zooming')}>
			<GlobalOverlay />
			<ContactsWindow mode = {mode}/>
			{chatWindow}		
	    </Div100vh>
			);


}

export default App;
