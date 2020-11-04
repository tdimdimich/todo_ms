import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5

import HomePage from 'pages/home'
import LoginPage from 'pages/login'
import SignupPage from 'pages/signup'


const Router = () => {
	return (
		<Switch>
			<Route exact path="/"><HomePage/></Route>
			<Route exact path="/login"><LoginPage/></Route>
			<Route exact path="/signup"><SignupPage/></Route>
			<Route>Not Found</Route>
		</Switch>
	)
}

export default Router
