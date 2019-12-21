import React from 'react';

const ChatCard = () => {
	return(
		<chatCard style = {{
			display : 'flex', 
			backgroundColor : 'red', 
			flex : 1 , 
			height : '80px' , 
			cursor : 'pointer',
			overflow : 'hidden'
		}}>

				<pic className = 'br2' style = {{ 
					backgroundColor : 'orange', 
					height : '55px', 
					width : '55px', 
					margin : 'auto 0 auto 20px',
					flex : '0 0 auto', 
					alignSelf : 'flex-start'}}>
				</pic>

				<cardData style = 
					{{backgroundColor : 'grey', display : 'flex', 
					flexDirection : 'column', padding : '0px 12px', 
					alignContent : 'center', margin : 'auto 0px', cursor : 'pointer',
					flex : '1 1 auto', maxWidth : '100%', minWidth : '1px'}}>
					<nameBar style = {{
						backgroundColor : 'orange',
						display : 'flex', 
						marginBottom : '4px',
						justifyContent : 'space-between'
					}}>
						<name className = 'clipped' style = {{
							fontSize : '18px' , 
							backgroundColor : 'gold'
						}}>Nameoverflowwwwwwwwwwwwwwwwwwwwwwwwwwa
						</name>
						<date style = {{ fontSize : '13px', backgroundColor:'silver', marginLeft : '5px'}}>
						yesterday</date>
					</nameBar>
					<messageBar className = 'clipped' style = {{
						display : 'flex',
						backgroundColor : 'violet', 
						paddingTop : '4px'}}>
						<message style = {{
							fontSize : '15px', 
							backgroundColor : 'silver'}}>Latest Message
							</message>
					</messageBar>
				</cardData>

		</chatCard>
	);
}

export default ChatCard;