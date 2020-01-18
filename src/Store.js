import React, {useState} from 'react';

export const ModeContext = React.createContext('mode');
export const ProfileDrawerContext = React.createContext('profile-drawer');

const Store = ({children}) => {

	// console.log('initializing Store.js ..')
	
	const [mode, setMode] = useState('Desktop');
	const [profileDrawerState, setProfileDrawerState] = useState('default');

	return (
		<ModeContext.Provider value = {[mode, setMode]}>
		<ProfileDrawerContext.Provider value = {[profileDrawerState, setProfileDrawerState]}>
			{children}
		</ProfileDrawerContext.Provider>	
		</ModeContext.Provider>
		);

};

export default Store;