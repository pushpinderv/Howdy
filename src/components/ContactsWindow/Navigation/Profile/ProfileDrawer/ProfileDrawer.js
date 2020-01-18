import React, {useContext} from 'react';
import './ProfileDrawer.css';
import BackButton from '../../../../Common/BackButton/BackButton';
import {ProfileDrawerContext} from 'Store';

const ProfileDrawer = () => {
	const [profileDrawerOpen, setProfileDrawerOpen] = useContext(ProfileDrawerContext);

	return (
		<div className = {profileDrawerOpen ? 'ProfileDrawer open' : 'ProfileDrawer'} 
		style = {{
			backgroundColor : 'white'
		}}>
		<BackButton onClick = {()=>setProfileDrawerOpen(false)}/>
		</div>
	);
}

export default ProfileDrawer;
