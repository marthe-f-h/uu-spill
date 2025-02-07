import { Link } from 'react-router-dom'
import img from './Skattekart.png'

function Skattekartet() {
	document.title = 'uu spill - skattekartet'
	return (
		<div>
			<Link to={'/uuSpillPiratskatten'}>Gå tilbake til skipsvraket</Link>
			<h1>Julenissens favoritter</h1>
			<img
				src={img}
				alt="Skattekart som viser vegen fra skuta, rundt palmetreet og frem til grotten der skatten er."
				width="500"
			></img>
			<Link to={'/uuSpillPiratskatten'}>Gå til skipsvraket</Link>
			<Link to={'/uuSpillPiratskatten'}>Gå til havet</Link>
			<Link to={'/papegoyensHemmelighet'}>Gå til grotten</Link>
		</div>
	)
}

export default Skattekartet
