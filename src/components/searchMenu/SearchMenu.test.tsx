import { MantineProvider } from '@mantine/core'
import { screen, fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import SearchMenu from './SearchMenu'

const mockDispatch = vi.fn()
vi.mock('react-redux', () => {
	return {
		useDispatch: () => mockDispatch,
		useSelector: (fn: any) =>
			fn({
				MainPageHhReducer: {
					skills: [],
					area: 'all',
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

describe('SearchMenu component', () => {
	it('should by input texts in field and click button, dispatch requestBySkills() ', () => {
		render(
			<MantineProvider>
				<SearchMenu />
			</MantineProvider>
		)

		const input = screen.getByRole('searchbox')
		fireEvent.change(input, { target: { value: 'Frontend' } })
		const button = screen.getByText('Найти')
		fireEvent.click(button)
		expect(mockDispatch).toHaveBeenCalled()
	})
})
