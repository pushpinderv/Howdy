import React, {useState, useEffect, useRef} from 'react';
import Bubble from './ContactConversationBubble/Bubble';
import {useSelector} from 'react-redux';
import {BASE_URL} from 'Redux/constants';

let firstTime = true;

const scrollToBottom = (messageListRef) => {
	if(messageListRef && messageListRef.current)
	{
	if (firstTime) {
	  console.log('one time')	
	  messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
	  firstTime = false;
	} else if (messageListRef.current.scrollTop + messageListRef.current.clientHeight >= messageListRef.current.scrollHeight) {
	  messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
	}
	}
}

const ContactConversationList = (props) => {

	const messageListRef = useRef(null);

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);

	const [messages, setMessages] = useState([]);

	let socket = useSelector(state => state.socket);

	useEffect(()=>{
		if(socket)
		socket.on('chat-message', (message) => {
			// console.log(`Message : ${content}`)
			let updatedMessages = [...messages];
			updatedMessages.push(message);
			updatedMessages.reverse();
			console.log(updatedMessages);
			setMessages(updatedMessages);
			scrollToBottom(messageListRef)
		});
		},[socket, messages]);

	useEffect(()=>{
		//Consider Axios as well
		if(chatID)
		{
		fetch(`${BASE_URL}/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			setMessages(response)
			scrollToBottom(messageListRef)
		})
		}
		else 
		{
			setMessages([]);

		}

	},[myID, chatID]);

	// let messages = [
	// 	{
	// 		"mine" : false,
	// 		"content" : "Hey!"
	// 	},
	// 	{
	// 		"mine" : true,
	// 		"content" : "Hi!"
	// 	}
	// ];

	// var text = "Looking for  two roommates for a spacious three and a half apartment from feb1st  Lease must be signed till oct end and  total rent 1017cad hydro 10cad per month individually. Rest everything included. Unfurnished";

	var left = "talk-bubble round left-top left";
	var right = "talk-bubble round right-top right";
	// var info = "talk-bubble round center info";

	// var first = " tri-right first";

	let messageBubbles = [];
	if(messages !== null)
	{
	messages.reverse();	
	messageBubbles = messages.map(m => {

		let direction = m.mine ? right : left;
		return <Bubble key = {m.id} design = {direction} text = {m.content} />;

	});
	}

	return (
		<div ref = {messageListRef} className = 'app-theme-color-lightest' style = {{display : 'flex', flexDirection : 'column', 
		// backgroundColor : 'white', 
		flex : 1, overflowY : 'auto', 
		paddingBottom : '20px'}}>
		
{/*		<Bubble design = {left + first} text = "Hello"/>
		<Bubble design = {left} text = "A!"/>
		<Bubble design = {left} text = "B!!"/>
		<Bubble design = {left} text = {text}/>
		<Bubble design = {info} text = "YESTERDAY"/>
		<Bubble design = {right + first} text = "."/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "🤬"/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "Yeeeee!!"/>
		<Bubble design = {right} text = "Yeeeee!!"/>*/}

		{messageBubbles}

		</div>
	);
}

export default ContactConversationList;