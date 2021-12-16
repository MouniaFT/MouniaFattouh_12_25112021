import PropTypes from 'prop-types'

// A component to display the tooltip on hover in chartLineAverage
function CustomTooltipAverage({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_average">
        <p className="custom_tooltip_average_text">{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

CustomTooltipAverage.prototype = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

export default CustomTooltipAverage
