import { Routes, Route } from "react-router-dom"
import LandingPage from "../../Pages/LandingPage/LandingPage"
import MainLayout from "../../Layouts/MainLayout"
import MovieDetails from "../../Pages/MovieDetails/MovieDetails"


const AppRouter = () => {

	return (
		<Routes>
			<Route path="/" element={ <MainLayout/> }>
				<Route path="/" element={ <LandingPage/> }/>
				<Route path="/movies/:id" element={ <MovieDetails/> }/>
			</Route>
		</Routes>
	)
}

export default AppRouter