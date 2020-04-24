import React from 'react';
import Bubble from './ContactConversationBubble/Bubble';
import ScrollableFeed from 'react-scrollable-feed';
import './ContactConversationList.css';
import {useSubscribeToMessages} from 'hooks/useSubscribeToMessages';

const ContactConversationList = () => {

	const [messages] = useSubscribeToMessages();

	let left = "talk-bubble round left-top left";
	let right = "talk-bubble round right-top right";

	let info = "talk-bubble round center info";
	let first = " tri-right first";

	let messageBubbles = [];
	if(messages !== null)
	{
	messageBubbles = messages.map((m, index, arr) => {

		if(m.info)
		{
			return <Bubble key = {m.id} design = {info} text = {m.content} />;
		}

		else {
		let direction = m.mine ? right : left;

		if(index === 1)
			direction = direction + first;

		if((index-1) && messages[index - 1])
		{
			if(messages[index - 1].mine !== m.mine)
				direction = direction + first;
		}

			return <Bubble key = {m.id} design = {direction} text = {m.content} time_stamp = {m.created_at}/>;
		}

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