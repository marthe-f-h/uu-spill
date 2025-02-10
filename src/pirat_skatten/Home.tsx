import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
	document.title = 'uu spill - skipsvraket'
	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState(false)

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode === '200')
	}

	return (
		<div>
			<div></div>
			<h1>Piratenes skatt</h1>
			<p>
				Du har nettopp satt anker ved en øde øy. Du står ved Kaptein
				Grønnskjeggs skipsvrak på stranden. Du vet det finnes en skatt
				her på øya, men du må finne den før øya forsvinner i havet.
			</p>
			<h2>Kaptein Grønnskjeggs grotte</h2>
			<p>For lenge siden bodde Kaptein Grønnskjegg i denne grotten. </p>
			<Link to={'/grottens_historie'}>Les mer om grottens historie.</Link>
			<h2>Skattekartet</h2>
			Du finner en kiste med kodelås. Du må finne koden for å åpne kisten.
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
						onChange={(e) => setKode(e.target.value)}
					/>
				</label>
				<button>Prøv koden</button>
			</form>
			{harRiktigKode && (
				<p className="mt-8" role="alert">
					Koden var riktig. Vil du finne skatten?{' '}
					<Link to={'/skattekartet'}>
						Da må du lese skattekartet her.
					</Link>
				</p>
			)}
		</div>
	)
}

export default Home
