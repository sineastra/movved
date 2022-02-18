import React, { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter/AppRouter"
import ScrollToTop from "./ScrollToTop"


function App () {
	return (
		<BrowserRouter>
			<ScrollToTop/>
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App
