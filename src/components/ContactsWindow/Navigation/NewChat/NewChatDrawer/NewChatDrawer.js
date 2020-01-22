import React, {useContext} from 'react';

import {NewChatDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';

const NewChatDrawer = (props) => {
	const [drawerOpen, setDrawerOpen] = useContext(NewChatDrawerContext);

	return (
		<Drawer state = {[drawerOpen, setDrawerOpen]} openFrom = 'left'/>
	);
}

export default NewChatDrawer;
