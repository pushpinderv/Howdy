import React from 'react';
import './Register.css';

const Register = (props) =>{
	let className = props.show ? 'register-form show' : 'register-form';
	return(
		<div className = {className} >
			<input className = 'register-text' placeholder = 'Name' />
		    <input className = 'register-text' placeholder = 'Email' />
			<input className = 'register-text' placeholder = 'Password' />
			<input className = 'register-text' placeholder = 'Confirm Password' />
		    <div className = 'register-submit' >Sign Up</div>
		    <div className = 'login-div' onClick = {props.onClick}>Have an account? Click to Log In</div>
		</div>
		);
}

export default Register;