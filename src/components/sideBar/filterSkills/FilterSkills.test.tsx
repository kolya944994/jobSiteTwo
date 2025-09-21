import { MantineProvider } from '@mantine/core'
import { screen, render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import MainPageHhReducer from '../../../reducers/MainPageHhSlice'
import FilterSkills from './FilterSkills'

const rootReducer = combineReducers({ MainPageHhReducer })

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
					<FilterSkills />
				</MantineProvider>
			</Provider>
		),
	}
}

describe('FilterSkills component', () => {
	it('should bu input text in field and click button, displayed text in MyPill', () => {
		const { store } = renderWithStore({
			MainPageHhReducer: {
				skills: [],
				inputValue: '',
				area: 'all',
				page: 0,
				pages: 1,
				searchValue: '',
				vacancies: [],
				error: null,
			},
		})

		const input = screen.getByPlaceholderText('Навык')
		fireEvent.change(input, { target: { value: 'Redux' } })
		fireEvent.click(screen.getByRole('button'))
		expect(store.getState().MainPageHhReducer.skills).toContain('Redux')
		expect(screen.getByText('Redux')).toBeInTheDocument()
	})
})
