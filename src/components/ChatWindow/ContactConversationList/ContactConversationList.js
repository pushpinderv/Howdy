import React, {useState, useEffect} from 'react';
import Bubble from './ContactConversationBubble/Bubble';
import {useSelector} from 'react-redux';

const ContactConversationList = (props) => {

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);

	const [messages, setMessages] = useState([]);

	useEffect(()=>{
		//Consider Axios as well
		fetch(`http://localhost:3001/${myID}/chats/${chatID}/messages`)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			setMessages(response)})
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
	// messageBubbles.sort((a, b) => (a.time_stamp > b.time_stamp) ? -1 : 1);	
	messageBubbles = messages.map(m => {

		let direction = m.mine ? left : right;
		return <Bubble key = {m.id} design = {direction} text = {m.content} />;

	});
	}

	return (
		<div className = 'app-theme-color-lightest' style = {{display : 'flex', flexDirection : 'column', 
		// backgroundColor : 'white', 
		flex : 1, overflowY : 'scroll', 
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