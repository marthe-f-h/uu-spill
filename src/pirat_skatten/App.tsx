import { Route, Routes } from 'react-router-dom'
import Start from './Start'
import GrottensHistorie from './GrottensHistorie'
import Skattekartet from './Skattekartet'
import Papegoyen from './Papegoyen'
import Skatten from './Skatten'
import HjemmeIgjen from './HjemmeIgjen'

const basePath = '/uuSpill'

function App() {
	return (
		<main className="sr-only">
			<Routes>
				<Route path={basePath} element={<Start />} />
				<Route
					path={`${basePath}/grottens_historie`}
					element={<GrottensHistorie />}
				/>
				<Route
					path={`${basePath}/skattekartet`}
					element={<Skattekartet />}
				/>
				<Route
					path={`${basePath}/papegoyensHemmelighet`}
					element={<Papegoyen />}
				/>

				<Route path={`${basePath}/skatten`} element={<Skatten />} />
				<Route path={`${basePath}/hjem`} element={<HjemmeIgjen />} />
			</Routes>
		</main>
	)
}

export default App
