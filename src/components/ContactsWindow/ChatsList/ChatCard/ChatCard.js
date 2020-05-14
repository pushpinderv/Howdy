import React, {useState, useEffect} from 'react';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ChatCard.css';
import moment from 'moment';
import useAction from 'Redux/actions/useAction';
import useSubscribeToProfilePhoto from 'api/profile/useSubscribeToProfilePhoto';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL, HAS_UNREAD_MESSAGES_TOPIC} from 'Redux/constants';
import PubSub from 'pubsub-js';

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

	console.log('ChatCard rendering...');

	const myID = useSelector(state => state.myID);

    const {setChatSelected, setChatUser} = useAction();

    const [hasUnreadMessages, setHasUnreadMessages] = useState(props.has_unread_messages);

    const mySubscriber = (msg, data) => {

	    switch (msg) {

	        //Handle read/unread state change from other components via pub sub
	        case HAS_UNREAD_MESSAGES_TOPIC:
	        	console.log(data.chatID, props.chatID);
	        	if(Number(data.chatID) === Number(props.chatID))
	        	setHasUnreadMessages(true);
	            break;

	        default:
	            break;
	    }

	}; 

    let className = props.selected ? 'chat-card selected' : 'chat-card';

    // console.log('unread', props.has_unread_messages)

    const [photoUrl] = useSubscribeToProfilePhoto(props.other_participant_id);

    //Listen for unread updates 
    useEffect(() => {
    	let pubsubToken = PubSub.subscribe(HAS_UNREAD_MESSAGES_TOPIC, mySubscriber);

    	return () => {PubSub.unsubscribe(pubsubToken)}
    });   
    

    const chatClicked = () => {
    	props.onClick();
    	console.log(props);
    		setChatUser({
				chatUserName : props.name,
				chatUserEmail : props.email,
				chatUserLastOnline : props.last_online,
				chatUserPhotoUrl : photoUrl,
				chatID : props.chatID,
				chatUserID : props.other_participant_id
			});

			setChatSelected(true);

			//Update messages read at on chat clicked
			axios.post(`${BASE_URL}/${myID}/chats/${props.chatID}/read-messages`,{})
			.then(setHasUnreadMessages(false));

    }

    let chatNameClassName = hasUnreadMessages ? 'clipped chat-name name-unread' : 'clipped chat-name';
    let chatMessageClassName = hasUnreadMessages ? 'clipped chat-message message-unread' : 'clipped chat-message';
    let chatTimeClassName = hasUnreadMessages ? 'chat-time time-unread' : 'chat-time';

	return(
		<div onClick = {chatClicked} className = {className}>

				<UserIcon 
					url = {photoUrl}
					height = '3.2em' width = '3.2em' 
					margin = 'auto 0 auto 1.15em'/>

				<div className = 'chat-userdata-container' >
					
					<div className = 'chat-name-and-time-container'>
						<div className = {chatNameClassName} >
						{props.name}
						</div>
						<div className = {chatTimeClassName}>{processTimeStamp(props.timeStamp)}</div>
					</div>
					<div className = 'clipped chat-message-and-count-container' >
						<div className = {chatMessageClassName} >
						{props.message}
						</div>
						{/*<div className = 'unread-message-count'>2</div>*/}
					</div>
				</div>

		</div>
	);
}

export default ChatCard;