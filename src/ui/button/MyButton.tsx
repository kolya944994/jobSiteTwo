import { Button } from '@mantine/core'
import React from 'react'
import styles from './MyButton.module.css'

type MyButtonType = {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
	children?: React.ReactNode
}

function MyButton({ onClick, className, type, children }: MyButtonType) {
	return (
		<Button
			unstyled
			onClick={onClick}
			className={`${className} ${styles.button}`}
			type={type}
		>
			{children}
		</Button>
	)
}

export default MyButton
