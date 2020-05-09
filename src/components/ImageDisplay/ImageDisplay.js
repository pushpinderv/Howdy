import React from 'react';
import './ImageDisplay.css';
import BackButton from 'components/Common/BackButton/BackButton';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import useAction from 'Redux/actions/useAction';
import {useSelector} from 'react-redux';
import {useBoundingBox} from 'hooks/useBoundingBox';

const ImageDisplay = () => {

	const [boundingRect, ref] = useBoundingBox();

	let url = useSelector(state => state.imageDisplayUrl);
	let visible = useSelector(state => state.imageDisplayVisible);

	console.log(visible);

	let className = visible ? 'image-display show' : 'image-display';

	const {setImageDisplayVisible} = useAction();

	let width = boundingRect.width;
	let height = boundingRect.height;

	let imageWidth = (width > height) ? height : width;
	imageWidth = 0.8 * imageWidth;

	return (
		<div ref = {ref} onClick = {() => {setImageDisplayVisible(false)}} className = {className}>
			{/*<div className = "image-title">Image</div>*/}
			<BackButton display = 'flex' className = 'close-button' look = 'cancel'/>
			{(imageWidth) ? (<UserIcon width = {imageWidth} height = {imageWidth} url = {url} className = 'image-content'/>) : null}
		</div>
		);
}

export default ImageDisplay;