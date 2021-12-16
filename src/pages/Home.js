import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataMockContext } from '../contexts/DataMockContext'

function Home() {
  const [isDataMock, setIsDataMock] = useContext(DataMockContext)

  return (
    <main className="home">
      <div className="container container-main">
        <div className="radio-btn">
          <label for="radio-one" className="group">
            API
            <input
              id="radio-one"
              type="radio"
              value="api"
              name="data"
              defaultChecked={!isDataMock}
              onChange={() => setIsDataMock(false)}
            />
            <span class="checkmark"></span>
          </label>

          <label for="radio-two" className="group">
            MOCK
            <input
              id="radio-two"
              type="radio"
              value="mock"
              name="data"
              onChange={() => setIsDataMock(true)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="link-user">
          <Link to={'/user/12'}>
            <button className="link-user-btn">utilisateur 12</button>
          </Link>
          <Link to={'/user/18'}>
            <button className="link-user-btn">utilisateur 18</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home
