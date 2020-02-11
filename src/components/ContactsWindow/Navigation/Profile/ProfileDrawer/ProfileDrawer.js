import React, {useContext} from 'react';
import {ProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';

const ProfileDrawer = (props) => {
	const [profileDrawerOpen, setProfileDrawerOpen] = useContext(ProfileDrawerContext);

	return (
		<Drawer heading = 'Profile' state = {[profileDrawerOpen, setProfileDrawerOpen]} openFrom = 'left'/>
	);
}

export default ProfileDrawer;
