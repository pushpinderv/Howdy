import React, {useContext} from 'react';

import {NewChatDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import StickyHeaderList from '../StickyHeaderList/StickyHeaderList';
import './NewChatDrawer.css';

const NewContactDiv = () => {
	return(
		<div className = 'newContactDiv'>
			<div className = 'br2 newContactIcon' >
				<svg  className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path className = 'svg-path-newContact' d="M416 
					277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" 
					strokeWidth = '1px'/>
				</svg>
			</div>
			<div className = 'newContactText'>New Contact</div>
		</div>
		);
}

const SearchContactsBar = () => {
	return(
		<div className = 'app-theme-color-light shadow-below' style = {{
				display : 'flex', 
				padding : '0.6em 0.75em', 
				// backgroundColor : 'blue', 
				flex : '0 0 auto', 
				height : '3.7em'
		}}>
			<input placeholder = 'Search contacts' className = 'br-pill bn ph3' 
			style = {{
				flex : '1 1 auto', 
				minWidth : '100%', 
				outline : 'none',
				fontSize : '1em', 
				lineHeight : '1.4em'
			}} type = 'text' />
		</div>
		);
}

const NewChatDrawer = (props) => {
	const [drawerOpen, setDrawerOpen] = useContext(NewChatDrawerContext);

	return (
		<Drawer heading = 'New chat' state = {[drawerOpen, setDrawerOpen]} openFrom = 'left'>
			<SearchContactsBar />
			<StickyHeaderList>
				<NewContactDiv />
			</StickyHeaderList>
		</Drawer>
	);
}

export default NewChatDrawer;
