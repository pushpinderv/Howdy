import React from 'react';
import './StickyHeaderList.css';
import 'components/Common/UserIcon/UserIcon.css';
import useAction from 'Redux/actions/useAction';
import UserIcon from 'components/Common/UserIcon/UserIcon';

const StickyHeaderList = (props) => {

	let closeDrawer = props.onItemClick;

	let recentChats = props.contactList.filter((a) => (a.time_stamp !== '' && a.time_stamp !== null)).sort((a, b) => (a.time_stamp) - (b.time_stamp)).slice(0,5);
	// console.log(recentChats);

	const RecentChatsDiv = () => {
		return(
			<>
			<Header marginTop = {false} heading = 'Recently Contacted' />
			<SubListDiv data = {recentChats} />
			</>
			);
	}

	//String.fromCharCode(65) is A, 90 is Z
	let alphabets = [];
	for (let i = 65; i <= 90; i++) 
		{
		alphabets.push(String.fromCharCode(i));
		}
	alphabets.push('@');

	//Using reduce to create sectioned list
	let sectionedList = alphabets.reduce( (acc, alphabet) => {
		let section = props.contactList.filter(

				contact => {
					if(alphabet === '@')
						{return !contact.name.length;}
					else 
						{return contact.name.startsWith(alphabet);}
				}
			);
	  if (section.length > 0) {
	    acc.push({key : alphabet, users : section})
	  }
	  return acc
	}, [])

	// console.log('StickyHeaderList.js :',sectionedList);

	const Header = (props) => {
		let className = props.marginTop ? 'header' : 'header no-margin-top';
		return(
			<div className = {className}>{props.heading}</div>
			); 
	}

	const ContactInfoCard = (props) => {
		const {setChatUser, setChatSelected} = useAction();

		let contactClicked = () =>
		{
			// console.log(props.name + props.email + props.photo_url + props.last_online);
			setChatUser({
				chatUserName : props.name,
				chatUserEmail : props.email,
				chatUserLastOnline : props.last_online,
				chatUserPhotoUrl : props.photo_url,
				chatID : props.chatID,
				chatUserID : props.chatUserID
			});

			setChatSelected(true);

			closeDrawer();
		}
		let detailCardClassName = 
		props.showDivider ? 'contactDetailContainer divider' : 'contactDetailContainer'
		return(
			<div onClick = {contactClicked} className = 'contactInfoCard' >
				<UserIcon width = '3em' height = '3em' margin = '0.5em 0 0.5em 0.8em' url = {props.photo_url}/>
			<div className = {detailCardClassName}>
				<div className = 'contactDisplayIdentifier'>{props.displayIdentifier}</div>
			</div>	
			</div>
			); 
	}

	const handleScroll = () => {
		// console.log(window.pageYOffset);
		// if(window.pageYOffset > sticky) 
		// 	{
		// 		header.classList.add("sticky");
		// 	} 
		// else 
		// 	{
		// 		header.classList.remove("sticky");
		// 	}
	}

	const SubListDiv = (props) => {
			return	(props.data.map(
				(u, i, arr) => {
					let identifier = u.name ? u.name : u.email;
					let showDivider;
				    if (arr.length - 1 === i) {
				        // last one
				        showDivider = false;
				    } else {
				        // not last one
				        showDivider = true;
				    }
				    // console.log(u);
					return(
						<ContactInfoCard key = {u.email} displayIdentifier = {identifier} name = {u.name} email = {u.email} photo_url = {u.photo_url} last_online = {u.last_online} chatID = {u.chat_id} chatUserID = {u.user_id}
						showDivider = {showDivider} />
					);	
			}));
	}

	//Generate sectioned list component from data
	const ListDiv = (props) => {
		let data = props.data;
		let list = [];

		if(recentChats.length)
		list.push(<RecentChatsDiv key = 'recent'/>);

		let remainingList = data.map(e => {
			return (<div key = {e.key} ><Header heading = {e.key} /><SubListDiv data = {e.users}/></div>);
		})

		list.push(remainingList);

		return (list);
	}	

	return(
		<div onScroll = {handleScroll} className = 'stickyHeaderList'>
		{props.children}
		<ListDiv data = {sectionedList}/>
		</div>
	);
}

export default StickyHeaderList;