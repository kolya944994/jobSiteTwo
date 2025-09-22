import './App.css'
import MainPage from './pages/mainPage/MainPage'
import VacancyPage from './pages/vacancyPage/VacancyPage'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/vacancy' replace />}></Route>
				<Route path='/vacancy' element={<MainPage />}></Route>
				<Route path='/vacancy/:id' element={<VacancyPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
