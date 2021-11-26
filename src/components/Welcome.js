import { userData } from '../mocks/data-user.js'

function Welcome() {
  const user = userData.find((user) => user.id === 12)

  return (
    <section className="welcome">
      <div className="container">
        <h1 className="welcome_title">
          Bonjour
          <span className="title-firstname">{user?.userInfos.firstName}</span>
        </h1>
        <p className="welcome_para">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </section>
  )
}

export default Welcome
