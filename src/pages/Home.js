import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { DataMockContext } from '../contexts/DataMockContext'

/**
 * Create two radios to choose either API or DATA MOCK and two buttons to choose the user
 * @returns { React.Component}
 */
function Home() {
  const [isDataMock, setIsDataMock] = useContext(DataMockContext)

  return (
    <main className="home">
      <div className="container container-main">
        <div className="radio-btn">
          <label htmlFor="radio-one" className="group">
            API
            <input
              id="radio-one"
              type="radio"
              value="api"
              name="data"
              defaultChecked={!isDataMock}
              onChange={() => setIsDataMock(false)}
            />
            <span className="checkmark"></span>
          </label>

          <label htmlFor="radio-two" className="group">
            MOCK
            <input
              id="radio-two"
              type="radio"
              value="mock"
              name="data"
              defaultChecked={isDataMock}
              onChange={() => setIsDataMock(true)}
            />
            <span className="checkmark"></span>
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
