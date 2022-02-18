// because i wont be doing route obj in this app. too much refactoring needed, and i am lazy.

import MovieDetailsBreadcrumb from "../Components/Breadcrumbs/MovieDetailsBreadcrumb"


const breadcrumbsRoutes = [
	{ path: '/', breadcrumb: 'Home' },
	{ path: '/movie/:id', breadcrumb: MovieDetailsBreadcrumb },
]

export default breadcrumbsRoutes