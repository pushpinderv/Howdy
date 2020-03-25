import React from 'react';
import Bubble from './ContactConversationBubble/Bubble';

const ContactConversationList = () => {
	var text = "Looking for  two roommates for a spacious three and a half apartment from feb1st  Lease must be signed till oct end and  total rent 1017cad hydro 10cad per month individually. Rest everything included. Unfurnished";

	var left = "talk-bubble round left-top left";
	var right = "talk-bubble round right-top right";
	var info = "talk-bubble round center info";

	var first = " tri-right first";

	return (
		<div className = 'app-theme-color-lightest' style = {{display : 'flex', flexDirection : 'column', 
		// backgroundColor : 'white', 
		flex : 1, overflowY : 'scroll', 
		paddingBottom : '20px'}}>
		
		<Bubble design = {left + first} text = "Hello"/>
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
		<Bubble design = {right} text = "Yeeeee!!"/>
		
		</div>
	);
}

export default ContactConversationList;