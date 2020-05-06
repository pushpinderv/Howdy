import React, {useState} from 'react';
import './Register.css';
import {BASE_URL} from 'Redux/constants';
import Error from '../Error/Error';

const Register = (props) =>{

	const [shake, setShake] = useState(false);
	const shakeForm = () => {
		setShake(true);
		setTimeout(()=>{setShake(false)}, 200);
	}

	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('An error occured');

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

	const [confirmPassword, setConfirmPassword] = useState('');
 	const onConfirmPasswordChange = (event) => 
	{
		setConfirmPassword(event.target.value);
	}

	const handleRegister = () =>
	{
		console.log('Register.js : '+email + ' ' + password);
		setShowError(false);
		fetch(`${BASE_URL}/register`, {
			method : 'post',
			headers : {'Content-Type': 'application/json'},
			body : JSON.stringify({
				name: name,
				email: email,
				password : password,
				confirmPassword : confirmPassword
			})
			})
			.then(res => {
				if(res.status === 400) 
				{
					setErrorMessage('Please enter the information correctly');
					setShowError(true);
					shakeForm();
				} 
				return res.json();
			})
			.then(user => {
				if(user.id){
					props.onClick();
				}
			})
			.catch(err => {
				setErrorMessage('An error occured');
				setShowError(true);
				shakeForm();
			})
		
	}

	let classShake = shake ? ' shake-relative' : '';
	let className = props.show ? `register-form show${classShake}` : 'register-form';
	return(
		<div className = {className} >
			<input onChange = {onNameChange} className = 'register-text' placeholder = 'Name' />
		    <input onChange = {onEmailChange} className = 'register-text' placeholder = 'Email' />
			<input onChange = {onPasswordChange} type = 'password' className = 'register-text' placeholder = 'Password' />
			<input onChange = {onConfirmPasswordChange} type = 'password' className = 'register-text' placeholder = 'Confirm Password' />
		    <div className = 'register-submit' onClick = {handleRegister} >Sign Up</div>
		    <Error visible = {showError} message = {errorMessage}/>
		    <div className = 'login-div' onClick = {props.onClick}>Have an account? Click to Log In</div>
		</div>
		);
}

export default Register;