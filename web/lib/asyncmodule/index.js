import React from 'react'
import { useState, useEffect } from 'react'
import { useStore } from 'react-redux'

/**
 * Async module loader
 * 
 * Module format
 * 
 * default: Component to mount
 * initialize: function will be called once after loading
 * 
 * Example:
	import asyncmodule from 'lib/asyncmodule'
	export default asyncmodule(() => import('./module'))
 */
export default (importFunc) => {
	let loadedModule = undefined
	const AsyncModuleLoader = (props) => {
		const [ status, setStatus ] = useState('loading')
		const store = useStore()
		useEffect(() => {
			if (!loadedModule) {
				(async () => {
					loadedModule = await importFunc()
					if (loadedModule.initialize) await loadedModule.initialize({ store })
					setStatus('done')
				})()
			}
		}, [])
		
		if (status === 'done') {
			const Component = loadedModule.default
			return <Component {...props} />
		} else {
			return <Loading />
		}
	}	
	return AsyncModuleLoader
}

const Loading = () => 'Loading...'






