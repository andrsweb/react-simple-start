import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons' // Import icons from fontAwesome

const Icon = ({ icon }) => {
	return (
		<div className="icon">
			<FontAwesomeIcon icon={faHockeyPuck} />
		</div>
	)
}

export default Icon