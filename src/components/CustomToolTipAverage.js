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

export default CustomTooltipAverage
