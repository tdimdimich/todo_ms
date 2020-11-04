import React from 'react'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectAuthUser, logout } from 'containers/Auth'

const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<Link className="navbar-brand" to="/">TodoMS</Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link className="nav-link" to="/tasks">Task</Link>
						</li>
					</ul>
					<ul class="navbar-nav navbar-right mb-2 mb-lg-0">
						<LoginItem/>
						<UserMenu/>
					</ul>
				</div>
			</div>
		</nav>
	)
}

const LoginItem = () => {
	const user = useSelector(selectAuthUser)
	if (user) return null
	return (
		<li class="nav-item">
			<Link className="nav-link" to="/login">Login</Link>
		</li>
	)
}

const UserMenu = () => {
	const dispatch = useDispatch()
	
	const user = useSelector(selectAuthUser)
	
	const logoutCallback = useCallback(() => dispatch(logout()), [])
	
	
	if (!user) return null
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{ user.username }
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<Link className="dropdown-item" to="/tasks">My Tasks</Link>
				<div class="dropdown-divider"></div>
				<button className="dropdown-item btn btn-link" onClick={logoutCallback}>Logout</button>
			</div>
		</li>
	)
}


export default Header


