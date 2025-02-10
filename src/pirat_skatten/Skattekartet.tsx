import { Link } from 'react-router-dom'
import img from './Skattekart.png'

function Skattekartet() {
	document.title = 'uu spill - skattekartet'
	return (
		<div>
			<div></div>
			<Link to={'/uuSpill'}>Gå tilbake til skipsvraket</Link>
			<h1>Skattekartet</h1>
			<img
				src={img}
				alt="Skattekart som viser vegen fra skuta, rundt palmetreet og frem til grotten der skatten er."
				width="500"
			></img>
			<Link to={'/uuSpill'}>Gå til skipsvraket</Link>{' '}
			<Link to={'/uuSpill'}>Gå til havet</Link>{' '}
			<Link to={'/uuSpill/papegoyensHemmelighet'}>Gå til grotten</Link>
		</div>
	)
}

export default Skattekartet
