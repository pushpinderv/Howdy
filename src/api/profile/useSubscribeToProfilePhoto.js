import axios from 'axios';
import {BASE_URL} from 'Redux/constants';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const useSubscribeToProfilePhoto = (userID) => 
{
	const [url, setUrl] = useState('');

	let socket = useSelector(state => state.socket);

	useEffect(() => {

		const handleMessage = (message) => {

			if(Number(message.room) === Number(userID))
			{
				console.log(`DP Updated for ${userID}`);
				console.log(message.url);
				//Update url
				setUrl(message.url);
			}		
		}

		if(userID && socket)
		{
			axios.get(`${BASE_URL}/${userID}/profile/photo`).then(response => {setUrl(response.data)});
			socket.emit("subscribe", { room: userID });
			socket.on('profile-photo-updated', handleMessage);
		}

		return function cleanup() {
			if(socket)
			{
	      		//Socket Listen Cleanup
	      		socket.emit("unsubscribe", { room: userID });
				socket.off('profile-photo-updated', handleMessage);
			}
			};

	}, [userID, socket]);

	return [url];
}

export default useSubscribeToProfilePhoto;