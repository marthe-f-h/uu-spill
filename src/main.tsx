import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './pirat-skatten-v2/App'
import { AppContextProvider } from './pirat-skatten-v2/AppContext'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContextProvider initialSelectedLanguage="norsk">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContextProvider>
	</StrictMode>
)
