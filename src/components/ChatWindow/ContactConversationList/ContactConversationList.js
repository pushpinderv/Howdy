import React, {useState, useEffect} from 'react';
import Bubble from './ContactConversationBubble/Bubble';
import {useSelector} from 'react-redux';
import {BASE_URL} from 'Redux/constants';
import ScrollableFeed from 'react-scrollable-feed';
import './ContactConversationList.css';

const ContactConversationList = (props) => {

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
			console.log(updatedMessages);
			setMessages(updatedMessages);
		});
		},[socket, messages]);

	useEffect(()=>{
		//Consider Axios as well
		console.log('Chat id is :',chatID);
		if(chatID)
		{
		fetch(`${BASE_URL}/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			response.reverse();
			setMessages(response)
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
	messageBubbles = messages.map(m => {

		let direction = m.mine ? right : left;
		return <Bubble key = {m.id} design = {direction} text = {m.content} />;

	});
	}

	return (

		<div className = 'app-theme-color-lightest' style = {{display : 'flex', flexDirection : 'column', 
		flex : 1, overflowY : 'auto', 
		paddingBottom : '20px'}}>

		<ScrollableFeed className = 'scrollable-feed' animateScroll = {(element, offset) => {
			if (element.scrollBy) {
			  element.scrollBy({ top: offset, behavior: 'smooth' });
			}
			else {
			  element.scrollTop = offset;
			}
		}}>
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
	    </ScrollableFeed>

		</div>

		
	);
}

export default ContactConversationList;