import { useState } from 'react'
import { Link } from 'react-router-dom'

function Papegoyen() {
	document.title = 'uu spill - grotten'

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		setHarRiktigKode(testKode.toUpperCase() === 'KRAKEN')
	}

	return (
		<div>
			<div></div>
			<h1>Grotten</h1>
			Etter å ha funnet grotten ser du en gammel papegøye.
			<h2>Papegøyens hemmelighet</h2>
			<p>
				Papegøyen har en hemmelighet. Du prøver å snakke med den, men
				alt den gjør er å synge sine gamle lister om alt den vet.
			</p>
			<h3>Havet</h3>
			<ul title="Gjenstander i havet">
				<li>Anker</li>
				<li>Støvler</li>
				<li>Sverd</li>
			</ul>
			<h3>Grotten</h3>
			<ul title="Gjenstander i havet">
				<li>Steiner</li>
				<li>Hemmelig dør: KRAKEN</li>
				<li>Skatten</li>
			</ul>
			<h2>Den hemmelige døren</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					brukKode(kode)
				}}
			>
				<label>
					Hva er koden til den hemmelige døren?
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
					Koden er riktig! En stor stein i det møtrkeste hjørnet
					beveger seg.{' '}
					<Link to={'/uuSpill/skatten'}>
						Gå gjennom den hemmelige døren.
					</Link>
				</p>
			)}
			{harRiktigKode === false && (
				<p className="mt-8" role="alert">
					Koden er feil. Hør hva papegøyen synger om og prøv igjen.
				</p>
			)}
		</div>
	)
}

export default Papegoyen
