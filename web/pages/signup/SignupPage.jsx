import React from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import SignupForm from './SignupForm'

import { signup } from './actions'


const SignupPage = () => {
	const dispatch = useDispatch()
	const signupCallback = useCallback((values) => dispatch(signup(values)), [dispatch])
	
	return (
		<div class="container" style={{maxWidth: "600px"}}>
			<h1 class="mb-5">Signup</h1>
			<SignupForm onSubmit={signupCallback} />
		</div>
	)
}

export default SignupPage
