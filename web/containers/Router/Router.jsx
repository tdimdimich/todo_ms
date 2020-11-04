import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5

import Layout from 'containers/Layout'

import HomePage from 'pages/home'
import LoginPage from 'pages/login'
import SignupPage from 'pages/signup'


const Router = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/"><HomePage/></Route>
				<Route exact path="/login"><LoginPage/></Route>
				<Route exact path="/signup"><SignupPage/></Route>
				<Route>Not Found</Route>
			</Switch>
		</Layout>
	)
}

export default Router
