import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
// import { userData } from '../mocks/data-user.js'

function ChartScore({ user }) {
  // const user = userData.find((user) => user.id === 12)
  return (
    <div className="chart_score chart-group-item">
      <h2 className="chart_score_title">Score</h2>
      <p className="chart_score_percentage">
        {/* <span>{user.todayScore * 100}%</span> */}
        <span>{user?.score * 100}%</span>
        <br />
        de votre objectif
      </p>
      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={85}
          barSize={10}
          // Transform todayScore into a percentage
          // data={[{ todayScore: user.todayScore * 100 }]}
          data={[{ score: user?.score * 100 }]}
          startAngle={80}
          endAngle={430}
          fill="#FF0000"
        >
          <RadialBar dataKey="todayScore" minAngle={15} cornerRadius={50} />
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartScore
