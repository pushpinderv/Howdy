import React, {useContext} from 'react';
import ProfileButton from './Profile/ProfileButton';
import MenuButton from './Menu/MenuButton';
import NewChatButton from './NewChat/NewChatButton';
import {ProfileDrawerContext} from 'Store';
import {NewChatDrawerContext} from 'Store';
import {MenuDrawerContext} from 'Store';

const Navigation = () => {
	const [,setProfileDrawerOpen] = useContext(ProfileDrawerContext);
	const [,setNewChatDrawerOpen] = useContext(NewChatDrawerContext);
	const [,setMenuDrawerOpen] = useContext(MenuDrawerContext);

	return (
		<nav style = {{ 
			display : 'flex', 
			justifyContent: 'space-between', 
			backgroundColor : 'orange', 
			flex : '0 0 auto', 
			height : '4em',
			overflow : 'visible'
		}}>
		<ProfileButton onClick = {()=>setProfileDrawerOpen(true)} />	
		<div style = {{ display : 'flex'}}>
		<NewChatButton onClick = {()=>setNewChatDrawerOpen(true)} />
		<MenuButton onClick = {()=>setMenuDrawerOpen(true)} />
		</div>
		</nav>
	);
}

export default Navigation;