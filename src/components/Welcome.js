function Welcome({ user }) {
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
