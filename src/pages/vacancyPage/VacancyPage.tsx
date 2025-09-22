import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import styles from './VacancyPage.module.css'
import { useEffect, useState } from 'react'
import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import VacancyCardContent from '../../modules/vacancyCardContent/VacancyCardContent'

function VacancyPage() {
	const [vacancy, setVacancy] = useState<any>(null)
	const { id } = useParams<{ id: string }>()

	useEffect(() => {
		fetch(`https://api.hh.ru/vacancies/${id}`)
			.then(res => res.json())
			.then(data => {
				console.log('vacancy:', data)
				setVacancy(data)
			})
	}, [id])

	return (
		<div>
			<Header />
			<div className={styles.vacanciesListPosition}>
				{vacancy && (
					<>
						<VacancyCard>
							<VacancyCardContent
								vacancy={vacancy}
								isButton={false}
								isButtonText={false}
							/>
						</VacancyCard>
						<div>
							<VacancyCard>
								<h3>Компания</h3>
								<div
									className={styles.vacancyDescription}
									dangerouslySetInnerHTML={{ __html: vacancy.description }}
								/>
							</VacancyCard>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default VacancyPage
