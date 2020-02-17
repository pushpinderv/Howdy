import React, {useContext} from 'react';
import {ProfileDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import './ProfileDrawer.css';

const ProfileDrawer = (props) => {
	const [profileDrawerOpen, setProfileDrawerOpen] = useContext(ProfileDrawerContext);

	return (
		<Drawer heading = 'Profile' state = {[profileDrawerOpen, setProfileDrawerOpen]} openFrom = 'left'>
			<div style = {{width : 'auto', backgroundColor : '#f7f7f7', display: 'flex', flex : '1', flexDirection : 'column', overflowY : 'auto'}}>
			<UserIcon margin = '2em auto' height = '10em' width = '10em'/>
			<div style = {{
				backgroundColor: 'white',
				boxShadow: '0 -1px 0.1em rgba(0, 0, 0, 0.03), 0 2px 0.2em rgba(0, 0, 0, 0.08)'}}>
				<div style = {{
					margin : '1em 2rem', 
					fontSize : '0.88em', 
					fontWeight : '450',
					color : '#754fff'
				}}>Your Name</div>
				<div style = {{
					margin : '1em 2rem', 
					fontSize : '1em', 
					fontWeight : '380',
					color : 'black'
				}}>Username</div>
			</div>
			</div>
		</Drawer>
	);
}

export default ProfileDrawer;
