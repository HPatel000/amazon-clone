import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Login.css';
import { auth } from './firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/');
    }).catch(err => alert(err.message));
  }

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push('/');
      }
    }).catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>
          By sigining-in you agree to Amazon's Conditions of use & sale. Please see out Privacy Notice, out cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;