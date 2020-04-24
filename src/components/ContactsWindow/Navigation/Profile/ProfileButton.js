import React, {useEffect} from 'react';
import UserIcon from 'components/Common/UserIcon/UserIcon';
import getProfilePhoto from 'api/profile/getProfilePhoto';
import getProfileName from 'api/profile/getProfileName';
import {useSelector} from 'react-redux';
import useAction from 'Redux/actions/useAction';

const ProfileButton = (props) => {

	let myID = useSelector(state => state.myID);

	let profilePhotoUrl = useSelector(state => state.myPhotoUrl);

	const {setProfilePhotoUrl, setProfileUserName} = useAction();

	// const [profilePhotoUrl, setProfilePhotoUrl] = useState('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0fc404b-7c47-4275-bd11-00dfd588ae63/d47chko-59c77046-a1a1-4807-9f4a-e00133b95df8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwZmM0MDRiLTdjNDctNDI3NS1iZDExLTAwZGZkNTg4YWU2M1wvZDQ3Y2hrby01OWM3NzA0Ni1hMWExLTQ4MDctOWY0YS1lMDAxMzNiOTVkZjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NGFtkmiOa0pnGUlpj5EAw2-dN0IzHNWtW7K1BlRyK8A');

	useEffect(() => {
	if(myID){
		getProfilePhoto(myID)
			.then(url => {
				console.log('ProfileButton : url fetched', url);
				setProfilePhotoUrl(url);
			});
		getProfileName(myID)
			.then(setProfileUserName);	
	}},
	[myID, setProfilePhotoUrl, setProfileUserName]
	);

	return (<UserIcon 
		onClick = {props.onClick} 
		height = '3em' width = '3em' 
		margin = 'auto 0 auto 1.25em'
		url = {profilePhotoUrl}
		/>);

}

export default ProfileButton;