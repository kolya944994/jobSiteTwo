import { describe, it, expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import MyPagination from './MyPagination'
import { configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'
import { rootReducer } from '../../store/store'

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
					<MyPagination />
				</MantineProvider>
			</Provider>
		),
	}
}

describe('MyPagination component', () => {
	it('should practice page = {page+1} ', () => {
		const { store } = renderWithStore({
			MainPageHhReducer: {
				skills: [],
				error: null,
				vacancies: [],
				inputValue: '',
				area: 'all',
				page: 0,
				pages: 5,
				searchValue: '',
			},
		})
		const button = screen.getByRole('button', { name: '1' })
		expect(button).toHaveAttribute('aria-current', 'page')
	})

	it('by clicking on button updated state ', () => {
		const { store } = renderWithStore({
			MainPageHhReducer: {
				skills: [],
				error: null,
				vacancies: [],
				inputValue: '',
				area: 'all',
				page: 0,
				pages: 5,
				searchValue: '',
			},
		})

		const button = screen.getByRole('button', { name: '2' })
		fireEvent.click(button)

		expect(store.getState().MainPageHhReducer.page).toBe(1)
	})
})
