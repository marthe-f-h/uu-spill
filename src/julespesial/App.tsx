import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import JulenissensFavoritter from './JulenissensFavoritter'
import Landsby from './Landsby'

function App() {
	return (
		<main className="sr-only">
			<Routes>
				<Route path="/uuSpillJulespesial" element={<Home />} />
				<Route path="/favoritter" element={<JulenissensFavoritter />} />
				<Route path="/landsby" element={<Landsby />} />
			</Routes>
		</main>
	)
}

export default App
