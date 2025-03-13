import { Route, Routes } from 'react-router-dom'
import { basePath, grottensHistorieUrl, havetUrl, hjemmeIgjenUrl, papegoyensHemmelighetUrl, skattekartetUrl, skattenUrl, skipsvraketUrl, startUrl, testUrl } from './constants'
import { SkjermleserKommandoer } from './SkjermleserKommandoer'
import GrottensHistorie from './spillsider/2_GrottensHistorie'
import { Havet } from './spillsider/5_Havet'
import HjemmeIgjen from './spillsider/HjemmeIgjen'
import Papegoyen from './spillsider/6_Papegoyen'
import Skattekartet from './spillsider/3_Skattekartet'
import Skatten from './spillsider/7_Skatten'
import { Skipsvraket } from './spillsider/4_Skipsvraket'
import Start from './spillsider/1_Start'
import { TestSide } from './TestSide'
import { Velkomstside } from './Velkomstside'

/**
 * TODO neste gang:
 * Si ifra på forhånd at man må ha med ørepropper / headset, norsk OS?
 * Si at det kan være lurt å skru av notifikasjoner / lukke teams / slack osv.
 *
 * Lag engelsk side til neste gang
 */

function App() {
	return (
		<div
			className="grid"
			style={{
				gridTemplateColumns: '18rem auto'
			}}
		>
			<aside>
				<SkjermleserKommandoer />
			</aside>
			<main>
				<Routes>
					<Route path={basePath} element={<Velkomstside />} />
					<Route path={testUrl} element={<TestSide />} />
					<Route path={startUrl} element={<Start />} />
					<Route
						path={grottensHistorieUrl}
						element={<GrottensHistorie />}
					/>
					<Route path={skattekartetUrl} element={<Skattekartet />} />
					<Route
						path={papegoyensHemmelighetUrl}
						element={<Papegoyen />}
					/>

					<Route path={skattenUrl} element={<Skatten />} />
					<Route path={hjemmeIgjenUrl} element={<HjemmeIgjen />} />

					<Route path={havetUrl} element={<Havet />} />
					<Route path={skipsvraketUrl} element={<Skipsvraket />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
