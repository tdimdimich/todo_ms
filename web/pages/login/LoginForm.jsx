import React from 'react'
import { useCallback } from 'react'
import { reduxForm, Field } from 'redux-form'
import { useDispatch } from 'react-redux'
import { routerActions } from 'connected-react-router'

const LoginForm = ({ handleSubmit }) => {
	const dispatch = useDispatch()
	const gotoSignup = useCallback(() => dispatch(routerActions.push('/signup')), [])
	return (
		<form onSubmit={handleSubmit}>
			<Field name="username" component={TextField} label={'Username'} />
			<Field name="password" component={TextField} label={'Password'} type="password"/>
			<div class="d-flex justify-content-end mt-3">
				<button type="submit" class="btn btn-link" onClick={gotoSignup}>Signup</button>
				<button type="submit" class="btn btn-primary">Login</button>
			</div>
		</form>
	)
}

const TextField = ({ label, name, type, input }) => {
	const elementId = `login_${name}`
	return (
		<div class="form-group">
			<label for={elementId}>{label}</label>
			<input id={elementId} class="form-control" type={type} value={input.value} onChange={input.onChange} />
		</div>
	)
}

export default reduxForm({ form: 'login' })(LoginForm)
