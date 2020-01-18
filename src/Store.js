import React, {useState} from 'react';

export const ModeContext = React.createContext('mode');
export const ProfileDrawerContext = React.createContext('profile-drawer');

const Store = ({children}) => {

	// console.log('initializing Store.js ..')
	
	const [mode, setMode] = useState('Desktop');
	const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

	return (
		<ModeContext.Provider value = {[mode, setMode]}>
		<ProfileDrawerContext.Provider value = {[profileDrawerOpen, setProfileDrawerOpen]}>
			{children}
		</ProfileDrawerContext.Provider>	
		</ModeContext.Provider>
		);

};

export default Store;