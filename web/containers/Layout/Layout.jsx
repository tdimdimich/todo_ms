import React from 'react'

import Header from './Header'
import TaskList from 'containers/TaskList'

const Layout = () => {
	return (
		<React.Fragment>
			<Header/>
			<main>
				<div class="container mt-5">
					<h1>Task List</h1>
					<TaskList/>
				</div>
			</main>
		</React.Fragment>
	)
}

export default Layout
