import './Menu.scss'

const Menu = ({ type }) => {
	return (
		<nav className={`menu ${type}`}>
			<ul className="menu-list">
				<li className="menu-item"></li>
			</ul>
		</nav>
	)
}

export default Menu