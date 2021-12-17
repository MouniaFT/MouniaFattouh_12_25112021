import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * A component to display the percentage of the average score
 * @param { array } user data of user
 * @returns { React.Component }
 */
function ChartScore({ user }) {
  const score = user?.score || user?.todayScore
  return (
    <div className="chart_score chart-group-item">
      <h2 className="chart_score_title">Score</h2>
      <p className="chart_score_percentage">
        <span>{score * 100}%</span>
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
          data={[{ score: score * 100 }]}
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

ChartScore.prototype = {
  user: PropTypes.array,
}

export default ChartScore
