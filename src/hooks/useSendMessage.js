import {BASE_URL} from 'Redux/constants';
import useAction from 'Redux/actions/useAction';

export const useSendMessage = () => {

	const {setChatID} = useAction();

		const createChatAndSendMessage = (otherParticipantID, requestorID, message) => {
		const options = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify
	        ({
	        	"otherParticipantID" : otherParticipantID, 
	        	"requestorID" : requestorID
	        })
	    };
	    fetch(`${BASE_URL}/chats`, options)
	        .then(response => response.json())
	        .then(json => {

	        	console.log('Chat id from response is: ',json.chat_id);
	        	let id = json.chat_id;
	        	setChatID(id);
	        	sendMessage(requestorID, id, message);

	        });
	}

	const sendMessage = (requestorID, chatID, message) => {

		const options = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ userID: requestorID, content: message })
	    };
	    fetch(`${BASE_URL}/chats/${chatID}/messages`, options)
	        .then(response => response.json())
	        .then(console.log);

	}

	// const [chats, setChats] = useState([]);
	const send = (otherParticipantID, requestorID, message, chatID) => {

	console.log('chat id is:',chatID);
	
	if(message.length)
	{	
		if(chatID)
		{	
		sendMessage(requestorID, chatID, message);
		}
		else
		{
		console.log('creating chat..');
		console.log('chat user id is:',otherParticipantID);	
		createChatAndSendMessage(otherParticipantID , requestorID, message);
		}
	}

	}

	return [send];
}	
