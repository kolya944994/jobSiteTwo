import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import { useTypedSelector, useTypedDispatch } from '../../hooks/redux'
import styles from './VacanciesList.module.css'
import MyButton from '../../ui/button/MyButton'
import { setArea } from '../../reducers/MainPageHhSlice'

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
						<h2 className={styles.subtitleVacanciesList}>{cur.name}</h2>
						<div className={styles.containerSalaryAndExperience}>
							<p className={styles.salaryVacanciesList}>
								{cur.salary
									? `${cur.salary.from ?? ''}${
											cur.salary.from && cur.salary.to ? '-' : ''
									  }${cur.salary.to ?? ''}`
									: 'Зарплату не передали!'}
							</p>
							<p className={styles.experienceVacanciesList}>
								Опыт: {cur.experience?.name}
							</p>
						</div>
						<p className={styles.employerVacanciesList}>{cur.employer?.name}</p>
						<p
							className={`${styles.scheduleNameVacanciesList} ${
								cur.schedule.id === 'remote'
									? `${styles.remote} ${styles.allSchedule}`
									: cur.schedule.id === 'fullDay'
									? `${styles.office} ${styles.allSchedule}`
									: cur.schedule.id === 'flexible'
									? `${styles.flexible} ${styles.allSchedule}`
									: ''
							}`}
						>
							{cur.schedule.name}
						</p>
						<p className={styles.cityVacanciesList}>
							{cur.address?.city ?? 'город не передали!'}
						</p>
						<div className={styles.containerVacanciesListButton}>
							<MyButton
								className={`${styles.buttonSeeVacanciesList} ${styles.buttonVacanciesList}`}
							>
								Смотреть вакансию
							</MyButton>
							<MyButton
								className={`${styles.buttonRespondVacanciesList} ${styles.buttonVacanciesList}`}
							>
								Откликнуться
							</MyButton>
						</div>
					</VacancyCard>
				))}
			</div>
		</div>
	)
}

export default VacanciesList
