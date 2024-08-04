import './Footer.scss'
import Menu from '../Menu/Menu'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer-wrapper">
				<Menu type={"footer-menu"} />
			</div>
		</footer>
	)
}

export default Footer