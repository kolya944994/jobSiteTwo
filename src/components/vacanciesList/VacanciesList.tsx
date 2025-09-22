import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import { useTypedSelector, useTypedDispatch } from '../../hooks/redux'
import styles from './VacanciesList.module.css'
import { setArea } from '../../reducers/MainPageHhSlice'

import VacancyCardContent from '../../modules/vacancyCardContent/VacancyCardContent'

function VacanciesList() {
	const { vacancies, area } = useTypedSelector(s => s.MainPageHhReducer)
	const dispatch = useTypedDispatch()

	return (
		<div>
			<div className={styles.positionCities}>
				<p
					onClick={() => dispatch(setArea('moscow'))}
					className={`${styles.allCity} ${
						area === 'moscow' || area === 'all' ? styles.moscow : ''
					}`}
				>
					Москва
				</p>
				<p
					onClick={() => dispatch(setArea('spb'))}
					className={`${styles.allCity} ${
						area === 'spb' || area === 'all' ? styles.sanctPiterbyrg : ''
					}`}
				>
					Санкт-Петербург
				</p>
			</div>

			<div className={styles.vacanciesList}>
				{vacancies.map(cur => (
					<VacancyCard key={cur.id} className={styles.containerVacancyCard}>
						<VacancyCardContent vacancy={cur} />
					</VacancyCard>
				))}
			</div>
		</div>
	)
}

export default VacanciesList
