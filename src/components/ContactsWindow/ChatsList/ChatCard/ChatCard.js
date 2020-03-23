import React, {useContext} from 'react';
import {ChatDrawerContext} from 'Store';
import 'components/Common/UserIcon/UserIcon.css';
import './ChatCard.css';
import moment from 'moment';

const processTimeStamp = (timeStamp) => {
	return moment(timeStamp).format('DD/MM/YYYY');
}

const ChatCard = (props) => {
	const [,setChatDrawerOpen] = useContext(ChatDrawerContext);

	return(
		<div onClick = {()=>setChatDrawerOpen(true)} className = 'chat-card'>

				<div className = 'chat-profile-pic br2'>
					<div className = 'userHead' />
					<div className = 'userBody' />
					<div className = 'bottomLine' />
				</div>

				<div className = 'chat-userdata-container' >
					
					<div className = 'chat-name-and-time-container'>
						<div className = 'clipped chat-name' >
						{props.name}
						</div>
						<div className = 'chat-time'>{processTimeStamp(props.timeStamp)}</div>
					</div>
					<div className = 'clipped chat-message-and-count-container' >
						<div className = 'clipped chat-message' >
						{props.message}
						</div>
					</div>
				</div>

		</div>
	);
}

export default ChatCard;