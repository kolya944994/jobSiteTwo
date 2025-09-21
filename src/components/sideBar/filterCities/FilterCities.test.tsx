import { MantineProvider } from '@mantine/core'
import { screen, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import FilterCities from './FilterCities'

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
