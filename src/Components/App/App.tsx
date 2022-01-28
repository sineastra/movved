import React from 'react'
import logo from '../../logo.svg'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "../AppRouter/AppRouter"


function App () {
	return (
		<BrowserRouter>
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App
