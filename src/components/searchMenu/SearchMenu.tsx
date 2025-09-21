import MyButton from '../../ui/button/MyButton'
import styles from './SearchMenu.module.css'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { requestBySkills, setPage } from '../../reducers/MainPageHhSlice'
import React, { useState, useEffect } from 'react'

function SearchMenu() {
	const [localSearch, setLocalSearch] = useState<string>('')
	const { area, skills } = useTypedSelector(s => s.MainPageHhReducer)
	const dispatch = useTypedDispatch()

	useEffect(() => {
		if (localSearch === '') {
			dispatch(setPage(0))
			dispatch(requestBySkills({ skills, area, page: 0, searchValue: '' }))
		}
	}, [localSearch, dispatch, skills, area])

	return (
		<div className={styles.searchMenuContainer}>
			<div className={styles.searchMenuPositionElem}>
				<div className={styles.containerTitle}>
					<h2 className={styles.title}>Список вакансий</h2>
					<h3 className={styles.subtitle}>по профессии Frontend-разработчик</h3>
				</div>
				<div className={styles.searchContainer}>
					<form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
							e.preventDefault()
							dispatch(setPage(0))
							dispatch(
								requestBySkills({
									skills,
									area,
									page: 0,
									searchValue: localSearch,
								})
							)
						}}
						className={styles.searchForm}
					>
						<input
							value={localSearch}
							type='search'
							placeholder='Должность или название компании'
							className={styles.searchMenuInput}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setLocalSearch(e.target.value)
							}
						></input>
						<MyButton className={styles.searchMenuButton} type='submit'>
							Найти
						</MyButton>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SearchMenu
