import React, {useContext,useState} from 'react';

import {NewChatDrawerContext} from 'Store';
import Drawer from 'components/Common/Drawer/Drawer';
import StickyHeaderList from '../StickyHeaderList/StickyHeaderList';
import './NewChatDrawer.css';

const NewContactDiv = (props) => {
	return(
		<div onClick = {()=>{props.setOpen(true)}} className = 'newContactDiv'>
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
	const [newContactOpen, setNewContactOpen] = useState(false);

	return (
		<Drawer heading = 'New chat' state = {[drawerOpen, setDrawerOpen]} openFrom = 'left'>
			<SearchContactsBar />
			<StickyHeaderList>
				<NewContactDiv setOpen = {setNewContactOpen}/>
			</StickyHeaderList>
			<Drawer heading = 'Add Contact' state = {[newContactOpen, setNewContactOpen]} openFrom = 'right'>
				<div style = {{ padding : '1em 1.5em', flex : '1',
				 display : 'flex', flexDirection : 'column', overflowY : 'auto'
				}}>
					<div style = {{display : 'flex', 
					justifyContent : 'space-around'}}>
						<div style = {{fontSize : '1em', lineHeight : '2em', fontWeight : '480', 
						height : '2em', width : '2.5em', flex : '0 0 2.5em', textAlign : 'right', marginTop : '0.8em'}}>Name</div>
						<input className = 'textInput' type = 'text' />
					</div>
					<div style = {{display : 'flex',
					justifyContent : 'space-around', marginTop : '1.2em'}}>
						<div style = {{fontSize : '1em', lineHeight : '2em', fontWeight : '480',
						height : '2em', width : '2.5em', flex : '0 0 2.5em', textAlign : 'right'}}>Email</div>
						<input className = 'textInput' type = 'text' />
					</div>
					<div onClick = {()=>{console.log('NewChatDrawer: Create contact clicked!')}} className = 'br2 createButton'>Create Contact</div>
				</div>
			</Drawer>
		</Drawer>
	);
}

export default NewChatDrawer;
