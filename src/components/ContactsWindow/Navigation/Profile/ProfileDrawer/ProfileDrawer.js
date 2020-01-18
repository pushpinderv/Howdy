import React, {useContext} from 'react';
import './ProfileDrawer.css';
import BackButton from '../../../../Common/BackButton/BackButton';
import {ProfileDrawerContext} from 'Store';

const ProfileDrawer = () => {
	const [drawerState, setDrawerState] = useContext(ProfileDrawerContext);
	var className = 'ProfileDrawer';
	switch (drawerState){
		case 'default':
			className = 'ProfileDrawer';
			break;
		case 'opening':
			className = 'ProfileDrawer open';
			break;
		case 'closing':
			className = 'ProfileDrawer close';
			break;
		default:
			className = 'ProfileDrawer';
	}

	return (
		<div className = {className} style = {{
			backgroundColor : 'white'
		}}>
		<BackButton onClick = {()=>setDrawerState('closing')}/>
		</div>
	);
}

export default ProfileDrawer;
