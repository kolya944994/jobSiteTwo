import { MantineProvider } from '@mantine/core'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import VacanciesList from './VacanciesList'

const mockDispatch = vi.fn()

vi.mock('react-redux', () => {
	return {
		useDispatch: () => mockDispatch,
		useSelector: (fn: any) =>
			fn({
				MainPageHhReducer: {
					skills: [],
					inputValue: '',
					area: 'all',
					page: 0,
					pages: 1,
					searchValue: '',
					error: null,
					vacancies: [
						{
							id: '1',
							name: 'Frontend Developer',
							salary: { from: 1000, to: 2000 },
							experience: { name: '1-3 года' },
							employer: { name: 'CompanyX' },
							schedule: { id: 'remote', name: 'Удалёнка' },
							address: { city: 'Москва' },
						},
						{
							id: '2',
							name: 'Backend Developer',
							salary: null,
							experience: { name: 'Без опыта' },
							employer: { name: 'CompanyY' },
							schedule: { id: 'fullDay', name: 'Офис' },
							address: { city: 'Санкт-Петербург' },
						},
					],
				},
			}),
	}
})

describe('VacanciesList component', () => {
	it('render vacancies with correct data', () => {
		render(
			<MantineProvider>
				<VacanciesList />
			</MantineProvider>
		)

		const one = screen.getByText('Frontend Developer').closest('div')!
		expect(within(one).getByText('1000-2000')).toBeInTheDocument()
		expect(within(one).getByText(/Опыт: 1-3 года/)).toBeInTheDocument()
		expect(within(one).getByText('CompanyX')).toBeInTheDocument()
		expect(within(one).getByText('Удалёнка')).toBeInTheDocument()
		expect(within(one).getByText('Москва')).toBeInTheDocument()

		const two = screen.getByText('Backend Developer').closest('div')!
		expect(within(two).getByText('Зарплату не передали!')).toBeInTheDocument()
		expect(within(two).getByText(/Опыт: Без опыта/)).toBeInTheDocument()
		expect(within(two).getByText('CompanyY')).toBeInTheDocument()
		expect(within(two).getByText('Офис')).toBeInTheDocument()
		expect(within(two).getByText('Санкт-Петербург')).toBeInTheDocument()
	})
})
