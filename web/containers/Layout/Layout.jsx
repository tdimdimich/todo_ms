import React from 'react'

import Header from './Header'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header/>
			<main>
				<div class="container mt-5">
					{ children }
				</div>
			</main>
		</React.Fragment>
	)
}

export default Layout
