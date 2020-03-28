import React from 'react';
import 'components/Common/UserIcon/UserIcon.css';
import './ChatCard.css';
import moment from 'moment';
import useAction from 'Redux/actions/useAction';

const processTimeStamp = (timeStamp) => {
	return moment(timeStamp).format('DD/MM/YYYY');
}

const ChatCard = (props) => {

    const {setChatSelected, setChatUser} = useAction();

    const chatClicked = () => {
    	console.log(props);
    		setChatUser({
				chatUserName : props.name,
				chatUserEmail : props.email,
				chatUserLastOnline : props.timeStamp,
				chatUserPhotoUrl : props.photo_url,
				chatID : props.chatID
			});

			setChatSelected(true);
    }

	return(
		<div onClick = {chatClicked} className = 'chat-card'>

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