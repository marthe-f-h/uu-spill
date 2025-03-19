import { Route, Routes } from 'react-router-dom'
import {
	basePath,
	grottensHistorieUrl,
	havetUrl,
	hjemmeIgjenUrl,
	grottenUrl,
	skattekartetUrl,
	skattenUrl,
	skipsvraketUrl,
	startUrl,
	testUrl
} from './constants'
import { SkjermleserKommandoer } from './norsk/SkjermleserKommandoer'
import { TestSide } from './norsk/TestSide'
import { Velkomstside } from './norsk/Velkomstside'
import { useAppContext } from './AppContext'
import { WelcomePage } from './engelsk/WelcomePage'
import { ScreenReaderCommands } from './engelsk/ScreenReaderCommands'
import { Beginning } from './engelsk/spillsider/1_Start'
import Start from './norsk/spillsider/1_Start'
import GrottensHistorie from './norsk/spillsider/2_GrottensHistorie'
import { CaveHistory } from './engelsk/spillsider/2_CaveHistory'
import Skattekartet from './norsk/spillsider/3_Skattekartet'
import { TreasureMap } from './engelsk/spillsider/3_TreasureMap'
import Papegoyen from './norsk/spillsider/6_Papegoyen'
import Skatten from './norsk/spillsider/7_Skatten'
import { Skipsvraket } from './norsk/spillsider/4_Skipsvraket'
import { Shipwreck } from './engelsk/spillsider/4_Shipwreck'
import { Treasure } from './engelsk/spillsider/7_Treasure'
import { Parrot } from './engelsk/spillsider/6_Parrot'
import { HomeAtLast } from './engelsk/spillsider/8_HomeAtLast'
import { Ocean } from './engelsk/spillsider/5_Ocean'
import HjemmeIgjen from './norsk/spillsider/8_HjemmeIgjen'
import { Havet } from './norsk/spillsider/5_Havet'
import { TestPage } from './engelsk/TestPage'

function App() {
	const { selectedLanguage } = useAppContext()
	const norsk = selectedLanguage === 'norsk'

	return (
		<div
			className={`grid ${
				selectedLanguage === 'norsk' ? 'bg-[#004367]' : 'bg-[#666E00]'
			} `}
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
						path={grottenUrl}
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
