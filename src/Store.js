import React, {useState} from 'react';

export const ModeContext = React.createContext('mode');

export const ChatDrawerContext = React.createContext('chat-drawer');
export const ProfileDrawerContext = React.createContext('profile-drawer');
export const ContactProfileDrawerContext = React.createContext('contact-profile-drawer');
export const NewChatDrawerContext = React.createContext('new-chat-drawer');
export const MenuDrawerContext = React.createContext('menu-drawer');
export const LogInContext = React.createContext('login');

const Store = ({children}) => {

	// console.log('initializing Store.js ..')
	
	const [mode, setMode] = useState('Desktop');
	const [chatDrawerOpen, setChatDrawerOpen] = useState(false);
	const [login, setLogin] = useState(true);

	return (
		<ModeContext.Provider value = {[mode, setMode]}>
		<ChatDrawerContext.Provider value = {[chatDrawerOpen, setChatDrawerOpen]}>
		<LogInContext.Provider value = {[login, setLogin]}>
			{children}
		</LogInContext.Provider>	
		</ChatDrawerContext.Provider>	
		</ModeContext.Provider>
		);

};

export default Store;