import Welcome from '../components/Welcome'
import ChartActivity from '../components/ChartActivity'
import { userData } from '../mocks/data-user.js'
import CardInfos from '../components/CardInfos'
import calories from '../images/calories.svg'
import protein from '../images/protein.svg'
import carbs from '../images/carbs.svg'
import fat from '../images/fat.svg'
import RadarChartPerformance from '../components/ChartRadarPerformance'
import ChartLineAverage from '../components/ChartLineAverage'

function Dashboard() {
  const user = userData.find((user) => user.id === 12)

  return (
    <main>
      <div className="container container-main">
        <Welcome user={user} />
        <div className="charts">
          <div className="charts_content">
            <ChartActivity user={user} />
            <div className="charts-group">
              <RadarChartPerformance />
              <ChartLineAverage />
            </div>
          </div>
          <aside>
            <CardInfos
              keyData={user.keyData.calorieCount}
              image={calories}
              unit="kcal"
              type="Calories"
            />
            <CardInfos
              keyData={user.keyData.proteinCount}
              image={protein}
              unit="g"
              type="Proteines"
            />
            <CardInfos
              keyData={user.keyData.carbohydrateCount}
              image={carbs}
              unit="g"
              type="Glucides"
            />
            <CardInfos
              keyData={user.keyData.lipidCount}
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
