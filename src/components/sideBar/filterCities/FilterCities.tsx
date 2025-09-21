import styles from './FilterCities.module.css'
import { Select } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import { useTypedDispatch, useTypedSelector } from '../../../hooks/redux'
import { requestBySkills, setArea } from '../../../reducers/MainPageHhSlice'

function FilterCities() {
	const dispatch = useTypedDispatch()
	const { area, skills, searchValue } = useTypedSelector(
		s => s.MainPageHhReducer
	)

	return (
		<div className={styles.containerFilterCities}>
			<div className={styles.containerArea}>
				<Select
					value={area}
					onChange={v => {
						const val = (v as 'all' | 'moscow' | 'spb' | null) ?? 'all'
						dispatch(setArea(val))
						dispatch(
							requestBySkills({ skills, area: val, page: 0, searchValue })
						)
					}}
					placeholder='Все города'
					data={[
						{ value: 'all', label: 'Все города' },
						{ value: 'spb', label: 'Санкт-Петербург' },
						{ value: 'moscow', label: 'Москва' },
					]}
					leftSection={<IconMapPin size={16} />}
					comboboxProps={{
						position: 'bottom',
						withinPortal: false,
						middlewares: { flip: false },
					}}
				/>
			</div>
		</div>
	)
}

export default FilterCities
