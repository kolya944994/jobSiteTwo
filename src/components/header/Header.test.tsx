import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import Header from './Header'

describe('Header component', () => {
	it('logo and text should render ', () => {
		render(
			<MantineProvider>
				<Header />
			</MantineProvider>
		)
		expect(screen.getByRole('img', { name: /Логотип Hh/i })).toBeInTheDocument()
		expect(screen.getByText('.FrontEnd')).toBeInTheDocument()
	})
})
