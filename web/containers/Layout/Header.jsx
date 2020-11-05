import React from 'react'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectAuthUser, logout } from 'containers/Auth'

const Header = () => {
	const dispatch = useDispatch()
	const user = useSelector(selectAuthUser)
	const logoutCallback = useCallback(() => dispatch(logout()), [])
	
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
						<li class="nav-item">
							{ !user && <Link className="nav-link" to="/login">Login</Link> }
						</li>
						<li class="nav-item">
							{ user && <Link className="nav-link" to="/tasks">My Tasks</Link>}
						</li>
						<li class="nav-item">
							{ user && <Link className="nav-link" to="/account">{ user.username }</Link>}
						</li>
						<li class="nav-item">
							{ user && <button className="btn btn-link nav-link border-0" onClick={logoutCallback}>Logout</button> }
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}


export default Header


