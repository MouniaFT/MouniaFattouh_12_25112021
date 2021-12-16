import PropTypes from 'prop-types'

// A component to display a card infos of calories, proteins, carbs or lipids data
function CardInfos({ image, keyData, unit, type }) {
  return (
    <div className="card_infos">
      <div className="card_infos_icon">
        <img src={image} alt="icon" />
      </div>
      <div className="card_infos_text">
        <p className="card_infos_qte">
          {keyData}
          {unit}
        </p>
        <p className="card_infos_type">{type}</p>
      </div>
    </div>
  )
}

CardInfos.prototype = {
  image: PropTypes.string,
  keyData: PropTypes.number,
  unit: PropTypes.string,
  type: PropTypes.string,
}

export default CardInfos
