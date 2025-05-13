import { Navigate, Route, Routes } from 'react-router-dom'
import { FiksIngenting } from './FiksIngenting'
import { FiksTittel } from './FiksTittel'
import { FiksTittelFokusHeading } from './FiksTittelFokusHeading'
import { FiksTittelFokusWrapper } from './FiksTittelFokusWrapper'
import Start from './Start'

const basePath = '/uu-spill'

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
