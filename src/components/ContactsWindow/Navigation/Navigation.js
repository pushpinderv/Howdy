import React, {useContext} from 'react';
import ProfileButton from './Profile/ProfileButton';
import Menu from './Menu/Menu';
import NewChat from './NewChat/NewChat';
import {ProfileDrawerContext} from 'Store';

const Navigation = () => {
	const [,setProfileDrawerOpen] = useContext(ProfileDrawerContext);
	return (
		<nav style = {{ 
			display : 'flex', 
			justifyContent: 'space-between', 
			backgroundColor : 'orange', 
			flex : '0 0 auto', 
			height : '4em',
			overflow : 'hidden'
		}}>
		<ProfileButton onClick = {()=>setProfileDrawerOpen(true)} />	
		<div style = {{ display : 'flex'}}>
		<NewChat />
		<Menu />
		</div>
		</nav>
	);
}

export default Navigation;