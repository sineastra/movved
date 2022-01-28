import { Routes, Route } from "react-router-dom"
import LandingPage from "../../Pages/LandingPage/LandingPage.jsx"
import MainLayout from "../../Layouts/MainLayout.jsx"


const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={ <MainLayout/> }>
				<Route path="/" element={ <LandingPage/> }/>
			</Route>
		</Routes>
	)
}

export default AppRouter