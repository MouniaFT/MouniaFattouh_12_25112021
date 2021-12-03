import Welcome from '../components/Welcome'
import ChartActivity from '../components/ChartActivity'
import { userData } from '../mocks/data-user.js'
import CardInfos from '../components/CardInfos'
import calories from '../images/calories.svg'
import protein from '../images/protein.svg'
import carbs from '../images/carbs.svg'
import fat from '../images/fat.svg'
import RadarChartPerformance from '../components/ChartRadarPerformance'

function Dashboard() {
  const user = userData.find((user) => user.id === 12)

  return (
    <main>
      <div className="container">
        <Welcome user={user} />
        <div className="charts">
          <div>
            <ChartActivity user={user} />
            <RadarChartPerformance />
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
