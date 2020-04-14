import React , {useState} from 'react';
import './Login.css';
// import './Cloud/Cloud.css';
import Register from './Register/Register';
import useAction from 'Redux/actions/useAction';
import {BASE_URL} from 'Redux/constants';

const Login = () =>
{
	const {setMyID} = useAction();

	const [email, setEmail] = useState('jane@gmail.com');
 	const onEmailChange = (event) => 
	{
		setEmail(event.target.value);
	}

	const [password, setPassword] = useState('fruits');
 	const onPasswordChange = (event) => 
	{
		setPassword(event.target.value);
	}

	const [state, setState] = useState('login'); 

	const handleLogin = () =>
	{
		console.log('Login.js : '+email + ' ' + password);
		fetch(`${BASE_URL}/signin`, {
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
					setMyID(user.id);
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
			    <input className = 'login-text' value = {email} 
			    placeholder = 'Enter your email' onChange = {onEmailChange} />
			    <input type = 'password' value = {password} className = 'login-text' placeholder = 'Password' onChange = {onPasswordChange} />
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