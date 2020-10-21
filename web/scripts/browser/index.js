

;(async () => {
	const React = (await import('react')).default
	const ReactDom = (await import('react-dom')).default
	const createApp = (await import('containers/App/create')).default
	const App = await createApp()
	ReactDom.render(React.createElement(App), document.getElementById('app'))
})()
