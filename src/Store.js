import React, {useState} from 'react';

export const ModeContext = React.createContext('mode');

const Store = ({children}) => {
	
	const [mode, setMode] = useState('Desktop');
	// console.log('App.js will use mode ', mode);	

	return (
		<ModeContext.Provider value = {[mode, setMode]}>
			{children}
		</ModeContext.Provider>
		);

};

export default Store;