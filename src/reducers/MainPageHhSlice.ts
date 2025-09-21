import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const requestBySkills = createAsyncThunk(
	'jobs/requestBySkills',
	async (
		{
			skills,
			area,
			page,
			searchValue,
		}: { skills: string[]; area: Area; page: number; searchValue: string },
		{ rejectWithValue }
	) => {
		try {
			let url = `https://api.hh.ru/vacancies?per_page=10&page=${page}&industry=7&professional_role=96`

			if (searchValue) {
				url += `&search_field=name&search_field=company_name&text=${encodeURIComponent(
					searchValue
				)}`
			} else if (skills.length) {
				url += `&search_field=description&text=${encodeURIComponent(
					skills.join(' ')
				)}`
			}

			if (area === 'moscow') url += '&area=1'
			if (area === 'spb') url += '&area=2'

			const request = await fetch(url)

			if (!request.ok) {
				throw new Error('Не удалось сделать запрос')
			}
			return await request.json()
		} catch (error) {
			return rejectWithValue((error as Error).message)
		}
	}
)
type Area = 'all' | 'moscow' | 'spb' | null

type InitialStateType = {
	skills: string[]
	vacancies: any[]
	error: string | null
	inputValue: string
	area: Area
	page: number
	pages: number
	searchValue: string
}

const initialState: InitialStateType = {
	skills: ['TypeScript', 'React', 'Redux'],
	error: null,
	vacancies: [],
	inputValue: '',
	area: 'all',
	page: 0,
	pages: 0,
	searchValue: '',
}

const MainPageHhSlice = createSlice({
	name: 'MainPageHh',
	initialState,
	reducers: {
		changeInputSearch(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload
		},
		addSkills(state, action: PayloadAction<string>) {
			const newSkill = action.payload.trim()
			if (newSkill && !state.skills.includes(newSkill)) {
				state.skills.push(newSkill)
			}
		},
		removeSkills(state, action: PayloadAction<string>) {
			state.skills = state.skills.filter(s => s !== action.payload)
		},
		changeInput(state, action: PayloadAction<string>) {
			state.inputValue = action.payload
		},
		setArea(state, action: PayloadAction<Area>) {
			state.area = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(requestBySkills.pending, state => {
			state.error = null
		})
		builder.addCase(requestBySkills.fulfilled, (state, action) => {
			state.vacancies = action.payload.items
			state.pages = action.payload.pages
		})
		builder.addCase(requestBySkills.rejected, (state, action) => {
			state.error = action.payload as string
		})
	},
})

export const {
	addSkills,
	removeSkills,
	changeInput,
	setArea,
	setPage,
	changeInputSearch,
} = MainPageHhSlice.actions
export default MainPageHhSlice.reducer
