import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <div className="container container-main">
        <Link to={'/user/12'}>
          <button>utilisateur 12</button>
        </Link>
        <Link to={'/user/18'}>
          <button>utilisateur 18</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
