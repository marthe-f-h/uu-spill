import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import GrottensHistorie from './GrottensHistorie'
import Skattekartet from './Skattekartet'
import Papegoyen from './Papegoyen'
import Skatten from './Skatten'
import HjemmeIgjen from './HjemmeIgjen'

function App() {
	return (
		// className="sr-only"
		<main>
			<Routes>
				<Route path="/uuSpill" element={<Home />} />
				<Route
					path="/grottens_historie"
					element={<GrottensHistorie />}
				/>
				<Route path="/skattekartet" element={<Skattekartet />} />
				<Route path="/papegoyensHemmelighet" element={<Papegoyen />} />

				<Route path="/skatten" element={<Skatten />} />
				<Route path="/hjem" element={<HjemmeIgjen />} />
			</Routes>
		</main>
	)
}

export default App
