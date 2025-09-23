import './App.css'
import MainPage from './pages/mainPage/MainPage'
import VacancyPage from './pages/vacancyPage/VacancyPage'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter basename='/jobSiteTwo'>
			<Routes>
				<Route path='/' element={<Navigate to='/vacancy' />} />
				<Route path='/vacancy' element={<MainPage />} />
				<Route path='/vacancy/:id' element={<VacancyPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
