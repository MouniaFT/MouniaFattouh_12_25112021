import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltipAverage from './CustomToolTipAverage.js'
import PropTypes from 'prop-types'

/**
 * A component to display the duration of the sessions per day
 * @param { array } user data of user
 * @returns { React.Component }
 */
function ChartLineAverage({ user }) {
  /**
   * replace de number with the weekday
   * @param { Number } day number of weekday
   * @returns { String }
   */
  function getWeekDay(day) {
    const week = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    return week[day]
  }
  return (
    <div className="chart_line_average chart-group-item">
      <h2 className="chart_line_average_title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          width={500}
          height={300}
          data={user?.sessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tickFormatter={getWeekDay}
            tick={{
              fill: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
              fontSize: 12,
            }}
          />
          <YAxis type="number" domain={[0, 'dataMax + 60']} hide={true} />
          <Tooltip content={<CustomTooltipAverage />} cursor={false} />
          <defs>
            <linearGradient id="linear">
              <stop offset="30%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgb(255,255,255)" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            stroke={' url(#linear)'}
            strokeWidth={2}
            activeDot={{
              fill: 'white',
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 8,
              r: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartLineAverage.prototype = {
  user: PropTypes.array,
}

export default ChartLineAverage
