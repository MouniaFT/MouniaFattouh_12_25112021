import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import { userPerformance } from '../mocks/data-user.js'

function RadarChartPerformance() {
  const user = userPerformance.find((user) => user.userId === 12)

  return (
    <div className="chart_radar_performance">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={user.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            tick={{ fill: '#FFFFFF', fontSize: '12px', fontWeight: 500 }}
            fill="white"
            dataKey={user.kind[0]}
          />
          <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartPerformance
