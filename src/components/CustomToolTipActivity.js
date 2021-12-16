import PropTypes from 'prop-types'

function CustomToolTipActivity({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
        <p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

CustomToolTipActivity.prototype = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

export default CustomToolTipActivity
