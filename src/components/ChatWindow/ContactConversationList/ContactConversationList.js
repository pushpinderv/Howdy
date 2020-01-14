import React from 'react';
import Bubble from './ContactConversationBubble/Bubble';

const ContactConversationList = () => {
	var text = "Looking for  two roommates for a spacious three and a half apartment from feb1st  Lease must be signed till oct end and  total rent 1017cad hydro 10cad per month individually. Rest everything included. Unfurnished";

	var left = "talk-bubble round left-top left";
	var right = "talk-bubble round right-top right";
	var info = "talk-bubble round center info";

	var first = " tri-right first";
	var middle = " middle";

	return (
		<div style = {{display : 'flex', flexDirection : 'column', 
		backgroundColor : 'pink', flex : 1, overflowY : 'scroll', 
		paddingBottom : '20px'}}>
		<Bubble design = {left + first} text = "Hello"/>
		<Bubble design = {left + middle} text = "A!"/>
		<Bubble design = {left + middle} text = "B!!"/>
		<Bubble design = {left + middle} text = {text}/>
		<Bubble design = {info} text = "YESTERDAY"/>
		<Bubble design = {right + first} text = "."/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "🤬"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		<Bubble design = {right + middle} text = "Yeeeee!!"/>
		</div>
	);
}

export default ContactConversationList;