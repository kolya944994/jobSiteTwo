import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MainPageHhReducer from '../reducers/MainPageHhSlice'

export const rootReducer = combineReducers({
	MainPageHhReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
