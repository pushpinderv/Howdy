import React, {useContext, useEffect} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {useMediaPredicate} from 'react-media-hook';
import {ModeContext} from './Store';
import Div100vh from 'react-div-100vh';
import useScrollLock from 'react-use-scroll-lock';
import Login from 'components/Login/Login';
import GlobalOverlay from './components/GlobalOverlay/GlobalOverlay';
import {useSelector} from 'react-redux';
import io from 'socket.io-client';
import {BASE_URL} from 'Redux/constants';
import useAction from 'Redux/actions/useAction';

function App() {

	//Set global socket for communication with server
	const {setSocket} = useAction();

	//Fetch our user ID
	let myID = useSelector(state => state.myID);

	useEffect(()=>{
		if(myID)
		{
		const socket = io(BASE_URL);
		socket.emit('client-joined', myID);
		setSocket(socket);
		}
	},[setSocket, myID]);
	
	useScrollLock(true);

	let login = myID ? true : false;
 
	const [mode, setMode] = useContext(ModeContext);

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
			<ContactsWindow mode = {mode}/>
			{chatWindow}
			<GlobalOverlay />	
	    </Div100vh>
			);


}

export default App;
