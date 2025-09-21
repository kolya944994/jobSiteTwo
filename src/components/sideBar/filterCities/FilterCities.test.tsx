import { MantineProvider } from '@mantine/core'
import { screen, fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import FilterCities from './FilterCities'
import * as Redux from 'react-redux'

const mockDispatch = vi.fn()
vi.mock('react-redux', () => {
	return {
		useDispatch: () => mockDispatch,
		useSelector: (fn: any) =>
			fn({
				MainPageHhReducer: {
					skills: [],
					area: 'moscow',
					page: 0,
					pages: 1,
					searchValue: '',
					vacancies: [],
					inputValue: '',
					error: null,
				},
			}),
	}
})

describe('FilterCities component', () => {
	it('Should by render component with  area: moscow, output in selector "Москва"', () => {
		render(
			<MantineProvider>
				<FilterCities />
			</MantineProvider>
		)

		expect(screen.getByText(/Москва/i)).toBeInTheDocument()
	})
})
