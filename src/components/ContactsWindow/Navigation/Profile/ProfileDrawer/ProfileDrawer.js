import React, {useContext} from 'react';
// import './ProfileDrawer.css';
// import BackButton from 'components/Common/BackButton/BackButton';
import {ProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';

const ProfileDrawer = (props) => {
	const [profileDrawerOpen, setProfileDrawerOpen] = useContext(ProfileDrawerContext);

	return (
		<Drawer state = {[profileDrawerOpen, setProfileDrawerOpen]} openFrom = 'left'/>
	);
}

export default ProfileDrawer;
