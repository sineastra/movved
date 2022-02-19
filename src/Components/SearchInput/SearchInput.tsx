import styles from "./SearchInput.module.scss"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { BaseSyntheticEvent, useEffect, useState } from "react"
import { IconContext } from "react-icons"


interface searchInputPropsIntF {
	className?: string,
}

const SearchInput = ({ className = '' }: searchInputPropsIntF) => {
	const [searchValue, setSearchValue] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()

	const handleSubmit = (e: BaseSyntheticEvent) => {
		e.preventDefault()

		if (searchValue !== '') {
			setSearchParams({ search: searchValue })
			setSearchValue('')
		}

	}

	const handleChange = (e: BaseSyntheticEvent) => {
		setSearchValue(e.target.value)
	}

	useEffect(() => {
		setSearchValue('')
	}, [])

	return (
		<form className={ `${ styles.formElement } ${ className }` } onSubmit={ handleSubmit } role="search-form">
			<div className={ styles.searchIconWrapper } onClick={ handleSubmit } title="Search">
				<IconContext.Provider value={ { className: styles.searchIcon } }>
					<FaSearch/>
				</IconContext.Provider>
				<div className={ styles.searchInputWrapper }>
					<input
						type="search"
						name="search"
						placeholder="Search..."
						onChange={ handleChange }
						value={ searchValue }
						className={ styles.searchInput }/>
				</div>
			</div>
		</form>
	)
}

export default SearchInput