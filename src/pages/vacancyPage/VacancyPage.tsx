import Header from '../../components/header/Header'
import VacanciesList from '../../components/vacanciesList/VacanciesList'

import styles from './VacancyPage.module.css'

function VacancyPage() {
	return (
		<div>
			<Header></Header>
			<div className={styles.vacanciesListPosition}>
				<VacanciesList></VacanciesList>
			</div>
		</div>
	)
}

export default VacancyPage
