import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'

function RadarChartPerformance({ user }) {
  return (
    <div className="chart_radar_performance chart-group-item">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={user?.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            tick={{ fill: '#FFFFFF', fontSize: '12px', fontWeight: 500 }}
            fill="white"
            dataKey="kind"
            // replace kind number with category kind
            tickFormatter={(kind) => user?.kind[kind]}
          />
          <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartPerformance
