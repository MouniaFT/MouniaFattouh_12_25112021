import PropTypes from 'prop-types'

// A component to display firstName of user
function Welcome({ user }) {
  return (
    <section className="welcome">
      <h1 className="welcome_title">
        Bonjour
        <span className="title-firstname">{user.userInfos.firstName}</span>
      </h1>
      <p className="welcome_para">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  )
}

Welcome.prototype = {
  user: PropTypes.array,
}

export default Welcome
