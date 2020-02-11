import React , {useContext, useState} from 'react';
import './Login.css';
// import './Cloud/Cloud.css';
import {LogInContext} from 'Store';
import Register from './Register/Register';

const Login = () =>
{

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

	const [state, setState] = useState('login'); 
	const [, setLogin] = useContext(LogInContext);
	const handleLogin = () =>
	{
		console.log('Login.js : '+email + ' ' + password);
		fetch('http://localhost:3001/signin', {
			method : 'post',
			headers : {'Content-Type': 'application/json'},
			body : JSON.stringify({
				email: email,
				password : password
			})
			})
			.then(res => res.json())
			.then(user => {
				if(user.id){
					setLogin(true);
				}
			})
		
	}

	const toggleForm = () =>
	{
		if(state === 'login')
			setState('register');
		else if (state === 'register')
			setState('login');
	}

	let loginForm = () =>{
		let className = (state === 'login') ? 'login-form show' : 'login-form';
		return(
			  <div className = {className} >
			    <input className = 'login-text' 
			    placeholder = 'Enter your email' onChange = {onEmailChange} />
			    <input type = 'password' className = 'login-text' placeholder = 'Password' onChange = {onPasswordChange} />
			    <div className = 'login-submit disable-select' onClick = {handleLogin} >Log In</div>
			    <div className = 'register-div disable-select' onClick = {toggleForm} >New to Howdy? Create an account</div>
			  </div>
			  );
			}
  	
	let showRegister = (state === 'login') ? false : true;
  	let RegisterForm = <Register show = {showRegister} onClick = {toggleForm}/>

  	// let FormToRender = (state === 'login') ? loginForm() : RegisterForm;

  	return (
  		<div className = 'login-background'>
  		{loginForm()}
  		{RegisterForm}
  		</div>
  		);

}


export default Login;