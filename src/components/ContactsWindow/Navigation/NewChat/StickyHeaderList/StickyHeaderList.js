import React from 'react';
import './StickyHeaderList.css';
import 'components/Common/UserIcon/UserIcon.css';

const StickyHeaderList = (props) => {

	let recentChats = props.contactList.filter((a) =>a.timeStamp !== '').sort((a, b) => (a.timeStamp) - (b.timeStamp)).slice(0,5);
	console.log(recentChats);

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

	console.log('StickyHeaderList.js :',sectionedList);

	const Header = (props) => {
		let className = props.marginTop ? 'header' : 'header no-margin-top';
		return(
			<div className = {className}>{props.heading}</div>
			); 
	}

	const ContactInfoCard = (props) => {
		let detailCardClassName = 
		props.showDivider ? 'contactDetailContainer divider' : 'contactDetailContainer'
		return(
			<div className = 'contactInfoCard' >
				<div className = 'br2 contactProfilePic' >
					<div className = 'userHead' />
					<div className = 'userBody' />
					<div className = 'bottomLine' />
				</div>
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
					return(
						<ContactInfoCard key = {u.email} displayIdentifier = {identifier} 
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