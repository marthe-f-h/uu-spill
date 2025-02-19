import { Navigate, Route, Routes } from 'react-router-dom'
import Start from './Start'
import { FiksTittel } from './FiksTittel'
import { FiksIngenting } from './FiksIngenting'
import { FiksTittelFokusWrapper } from './FiksTittelFokusWrapper'
import { FiksTittelFokusHeading } from './FiksTittelFokusHeading'

const basePath = '/uuSpill'

function App() {
	return (
		<main>
			<Routes>
				<Route path={basePath} element={<Start />} />
				<Route
					path={`${basePath}/fiks-ingenting`}
					element={<FiksIngenting />}
				/>
				<Route
					path={`${basePath}/fiks-tittel`}
					element={<FiksTittel />}
				/>
				<Route
					path={`${basePath}/fiks-tittel-fokusw`}
					element={<FiksTittelFokusWrapper />}
				/>
				<Route
					path={`${basePath}/fiks-tittel-fokush1`}
					element={<FiksTittelFokusHeading />}
				/>
				<Route path="*" element={<Navigate replace to={basePath} />} />
			</Routes>
		</main>
	)
}

export default App
