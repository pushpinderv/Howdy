import React, {useState} from 'react';

export const ModeContext = React.createContext('mode');
export const ChatSelectedContext = React.createContext('chat-selected');

export const ProfileDrawerContext = React.createContext('profile-drawer');
export const ContactProfileDrawerContext = React.createContext('contact-profile-drawer');
export const NewChatDrawerContext = React.createContext('new-chat-drawer');
export const MenuDrawerContext = React.createContext('menu-drawer');

const Store = ({children}) => {

	// console.log('initializing Store.js ..')
	
	const [mode, setMode] = useState('Desktop');
	const [chatSelected, setChatSelected] = useState(true);

	return (
		<ModeContext.Provider value = {[mode, setMode]}>
		<ChatSelectedContext.Provider value = {[chatSelected, setChatSelected]}>
			{children}
		</ChatSelectedContext.Provider>	
		</ModeContext.Provider>
		);

};

export default Store;