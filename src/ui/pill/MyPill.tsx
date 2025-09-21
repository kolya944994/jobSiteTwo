import { Pill } from '@mantine/core'
import styles from './MyPill.module.css'

import { useTypedDispatch } from '../../hooks/redux'
import { removeSkills } from '../../reducers/MainPageHhSlice'

type MyPillType = {
	children: string
	className?: string
}

function MyPill({ children, className }: MyPillType) {
	const dispatch = useTypedDispatch()
	return (
		<Pill unstyled className={`${styles.pill} ${className ?? ''} `}>
			<div className={styles.containerMyPill}>
				<span>{children}</span>
				<span
					className={styles.closeButton}
					onClick={() => dispatch(removeSkills(children))}
				>
					&times;
				</span>
			</div>
		</Pill>
	)
}

export default MyPill
