import React from 'react';
import './StickyHeaderList.css';
import 'components/Common/UserIcon/UserIcon.css';

let contactList = [
	{name :'Adam', email : 'adam@gmail.com'}, 
	{name :'Bob', email : 'bob@gmail.com'}, 
	{name :'Bane', email : 'bane@gmail.com'}, 
	{name :'Bruce', email : 'bruce@gmail.com'}, 
	{name :'Clark', email : 'clark@gmail.com'}, 
	{name :'Cain', email : 'cain@gmail.com'}, 
	{name :'David', email : 'david@gmail.com'}, 
	{name :'Dante', email : 'dante@gmail.com'}, 
	{name :'Earl', email : 'earl@gmail.com'}, 
	{name :'Eric', email : 'eric@gmail.com'},
	{name : '', email : 'barry@gmail.com'}
];

//String.fromCharCode(65) is A, 90 is Z
let alphabets = [];
for (let i = 65; i <= 90; i++) 
	{
	alphabets.push(String.fromCharCode(i));
	}

//Using reduce to create sectioned list
let sectionedList = alphabets.reduce( (acc, alphabet) => {
	let section = contactList.filter(
			contact => {
			return contact.name.startsWith(alphabet);
			}
		);
  if (section.length > 0) {
    acc.push({key : alphabet, users : section})
  }
  return acc
}, [])

console.log('StickyHeaderList.js :',sectionedList);

const Header = (props) => {
	return(
		<div className = 'header'>{props.heading}</div>
		); 
}

const ContactInfoCard = (props) => {
	let detailCardClassName = 
	props.showDivider ? 'contactDetailContainer divider' : 'contactDetailContainer'
	return(
		<div className = 'contactInfoCard' >
			<div className = 'br2' style = {{ 
			backgroundColor : '#dfe5e7', 
			height : '2.8em', 
			width : '2.8em', 
			margin : '0.7em 0 0.7em 1em', 
			alignSelf : 'flex-start',
			cursor : 'pointer',
			flex : '0 0 auto',
			flexDirection : 'column',
			overflow : 'hidden',
			position : 'relative'
			}}>
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
	console.log(window.pageYOffset);
	// if(window.pageYOffset > sticky) 
	// 	{
	// 		header.classList.add("sticky");
	// 	} 
	// else 
	// 	{
	// 		header.classList.remove("sticky");
	// 	}
}

//Generate sectioned list component from data
const List = (props) => {
	let data = props.data;
	let list = data.map(e => {

		let subList = e.users.map(
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
		});


		return (<div key = {e.key} ><Header heading = {e.key} />{subList}</div>);
	})

	return (list);
}

const StickyHeaderList = (props) => {
	return(
		<div onScroll = {handleScroll} className = 'stickyHeaderList'>
		{props.children}
		<List data = {sectionedList}/>
		</div>
	);
}

export default StickyHeaderList;