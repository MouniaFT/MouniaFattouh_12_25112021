import Welcome from '../components/Welcome'
import ChartActivity from '../components/ChartActivity'
import { userData } from '../mocks/data-user.js'
import { userActivity } from '../mocks/data-user.js'
import { userAverage } from '../mocks/data-user.js'
import { userPerformance } from '../mocks/data-user.js'
import CardInfos from '../components/CardInfos'
import calories from '../images/calories.svg'
import protein from '../images/protein.svg'
import carbs from '../images/carbs.svg'
import fat from '../images/fat.svg'
import RadarChartPerformance from '../components/ChartRadarPerformance'
import ChartLineAverage from '../components/ChartLineAverage'
import { useState, useEffect, useContext } from 'react'
import {
  fetchUserInfos,
  fetchUserActivity,
  fetchUserAverage,
  fetchUserPerformance,
} from '../service'
import ChartScore from '../components/ChartScore'
import { useParams } from 'react-router-dom'
import { DataMockContext } from '../contexts/DataMockContext'
import { UserInfosFormatter } from '../service'

function Dashboard() {
  const [dataInfos, setDataInfos] = useState([])
  const [dataActivity, setDataActivity] = useState([])
  const [dataAverage, setDataAverage] = useState([])
  const [dataPerformance, setDataPerformance] = useState([])
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isDataMock] = useContext(DataMockContext)

  useEffect(() => {
    // Use Data Mock
    if (isDataMock) {
      const formatter = new UserInfosFormatter()
      setDataInfos(
        formatter.format(userData.find((user) => user.id === parseInt(id)))
      )
      setDataActivity(userActivity.find((user) => user.userId === parseInt(id)))
      setDataAverage(userAverage.find((user) => user.userId === parseInt(id)))
      setDataPerformance(
        userPerformance.find((user) => user.userId === parseInt(id))
      )
      setIsLoading(false)
      return
    }
    // Use API
    // Fetch data and save it in its state
    const getData = async () => {
      try {
        const resultInfos = await fetchUserInfos(id)
        setDataInfos(resultInfos)
        console.log(resultInfos)

        const resultActivity = await fetchUserActivity(id)
        setDataActivity(resultActivity)

        const resultAverage = await fetchUserAverage(id)
        setDataAverage(resultAverage)

        const resultPerformance = await fetchUserPerformance(id)
        setDataPerformance(resultPerformance)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }
    getData()
  }, [id, isDataMock])

  if (isError) {
    return (
      <div className="container container-main">
        <p className="loading">
          Une erreur s'est produite lors de la requête serveur, veuillez essayer
          avec les données mockées.
        </p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container container-main">
        <p className="loading">Loading...</p>
      </div>
    )
  }
  return (
    <main>
      <div className="container container-main">
        <Welcome user={dataInfos} />
        <div className="charts">
          <div className="charts_content">
            <ChartActivity user={dataActivity} />
            <div className="charts-group">
              <ChartLineAverage user={dataAverage} />
              <RadarChartPerformance user={dataPerformance} />
              <ChartScore user={dataInfos} />
            </div>
          </div>
          <aside>
            <CardInfos
              keyData={dataInfos.calorieCount}
              image={calories}
              unit="kcal"
              type="Calories"
            />
            <CardInfos
              keyData={dataInfos.proteinCount}
              image={protein}
              unit="g"
              type="Proteines"
            />
            <CardInfos
              keyData={dataInfos.carbohydrateCount}
              image={carbs}
              unit="g"
              type="Glucides"
            />
            <CardInfos
              keyData={dataInfos.lipidCount}
              image={fat}
              unit="g"
              type="Lipides"
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
export default Dashboard
