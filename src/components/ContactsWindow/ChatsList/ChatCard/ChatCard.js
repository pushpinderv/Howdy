import React, {useContext} from 'react';
import {ChatDrawerContext} from 'Store';

const ChatCard = () => {
	const [,setChatDrawerOpen] = useContext(ChatDrawerContext);

	return(
		<div onClick = {()=>setChatDrawerOpen(true)} id = 'container' style = {{
			display : 'flex', 
			backgroundColor : 'white', 
			flex : 1 , 
			height : '5em' , 
			cursor : 'pointer',
			overflow : 'visible',
			borderBottom : '1px solid #f2f2f2'
		}}>

				<div id = 'profile-pic' className = 'br2' style = {{ 
					backgroundColor : '#dfe5e7', 
					height : '3.3em', 
					width : '3.3em', 
					margin : 'auto 0 auto 1.15em',
					flex : '0 0 auto', 
					alignSelf : 'flex-start'}}>
				</div>

				<div id = 'userdata-container' style = 
					{
						{
						// backgroundColor : 'grey', 
						display : 'flex', 
					flexDirection : 'column', padding : '0px 0.9em', 
					alignContent : 'center', margin : 'auto 0px', cursor : 'pointer',
					flex : '1 1 auto', 
					maxWidth : '100%', minWidth : '1px'}}>
					<div style = {{
						// backgroundColor : 'orange',
						display : 'flex', 
						marginBottom : '4px',
						justifyContent : 'space-between',
						overflow :'hidden'
					}}>
						<div className = 'clipped' style = {{
							fontSize : '1.1em' , 
							// backgroundColor : 'gold'
						}}>Nameoverflowwwwwwwwwwwwwwwwwwwwwwwwwwa
						</div>
						<div style = {{ 
							fontSize : '0.8em', 
							fontWeight : '100',
							// backgroundColor :'silver',
							whiteSpace :'nowrap',
							color : '#8c8c8c', 
							marginLeft : '8px'}}>
						yesterday</div>
					</div>
					<div className = 'clipped' style = {{
						display : 'flex',
						// backgroundColor : 'violet', 
						paddingTop : '4px'}}>
						<div className = 'clipped' style = {{
							fontSize : '0.9em',
							fontWeight : '360',
							lineHeight : '1.4em',
							whiteSpace : 'nowrap', 
							color : 'grey'
							// backgroundColor : 'silver'
						}}>Latest Message Overflowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
							</div>
					</div>
				</div>

		</div>
	);
}

export default ChatCard;