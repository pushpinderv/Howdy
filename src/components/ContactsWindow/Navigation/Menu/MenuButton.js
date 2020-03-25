import React from 'react';
// import menuButtonImage from './_ionicons_svg_md-menu.svg';
import Menu from 'components/Common/Menu/Menu';
import MenuItem from 'components/Common/Menu/MenuItem/MenuItem';
import logOutIcon from 'components/Common/Icons/_ionicons_svg_ios-log-out.svg';
import useAction from 'Redux/actions/useAction';
import {useSelector} from 'react-redux';
import {useBoundingBox} from 'hooks/useBoundingBox';

const MenuButton = (props) => {

	const [boundingRect, ref] = useBoundingBox();

	const myModalId = 'logout';

	const {setModalView,setModalOpen,setModalId,setMyID} = useAction();
	const currentModalId = useSelector(state => state.modalId);

	const handleLogOut = () => {
		console.log('MenuButton: Close Me!');
		setMyID(null);
		setModalOpen(false);
	};

	const handleClick = event => {
		setModalId(myModalId);
    	setModalOpen(true);
  	};

	const Button = <button ref = {ref} onClick = {handleClick}
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
		}}><svg className = 'svg-default' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path  className = 'svg-path-default' d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 
		40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 
		40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 
		17.998-40 40 17.998 40 40 40 40-17.998 40-40z"
		strokeWidth = '2px'/>
		</svg>
		</button>;

	const PhantomContainer = (props) => {
		return(
			<div style = {{
				top : props.boundingRect.top,
				left : props.boundingRect.left,
				width : props.boundingRect.width,
				height : props.boundingRect.height,
				position : 'absolute'
			}}>
				{props.children}
			</div>
			);
	}		

	const MenuModal = <PhantomContainer boundingRect = {boundingRect}><Menu anchor = 'top right' width = '180px'>
		      <MenuItem onClick={handleLogOut} icon = {logOutIcon}>Log out</MenuItem>
	      	</Menu></PhantomContainer>;

	if(currentModalId === myModalId)
	{
		setModalView(MenuModal);
	}



  	// const hideMenu = () => {
  	// 	// setMenuOpen(false);
  	// }



	return (
		<div style = {{ display : 'flex', position : 'relative'}}>
		{Button}	
		</div>
	);
}

export default MenuButton;