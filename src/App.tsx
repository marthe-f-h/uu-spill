import { useState } from 'react'
import img from './gaver.jpeg'

function App() {
  const [navn, setNavn] = useState('')
  const [onsker, setOnsker] = useState('')
  const [harSendtOnskeliste, setHarSendtOnskeliste] = useState(false)

  const sendJuleOnsker = () => {
    setNavn('')
    setOnsker('')
    setHarSendtOnskeliste(true)
  }

  return (
		<main className="sr-only">
			<h1>Nordpolen</h1>
			<h2>Julenissens landsby</h2>
			<h3>Julenissen</h3>
			<h3>Verksted</h3>
			<ul title="Gaver under produskjon i verkstedet">
				<li>Sokker</li>
				<li>Lego togbane</li>
			</ul>
			<img src={img} alt="To gaver under juletreet" width="500"></img>
			<h2>Send et brev til nissen</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					sendJuleOnsker()
				}}
			>
				<label>
					Navnet ditt
					<input
						id="onske"
						type="text"
						value={navn}
						onChange={(e) => setNavn(e.target.value)}
					/>
				</label>
				<label>
					Hva øsnker du deg til jul?
					<input
						id="onske"
						type="text"
						value={onsker}
						onChange={(e) => setOnsker(e.target.value)}
					/>
				</label>
				<button>Send ønskeliste</button>
			</form>
			{harSendtOnskeliste && (
				<div className="mt-8" role="alert">
					Juleøsket ditt ble sendt til julenissen med juleekspressen.
          Det hemmelige svaret er: "juletre", men for å vinne må du enten begynne å synge på en sang om juletre, eller rope tittelen på en sang om juletre.
				</div>
			)}
		</main>
  )
}

export default App
