import React from 'react';
// import menuButtonImage from './_ionicons_svg_md-menu.svg';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';
import logOutIcon from 'components/Common/Icons/_ionicons_svg_ios-log-out.svg';
import {LogInContext} from 'Store';
import useAction from 'Redux/actions/useAction';

const MenuButton = (props) => {

	const [,setLogIn] = React.useContext(LogInContext);
	const {showModal} = useAction();

	const MenuModal = (props) =>{ return(<Menu
				open = {props.open} hideMenu = {props.hideMenu}
	        >
		      <MenuItem onClick={handleLogOut} icon = {logOutIcon}>Log out</MenuItem>
	      	</Menu>)};

	const handleClick = event => {
    	showModal(<MenuModal open = 'true' />);
  	};

  	// const hideMenu = () => {
  	// 	// setMenuOpen(false);
  	// }

	const handleLogOut = () => {
	console.log('MenuButton: Close Me!');
	setLogIn(false);
    // setMenuOpen(false);
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
			
		</div>
	);
}

export default MenuButton;