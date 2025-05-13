import { Route, Routes } from 'react-router-dom'
import Start from './Start'
import GrottensHistorie from './GrottensHistorie'
import Skattekartet from './Skattekartet'
import Papegoyen from './Papegoyen'
import Skatten from './Skatten'
import HjemmeIgjen from './HjemmeIgjen'

const basePath = '/uu-spill'

/**
 * TODO neste gang:
 * Faktisk linke til en ny siden når vi er på skattekartet. Havet: Her var det bare hav, gå tilbake.
 * Kanskje ha t banner på toppen av siden med kommandoen man trenger?
 * Ha en øvelseside med lenker og knapper så man kan teste i starten litt mer.
 * Si ifra på forhånd at man må ha med ørepropper / headset, norsk OS?
 * Printe ut ark med kommandoer
 * Si at det kan være lurt å skru av notifikasjoner / lukke teams / slack osv.
 * Lag engelsk side til neste gang
 */

function App() {
	return (
		<main>
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
