import Welcome from '../components/Welcome'
import ChartActivity from '../components/ChartActivity'
import { userData } from '../mocks/data-user.js'

function Dashboard() {
  const user = userData.find((user) => user.id === 12)

  return (
    <>
      <Welcome user={user} />
      <div className="container">
        <ChartActivity />
      </div>
    </>
  )
}
export default Dashboard
