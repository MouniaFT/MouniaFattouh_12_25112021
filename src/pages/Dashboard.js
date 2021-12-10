import Welcome from '../components/Welcome'
import ChartActivity from '../components/ChartActivity'
// import { userData } from '../mocks/data-user.js'
import CardInfos from '../components/CardInfos'
import calories from '../images/calories.svg'
import protein from '../images/protein.svg'
import carbs from '../images/carbs.svg'
import fat from '../images/fat.svg'
import RadarChartPerformance from '../components/ChartRadarPerformance'
import ChartLineAverage from '../components/ChartLineAverage'
import { useState, useEffect } from 'react'
import {
  fetchUserInfos,
  fetchUserActivity,
  fetchUserAverage,
  fetchUserPerformance,
} from '../service'
import ChartScore from '../components/ChartScore'

function Dashboard() {
  // const user = userData.find((user) => user.id === 12)
  const [dataInfos, setDataInfos] = useState([])
  const [dataActivity, setDataActivity] = useState([])
  const [dataAverage, setDataAverage] = useState([])
  const [dataPerformance, setDataPerformance] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resultInfos = await fetchUserInfos(18)
      setDataInfos(resultInfos)

      const resultActivity = await fetchUserActivity(18)
      setDataActivity(resultActivity)

      const resultAverage = await fetchUserAverage(18)
      setDataAverage(resultAverage)

      const resultPerformance = await fetchUserPerformance(18)
      setDataPerformance(resultPerformance)
    }
    getData()
  }, [])

  if (dataInfos.length === 0) {
    return <div className="loading">Loading...</div>
  }
  return (
    <main>
      <div className="container container-main">
        {/* <Welcome user={user} /> */}
        <Welcome user={dataInfos} />
        <div className="charts">
          <div className="charts_content">
            {/* <ChartActivity user={user} /> */}
            <ChartActivity user={dataActivity} />
            <div className="charts-group">
              <ChartLineAverage user={dataAverage} />
              <RadarChartPerformance user={dataPerformance} />
              <ChartScore user={dataInfos} />
            </div>
          </div>
          <aside>
            <CardInfos
              keyData={dataInfos.keyData.calorieCount}
              image={calories}
              unit="kcal"
              type="Calories"
            />
            <CardInfos
              keyData={dataInfos.keyData.proteinCount}
              image={protein}
              unit="g"
              type="Proteines"
            />
            <CardInfos
              keyData={dataInfos.keyData.carbohydrateCount}
              image={carbs}
              unit="g"
              type="Glucides"
            />
            <CardInfos
              keyData={dataInfos.keyData.lipidCount}
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
