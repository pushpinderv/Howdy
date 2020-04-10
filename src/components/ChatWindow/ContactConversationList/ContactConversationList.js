import React from 'react';
import Bubble from './ContactConversationBubble/Bubble';
import ScrollableFeed from 'react-scrollable-feed';
import './ContactConversationList.css';
import {useSubscribeToMessages} from 'hooks/useSubscribeToMessages';
import {useSelector} from 'react-redux';

const ContactConversationList = () => {

	let myID = useSelector(state => state.myID);
	let chatID = useSelector(state => state.chatID);
	let socket = useSelector(state => state.socket);

	console.log('Chat ID now changed to :', chatID);

	const [messages] = useSubscribeToMessages(myID, chatID, socket);

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