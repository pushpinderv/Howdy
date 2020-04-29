import React ,{useState} from 'react';
import ChatCard from './ChatCard/ChatCard';
import './ChatList.css';
import {useSubscribeToChats} from 'hooks/useSubscribeToChats';
import useAction from 'Redux/actions/useAction';
import {useSelector} from 'react-redux';

const ChatList = () => {

	const [chats] = useSubscribeToChats();
	const [selectedItemIndex, setSelectedItemIndex] = useState(null);

	const chatSearchField = useSelector(state => state.chatSearchField);

	const {setSearchChatsVisible} = useAction();

	let chatCards = [];
	if(chats)
	{
	let filteredChats = chats.filter(c => {
		let name = c.name;
		if(name === ''|| name === null) name = c.email;
		return name.toLowerCase().includes(chatSearchField.toLowerCase())
	});	
	chatCards = filteredChats.map(c => {
		let name = c.name;
		if(name === ''|| name === null) name = c.email;
		return <ChatCard onClick = {
			() => {setSelectedItemIndex(c.email)}} 
			key = {c.email} 
			name = {name} 
			message = {c.message} 
			timeStamp = {c.time_stamp} 
			chatID = {c.chat_id} 
			photo_url = {c.photo_url} 
			email = {c.email} 
			selected = { selectedItemIndex === c.email ? true : false}
			other_participant_id = {c.other_participant_id}
			last_online = {c.last_online} />
		});
	}

	let NoChatsMessage = () => {
		if((chats && chats.length === 0) || !chats)
			return <div className = 'no-chats-div'>Click the "+" icon above to start chatting!</div>;
		return null;
	}

	let className = (chats) ? 'chat-list' : 'chat-list no-chats';

	if(chats && chats.length)
		setSearchChatsVisible(true);

	return (
		<div className = {className}>
		{chatCards}
		<NoChatsMessage />
		</div>
	);
}

export default ChatList;