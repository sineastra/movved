import { Routes, Route } from "react-router-dom"
import LandingPage from "../../Pages/LandingPage/LandingPage"
import MainLayout from "../../Layouts/MainLayout"


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