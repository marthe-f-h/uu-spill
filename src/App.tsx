import { Route, Routes } from 'react-router-dom'
import {
	basePath,
	grottensHistorieUrl,
	havetUrl,
	hjemmeIgjenUrl,
	papegoyensHemmelighetUrl,
	skattekartetUrl,
	skattenUrl,
	skipsvraketUrl,
	startUrl,
	testUrl
} from './constants'
import { SkjermleserKommandoer } from './pirat-skatten-v2/norsk/SkjermleserKommandoer'
import { TestSide } from './pirat-skatten-v2/norsk/TestSide'
import { Velkomstside } from './pirat-skatten-v2/norsk/Velkomstside'
import { useAppContext } from './AppContext'
import { WelcomePage } from './pirat-skatten-v2/engelsk/WelcomePage'
import { ScreenReaderCommands } from './pirat-skatten-v2/engelsk/ScreenReaderCommands'
import { Beginning } from './pirat-skatten-v2/engelsk/spillsider/1_Start'
import Start from './pirat-skatten-v2/norsk/spillsider/1_Start'
import GrottensHistorie from './pirat-skatten-v2/norsk/spillsider/2_GrottensHistorie'
import { CaveHistory } from './pirat-skatten-v2/engelsk/spillsider/2_CaveHistory'
import Skattekartet from './pirat-skatten-v2/norsk/spillsider/3_Skattekartet'
import { TreasureMap } from './pirat-skatten-v2/engelsk/spillsider/3_TreasureMap'
import Papegoyen from './pirat-skatten-v2/norsk/spillsider/6_Papegoyen'
import Skatten from './pirat-skatten-v2/norsk/spillsider/7_Skatten'
import { Skipsvraket } from './pirat-skatten-v2/norsk/spillsider/4_Skipsvraket'
import { Shipwreck } from './pirat-skatten-v2/engelsk/spillsider/4_Shipwreck'
import { Treasure } from './pirat-skatten-v2/engelsk/spillsider/7_Treasure'
import { Parrot } from './pirat-skatten-v2/engelsk/spillsider/6_Parrot'
import { HomeAtLast } from './pirat-skatten-v2/engelsk/spillsider/8_HomeAtLast'
import { Ocean } from './pirat-skatten-v2/engelsk/spillsider/5_Ocean'
import HjemmeIgjen from './pirat-skatten-v2/norsk/spillsider/HjemmeIgjen'
import { Havet } from './pirat-skatten-v2/norsk/spillsider/5_Havet'
import { TestPage } from './pirat-skatten-v2/engelsk/TestPage'

/**
 * TODO neste gang:
 * Si ifra på forhånd at man må ha med ørepropper / headset?
 * Si at det kan være lurt å skru av notifikasjoner / lukke teams / slack osv.
 */

function App() {
	const { selectedLanguage } = useAppContext()
	const norsk = selectedLanguage === 'norsk'

	return (
		<div
			className="grid"
			style={{
				gridTemplateColumns: '18rem auto'
			}}
		>
			<aside>
				{norsk ? <SkjermleserKommandoer /> : <ScreenReaderCommands />}
			</aside>
			<main>
				<Routes>
					<Route
						path={basePath}
						element={norsk ? <Velkomstside /> : <WelcomePage />}
					/>
					<Route
						path={testUrl}
						element={norsk ? <TestSide /> : <TestPage />}
					/>
					<Route
						path={startUrl}
						element={norsk ? <Start /> : <Beginning />}
					/>
					<Route
						path={grottensHistorieUrl}
						element={norsk ? <GrottensHistorie /> : <CaveHistory />}
					/>
					<Route
						path={skattekartetUrl}
						element={norsk ? <Skattekartet /> : <TreasureMap />}
					/>
					<Route
						path={skattenUrl}
						element={norsk ? <Skatten /> : <Treasure />}
					/>
					<Route
						path={papegoyensHemmelighetUrl}
						element={norsk ? <Papegoyen /> : <Parrot />}
					/>
					<Route
						path={hjemmeIgjenUrl}
						element={norsk ? <HjemmeIgjen /> : <HomeAtLast />}
					/>

					<Route
						path={havetUrl}
						element={norsk ? <Havet /> : <Ocean />}
					/>
					<Route
						path={skipsvraketUrl}
						element={norsk ? <Skipsvraket /> : <Shipwreck />}
					/>
				</Routes>
			</main>
		</div>
	)
}

export default App
