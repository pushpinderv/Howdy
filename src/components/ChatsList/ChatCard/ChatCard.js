import React from 'react';

const ChatCard = () => {
	return(
		<chat-card style = {{
			display : 'flex', 
			backgroundColor : 'red', 
			flex : 1 , 
			height : '80px' , 
			cursor : 'pointer',
			overflow : 'hidden'
		}}>

				<div className = 'br2' style = {{ 
					backgroundColor : 'orange', 
					height : '55px', 
					width : '55px', 
					margin : 'auto 0 auto 20px',
					flex : '0 0 auto', 
					alignSelf : 'flex-start'}}>
				</div>

				<card-data style = 
					{{backgroundColor : 'grey', display : 'flex', 
					flexDirection : 'column', padding : '0px 12px', 
					alignContent : 'center', margin : 'auto 0px', cursor : 'pointer',
					flex : '1 1 auto', maxWidth : '100%', minWidth : '1px'}}>
					<name-bar style = {{
						backgroundColor : 'orange',
						display : 'flex', 
						marginBottom : '4px',
						justifyContent : 'space-between'
					}}>
						<div className = 'clipped' style = {{
							fontSize : '18px' , 
							backgroundColor : 'gold'
						}}>Nameoverflowwwwwwwwwwwwwwwwwwwwwwwwwwa
						</div>
						<message-date style = {{ fontSize : '13px', backgroundColor:'silver', marginLeft : '5px'}}>
						yesterday</message-date>
					</name-bar>
					<message-bar className = 'clipped' style = {{
						display : 'flex',
						backgroundColor : 'violet', 
						paddingTop : '4px'}}>
						<message-text style = {{
							fontSize : '15px', 
							backgroundColor : 'silver'}}>Latest Message
							</message-text>
					</message-bar>
				</card-data>

		</chat-card>
	);
}

export default ChatCard;