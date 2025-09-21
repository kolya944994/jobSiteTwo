import MyPill from '../../ui/pill/MyPill'
import styles from './MyPillsInput.module.css'

import { useTypedSelector } from '../../hooks/redux'

function MyPillsInput() {
	const { skills } = useTypedSelector(state => state.MainPageHhReducer)

	return (
		<div className={styles.pills}>
			{skills.map((elem, i) => (
				<MyPill key={i}>{elem}</MyPill>
			))}
		</div>
	)
}

export default MyPillsInput
