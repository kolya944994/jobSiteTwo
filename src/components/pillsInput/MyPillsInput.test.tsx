import { MantineProvider } from '@mantine/core'
import { screen, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MyPillsInput from './MyPillsInput'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../../store/store'
import { Provider } from 'react-redux'

const renderWithStore = (preloadedState?: any) => {
	const store = configureStore({
		reducer: rootReducer,
		preloadedState,
	})
	return {
		store,
		...render(
			<Provider store={store}>
				<MantineProvider>
					<MyPillsInput />
				</MantineProvider>
			</Provider>
		),
	}
}

describe('MyPillsInput component', () => {
	it('should display all skills from state', () => {
		renderWithStore({
			MainPageHhReducer: {
				skills: ['React', 'Redux'],
				error: null,
				vacancies: [],
				inputValue: '',
				area: 'all',
				page: 0,
				pages: 5,
				searchValue: '',
			},
		})
		const arr1 = screen.getByText('React')
		const arr2 = screen.getByText('Redux')
		expect(arr1).toBeInTheDocument()
		expect(arr2).toBeInTheDocument()
	})
})
