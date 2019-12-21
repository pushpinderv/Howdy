import React from 'react';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';
import NewChat from './NewChat/NewChat';

const Navigation = () => {
	return (
		<nav style = {{ 
			display : 'flex', 
			justifyContent: 'space-between', 
			backgroundColor : 'orange', 
			flex : '0 0 auto', 
			height : '65px',
			overflow : 'hidden'
		}}>
		<Profile />
		<div style = {{ display : 'flex'}}>
		<NewChat />
		<Menu />
		</div>
		</nav>
	);
}

export default Navigation;