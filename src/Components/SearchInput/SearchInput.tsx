import styles from "./SearchInput.module.scss"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { BaseSyntheticEvent, useEffect, useState } from "react"


interface searchInputPrpsIntF {
	pathname: string
}

const SearchInput = ({ pathname }: searchInputPrpsIntF) => {
	const [searchValue, setSearchValue] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e: BaseSyntheticEvent) => {
		e.preventDefault()

		if (searchValue !== '') {
			navigate({
				pathname: '/',
				search: `?search=${ searchValue }`,
			})
			setSearchValue('')
		}

	}

	const handleChange = (e: BaseSyntheticEvent) => {
		setSearchValue(e.target.value)
	}

	useEffect(() => {
		// setSearchValue()
	}, [])

	return (
		<form className={ styles.searchForm } onSubmit={ handleSubmit }>
			<div className={ styles.searchIconDiv } onClick={ handleSubmit } title="Search">
				<FaSearch/>
			</div>
			<input type="search" name="search" placeholder="Search..." onChange={ handleChange } value={ searchValue }/>
		</form>
	)
}

export default SearchInput