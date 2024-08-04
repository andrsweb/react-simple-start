import './Header.scss'
import Menu from '../Menu/Menu'

const Header = () => {
  return (
	<header className='header'>
		<div className="header-wrapper">
			<Menu type={"header-menu"} />
		</div>
	</header>
  )
}

export default Header