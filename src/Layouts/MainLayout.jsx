import Header from "../Components/Header/Header.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import { Outlet } from "react-router-dom"


const MainLayout = () => {

	return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	)
}

export default MainLayout