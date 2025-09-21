import { Pagination } from '@mantine/core'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { setPage, requestBySkills } from '../../reducers/MainPageHhSlice'
import styles from './MyPagination.module.css'

function MyPagination() {
	const dispatch = useTypedDispatch()
	const { page, skills, area, pages, searchValue } = useTypedSelector(
		s => s.MainPageHhReducer
	)
	return (
		<Pagination
			className={styles.myPagination}
			total={pages}
			value={page + 1}
			onChange={p => {
				dispatch(setPage(p - 1))
				dispatch(requestBySkills({ skills, area, page: p - 1, searchValue }))
			}}
			withEdges
		/>
	)
}

export default MyPagination
