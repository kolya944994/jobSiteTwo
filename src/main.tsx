import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'
import '@mantine/core/styles.css'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<MantineProvider>
				<App />
			</MantineProvider>
		</Provider>
	</StrictMode>
)
