import React, {useContext} from 'react';

import {MenuDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';

const MenuDrawer = (props) => {
	const [drawerOpen, setDrawerOpen] = useContext(MenuDrawerContext);

	return (
		<Drawer state = {[drawerOpen, setDrawerOpen]} openFrom = 'right'/>
	);
}

export default MenuDrawer;
