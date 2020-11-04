import React from 'react'
import { useCallback } from 'react'
import { reduxForm, Field } from 'redux-form'
import { useDispatch } from 'react-redux'
import { routerActions } from 'connected-react-router'

const SignupForm = ({ handleSubmit }) => {
	const dispatch = useDispatch()
	const gotoLogin = useCallback(() => dispatch(routerActions.push('/login')), [])
	return (
		<form onSubmit={handleSubmit}>
			<Field name="username" component={TextField} label={'Username'} />
			<Field name="password" component={TextField} label={'Password'} type="password"/>
			<div class="d-flex justify-content-end mt-3">
				<button type="submit" class="btn btn-link" onClick={gotoLogin}>Login</button>
				<button type="submit" class="btn btn-primary">Signup</button>
			</div>
		</form>
	)
}

const TextField = ({ label, name, type, input }) => {
	const elementId = `signup_${name}`
	return (
		<div class="form-group">
			<label for={elementId}>{label}</label>
			<input id={elementId} class="form-control" type={type} value={input.value} onChange={input.onChange} />
		</div>
	)
}

export default reduxForm({ form: 'signup' })(SignupForm)
