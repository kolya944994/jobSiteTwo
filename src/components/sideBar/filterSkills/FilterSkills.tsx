import styles from './FilterSkills.module.css'
import MyButton from '../../../ui/button/MyButton'
import MyPillsInput from '../../pillsInput/MyPillsInput'
import { useTypedDispatch, useTypedSelector } from '../../../hooks/redux'
import { changeInput, addSkills } from '../../../reducers/MainPageHhSlice'
import React from 'react'

function FilterSkills() {
	const { inputValue } = useTypedSelector(state => state.MainPageHhReducer)

	const dispatch = useTypedDispatch()

	return (
		<div className={styles.containerFilterSkills}>
			<div className={styles.containerTitleFilterSkills}>
				<h4 className={styles.titleFilterSkills}>Ключевые навыки</h4>
			</div>
			<div className={styles.containerSearchFilterSkills}>
				<form
					className={styles.formFilterSkills}
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
						e.preventDefault()
						if (inputValue) {
							dispatch(addSkills(inputValue))
							dispatch(changeInput(''))
						}
					}}
				>
					<input
						type='search'
						placeholder='Навык'
						className={styles.inputFilterSkills}
						value={inputValue}
						onChange={e => dispatch(changeInput(e.target.value))}
					></input>
					<MyButton
						className={styles.buttonFilterSkills}
						type='submit'
					></MyButton>
				</form>
			</div>
			<div className={styles.containerAddSkills}>
				<MyPillsInput></MyPillsInput>
			</div>
		</div>
	)
}

export default FilterSkills
