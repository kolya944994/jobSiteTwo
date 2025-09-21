import styles from './VacancyCard.module.css'
import { Card } from '@mantine/core'

type VacancyCardType = {
	children: React.ReactNode
	className?: string
}

function VacancyCard({ children, className }: VacancyCardType) {
	return (
		<Card className={`${styles.vacancyCard} ${className}`}>{children}</Card>
	)
}

export default VacancyCard
