import React from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from './LoginForm'

import { login } from './actions'

const LoginPage = () => {
	const dispatch = useDispatch()
	const loginCallback = useCallback((values) => dispatch(login(values)), [dispatch])
	
	return (
		<div class="container" style={{maxWidth: "600px"}}>
			<h1 class="mb-5">Login</h1>
			<LoginForm onSubmit={loginCallback} />
		</div>
	)
}


export default LoginPage
