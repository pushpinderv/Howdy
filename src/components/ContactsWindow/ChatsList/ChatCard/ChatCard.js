import React from 'react';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ChatCard.css';
import moment from 'moment';
import useAction from 'Redux/actions/useAction';

const processTimeStamp = (timeStamp) => {

	const date = moment(timeStamp).format('x');
	const startOfToday = moment().startOf('day');
	const startOfYesterday = moment().startOf('day').subtract(1, 'days');
	const startOfWeek = moment().startOf('week');

	//Time if more than start of today
	//Yesterday if less than start of today but more than start of yesterday
	//Day of week if less than start of yesterday, but more than start of week
	//Date otherwise

	if (date > startOfToday) return moment(timeStamp).format('h:mm a');
	else if (date < startOfToday && date > startOfYesterday) return 'Yesterday';
	else if (date < startOfYesterday && date > startOfWeek) return moment(timeStamp).format('dddd');
	else return moment(timeStamp).format('DD-MM-YYYY');

}

const ChatCard = (props) => {

    const {setChatSelected, setChatUser} = useAction();

    let className = props.selected ? 'chat-card selected' : 'chat-card';
    console.log(className);

    const chatClicked = () => {
    	props.onClick();
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
		<div onClick = {chatClicked} className = {className}>

				<UserIcon 
					url = {props.photo_url}
					height = '3.2em' width = '3.2em' 
					margin = 'auto 0 auto 1.15em'/>

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