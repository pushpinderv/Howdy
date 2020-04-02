import React, {useState} from 'react';
import './SendMessageBar.css';
import {useSelector} from 'react-redux';
import {BASE_URL} from 'Redux/constants';

const SendMessageBar = (props) => {

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);

	const [message, setMessage] = useState('');

	const messageChanged = (event) => {
		setMessage(event.target.value);
	}

	const handleSendClicked = (event) => {
	console.log(myID);

	sendMessage(myID, chatID, message);
	event.target.value = '';
	setMessage('');
	}

	const createChat = (otherParticipantID, requestorID) => {
		const options = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify
	        ({
	        	"otherParticipantID" : otherParticipantID, 
	        	"requestorID" : requestorID
	        })
	    };
	    fetch(`${BASE_URL}/chats`, options)
	        .then(response => response.json())
	        .then(response => {
	        	chatID = response.chatID;
	        });
	}

	const sendMessage = (myID, chatID, message) => {

		const options = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ userID: myID, content: message })
	    };
	    fetch(`${BASE_URL}/chats/${chatID}/messages`, options)
	        .then(response => response.json())
	        .then(console.log);

	}

	return (

		<div className = 'app-theme-color sendMessageBar'>
		<input value = {message} onChange = {messageChanged} placeholder = 'Type a message' className = 'br-pill bn ph3' 
		style = {{
			flex : '1 1 auto', 
			minWidth : '0px', 
			outline : 'none',
			fontSize : '1em',
			lineHeight : '1.4em'
		}} 
		type = 'text' />

		<button onClick = {handleSendClicked} style = {{ 
			marginLeft : '0.6em', 
			cursor : 'pointer' , 
			display: 'flex', 
			background : 'none',
			// backgroundColor : 'yellow', 
			border : 'none', 
		    outline : 'none',
            width : '2.9em', 
		    height : 'auto',
		    padding : '0.3em',
		    flex : '0 0 auto',
		    justifyContent : 'center'
		}}>
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path className = 'svg-path-default' d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
		</button>

		</div>
	);
}

export default SendMessageBar;