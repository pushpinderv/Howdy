import React, {useContext} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import {useMediaPredicate} from 'react-media-hook';
import {ModeContext} from './Store';
import {ChatSelectedContext} from 'Store';

function App() {

	const [mode, setMode] = useContext(ModeContext);
	const [chatSelected,] = useContext(ChatSelectedContext);

	const isDesktop = useMediaPredicate('(min-width: 600px)');
	const state = isDesktop ? 'Desktop' : 'Mobile';
	console.log('App.js rendering..');

	if(!(mode===state))
	{
		console.log('Mode (App.js) is', state);
		setMode(state);
	}


		if((mode === 'Desktop'))
		{
		return (
		    <div className="App">
		          <ContactsWindow />
		          <ChatWindow mode = {mode} />
		    </div>
				);
		}
		else if(mode === 'Mobile')
		{
			if(chatSelected)
			{
				return (
				    <div className="App">
				          <ChatWindow mode = {mode} />
				    </div>
				);
			}
			else
			{
				return (
				    <div className="App">
				          <ContactsWindow />
				    </div>
				);
			}

		}



}

export default App;
