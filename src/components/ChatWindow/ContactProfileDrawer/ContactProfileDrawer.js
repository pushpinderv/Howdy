import React, {useContext} from 'react';
import {ContactProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';

const ContactProfileDrawer = (props) => {
	const [drawerOpen, setDrawerOpen] = useContext(ContactProfileDrawerContext);

	return (
		<Drawer state = {[drawerOpen, setDrawerOpen]} openFrom = 'right'/>
	);
}

export default ContactProfileDrawer;
