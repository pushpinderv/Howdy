import React from 'react';
import ChatCard from './ChatCard/ChatCard';

const ChatList = () => {
	
	let chats = [
		// {name :'Adam', email : 'adam@gmail.com', message : 'Hey Bud!', time_stamp : '1581688000'}, 
		// {name :'Bob', email : 'bob@gmail.com', message : 'Hey Bud!', time_stamp : '1581685500'}, 
		// {name :'Bane', email : 'bane@gmail.com', message : 'Hey Bud!',  time_stamp : '1581686400'}, 
		// {name :'Bruce', email : 'bruce@gmail.com', message : 'Hey Bud!',  time_stamp : '1581687000'}, 
		{name :'Clark', email : 'clark@gmail.com', message : 'It is not an S',  time_stamp : '1581685800'}, 
		{name :'Cain', email : 'cain@gmail.com',  message : 'God loves Abel more. Makes me wanna kill my brother.',  time_stamp : '2020-02-01 06:30:30+00'}, 
		{name :'David', email : 'david@gmail.com',  message : 'I killed Goliath!',  time_stamp : '2020-03-20 09:50:30+00'}
	];

	let chatCards = chats.map(c => <ChatCard key = {c.name} name = {c.name} message = {c.message} timeStamp = {c.time_stamp} />);

	return (
		<nav style = {{ backgroundColor : 'white', flex : 1, overflowY : 'scroll', paddingTop : '0.2em'}}>
		{chatCards}
		</nav>
	);
}

export default ChatList;