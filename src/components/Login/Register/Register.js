import React, {useState} from 'react';
import './Register.css';
import {BASE_URL} from 'Redux/constants';

const Register = (props) =>{

	const [name, setName] = useState('');
 	const onNameChange = (event) => 
	{
		setName(event.target.value);
	}

	const [email, setEmail] = useState('');
 	const onEmailChange = (event) => 
	{
		setEmail(event.target.value);
	}

	const [password, setPassword] = useState('');
 	const onPasswordChange = (event) => 
	{
		setPassword(event.target.value);
	}

	// const [confirmPassword, setConfirmPassword] = useState('');
 // 	const onConfirmPasswordChange = (event) => 
	// {
	// 	setConfirmPassword(event.target.value);
	// }

	const handleRegister = () =>
	{
		console.log('Register.js : '+email + ' ' + password);
		fetch(`${BASE_URL}/register`, {
			method : 'post',
			headers : {'Content-Type': 'application/json'},
			body : JSON.stringify({
				name: name,
				email: email,
				password : password
			})
			})
			.then(res => res.json())
			.then(user => {
				if(user.id){
					props.onClick();
				}
			})
		
	}

	let className = props.show ? 'register-form show' : 'register-form';
	return(
		<div className = {className} >
			<input onChange = {onNameChange} className = 'register-text' placeholder = 'Name' />
		    <input onChange = {onEmailChange} className = 'register-text' placeholder = 'Email' />
			<input onChange = {onPasswordChange} type = 'password' className = 'register-text' placeholder = 'Password' />
			<input /*onChange = {onConfirmPasswordChange}*/ type = 'password' className = 'register-text' placeholder = 'Confirm Password' />
		    <div className = 'register-submit' onClick = {handleRegister} >Sign Up</div>
		    <div className = 'login-div' onClick = {props.onClick}>Have an account? Click to Log In</div>
		</div>
		);
}

export default Register;