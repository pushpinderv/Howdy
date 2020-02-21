import React, {useState} from 'react';
// import menuButtonImage from './_ionicons_svg_md-menu.svg';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';
import logOutIcon from 'components/Common/Icons/_ionicons_svg_ios-log-out.svg';
import {LogInContext} from 'Store';

const MenuButton = (props) => {

	const [menuOpen, setMenuOpen] = useState(false);
	const [,setLogIn] = React.useContext(LogInContext);

	const handleClick = event => {
    	setMenuOpen(true);
  	};

  	const hideMenu = () => {
  		setMenuOpen(false);
  	}

	const handleLogOut = () => {
	console.log('MenuButton: Close Me!');
	setLogIn(false);
    setMenuOpen(false);
	};

	return (
		<div style = {{ display : 'flex', position : 'relative'}}>
		<button onClick = {handleClick}
		 style = {{
			display : 'flex', 
			background : 'none', 
			// backgroundColor : 'yellow', 
			border : 'none', 
			outline : 'none', 
			width : '2.2em', 
			height : 'auto', 
			cursor : 'pointer', 
			marginRight : '0.5em',
			padding : '0.3em 0em'
		}}>
		<svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path  className = 'svg-path-default' d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 
		40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 
		40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 
		17.998-40 40 17.998 40 40 40 40-17.998 40-40z"
		strokeWidth = '2px'/>
		</svg>
		</button>
			<Menu
				open = {menuOpen} hideMenu = {hideMenu}
	        >
		      <MenuItem onClick={handleLogOut} icon = {logOutIcon}>Log out</MenuItem>
	      	</Menu>
		</div>
	);
}

export default MenuButton;