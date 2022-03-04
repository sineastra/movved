import { useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { movieInterface } from "../_misc/interfaces"


interface propsIntF {
	request: (searchParams: URLSearchParams) => Promise<any>
}
const useFetchMoviesGrid = ({ request }: propsIntF) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState<movieInterface[]>([])
	const [allMoviesCount, setAllMoviesCount] = useState(0)
	const [activePage, setActivePage] = useState<number>(0)

	useEffect(() => {
		const getData = async () => {
			const moviesData = await request(searchParams)

			setMovies(moviesData.movies)
			setAllMoviesCount(moviesData.totalMoviesCount)
		}

		const page = searchParams.get('page')
		setActivePage(Number(page) || 1)

		getData()
	}, [searchParams])

	const changePage = (e: number) => {
		setSearchParams({ ...searchParams, page: `${ e }` })
	}

	return {
		movies,
		allMoviesCount,
		activePage,
		changePage,
	}
}

export default useFetchMoviesGrid