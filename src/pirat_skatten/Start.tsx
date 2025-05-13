import { useState } from 'react'
import { Link } from 'react-router-dom'

function Start() {
	document.title = 'uu spill - skipsvraket'
	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode === '200')
	}

	return (
		<div>
			<div>
				<h1 className="text-3xl mb-8">Piratenes skatt</h1>
				<p className="mb-4">
					Du har nettopp satt anker ved en øde øy. Du står ved Kaptein
					Grønnskjeggs skipsvrak på stranden. Du vet det finnes en
					skatt her på øya, men du må finne den før øya forsvinner i
					havet.
				</p>
				<h2 className="text-2xl mb-2">Kaptein Grønnskjeggs grotte</h2>
				<p>
					For lenge siden bodde Kaptein Grønnskjegg i denne grotten.{' '}
				</p>
				<Link to={'/uu-spill/grottens_historie'}>
					Les mer om grottens historie.
				</Link>
				<h2 className="mt-6 mb-2 text-2xl">Skattekartet</h2>
				<p className="mb-2">
					Du finner en kiste med kodelås. Du må finne koden for å åpne
					kisten.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<label>
						Hvor mange år siden fant Kaptein Grønnskjegg grotten?
						<input
							id="onske"
							type="text"
							value={kode}
							className="border m-2"
							onChange={(e) => setKode(e.target.value)}
						/>
					</label>
					<button className="cursor-pointer border pl-2 pr-2 bg-amber-50 text-black">
						Prøv koden
					</button>
				</form>
			</div>

			{harRiktigKode && (
				<p className="mt-8" role="alert">
					Koden er riktig! Vil du finne skatten?{' '}
					<Link to={'/uu-spill/skattekartet'}>
						Da må du lese skattekartet her.
					</Link>
				</p>
			)}
			{harRiktigKode === false && (
				<p className="mt-8" role="alert">
					Koden er feil. Lær mer om grottens historie og prøv igjen.
				</p>
			)}
		</div>
	)
}

export default Start
