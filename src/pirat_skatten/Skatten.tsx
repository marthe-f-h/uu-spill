import { useState } from 'react'
import { Link } from 'react-router-dom'

function Skatten() {
	document.title = 'uu spill - skatten'
	const [kode, setKode] = useState<boolean[]>([false, false, false, false])
	const [harRiktigKode, setHarRiktigKode] = useState(false)

	const oppdaterKode = (index: number) => {
		const nyKode = [...kode]
		nyKode[index] = !nyKode[index]
		setKode(nyKode)
	}

	const brukKode = () => {
		setHarRiktigKode(kode[1] && kode[3])
	}

	return (
		<div>
			<h1>Skatten</h1>
			Du ser en stor kiste, men den er låst fast til en stor stein.
			<h2>Hulemalerier</h2>
			<p>
				På veggen ser du gamle hulemalerier. De viser en skattkiste og
				en kode.
			</p>
			<ul title="Hulemalerier">
				<li>Skattekiste</li>
				<li>42</li>
			</ul>
			<h2>Skattekisten</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					brukKode()
				}}
			>
				<fieldset>
					<legend>Velg tallene i koden</legend>
					<div>
						<input
							type="checkbox"
							id="c1"
							name="1"
							checked={kode[0]}
							onChange={() => oppdaterKode(0)}
						/>
						<label htmlFor="c1">1</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="c2"
							name="2"
							checked={kode[1]}
							onChange={() => oppdaterKode(1)}
						/>
						<label htmlFor="c2">2</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="c3"
							name="3"
							checked={kode[2]}
							onChange={() => oppdaterKode(2)}
						/>
						<label htmlFor="c3">3</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="c4"
							name="4"
							checked={kode[3]}
							onChange={() => oppdaterKode(3)}
						/>
						<label htmlFor="c4">4</label>
					</div>
				</fieldset>
				<button>Prøv koden</button>
			</form>
			{harRiktigKode && (
				<p className="mt-8" role="alert">
					Koden var riktig! Skattekisten er løs.
					<Link to={'/hjem'}>Dra hjem med skatten.</Link>
				</p>
			)}
		</div>
	)
}

export default Skatten
