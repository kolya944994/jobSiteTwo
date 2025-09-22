import { Link } from 'react-router-dom'
import styles from '../../components/vacanciesList/VacanciesList.module.css'
import MyButton from '../../ui/button/MyButton'

type Vacancy = {
	id: string
	name: string
	salary: { from?: number; to?: number } | null
	experience?: { name: string }
	employer?: { name: string }
	schedule: { id: string; name: string }
	address?: { city?: string }
	alternate_url?: string
}

function VacancyCardContent({
	vacancy,
	isButton = true,
	isButtonText = true,
}: {
	vacancy: Vacancy
	isButton?: boolean
	isButtonText?: boolean
}) {
	return (
		<>
			<h2 className={styles.subtitleVacanciesList}>{vacancy.name}</h2>

			<div className={styles.containerSalaryAndExperience}>
				<p className={styles.salaryVacanciesList}>
					{vacancy.salary
						? `${vacancy.salary.from ?? ''}${
								vacancy.salary.from && vacancy.salary.to ? '-' : ''
						  }${vacancy.salary.to ?? ''}`
						: 'Зарплату не передали!'}
				</p>
				<p className={styles.experienceVacanciesList}>
					Опыт: {vacancy.experience?.name}
				</p>
			</div>

			<p className={styles.employerVacanciesList}>{vacancy.employer?.name}</p>

			<p
				className={`${styles.scheduleNameVacanciesList} ${
					vacancy.schedule.id === 'remote'
						? `${styles.remote} ${styles.allSchedule}`
						: vacancy.schedule.id === 'fullDay'
						? `${styles.office} ${styles.allSchedule}`
						: vacancy.schedule.id === 'flexible'
						? `${styles.flexible} ${styles.allSchedule}`
						: ''
				}`}
			>
				{vacancy.schedule.name}
			</p>

			<p className={styles.cityVacanciesList}>
				{vacancy.address?.city ?? 'город не передали!'}
			</p>

			<div className={styles.containerVacanciesListButton}>
				<Link to={`/vacancy/${vacancy.id}`}>
					{isButton && (
						<MyButton
							className={`${styles.buttonSeeVacanciesList} ${styles.buttonVacanciesList}`}
						>
							Смотреть вакансию
						</MyButton>
					)}
				</Link>
				{isButtonText ? (
					<MyButton
						className={`${styles.buttonRespondVacanciesList} ${styles.buttonVacanciesList}`}
					>
						Откликнуться
					</MyButton>
				) : (
					<a
						href={vacancy.alternate_url}
						target='_blank'
						rel='noopener noreferrer'
						className={`${styles.buttonRespondVacanciesListColor} ${styles.buttonVacanciesList}`}
					>
						Откликнуться на hh.ru
					</a>
				)}
			</div>
		</>
	)
}

export default VacancyCardContent
