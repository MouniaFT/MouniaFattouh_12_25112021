import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { userAverage } from '../mocks/data-user.js'
import CustomTooltipAverage from './CustomToolTipAverage.js'

function ChartLineAverage() {
  const user = userAverage.find((user) => user.userId === 12)

  /**
   * replace de number with the weekday
   * @param { Number } day number of weekday
   * @returns { String }
   */
  function getWeekDay(day) {
    const week = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'S' }
    return week[day]
  }

  return (
    <div className="chart_line_average">
      <h2 className="chart_line_average_title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          width={500}
          height={300}
          data={user.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={getWeekDay}
            tick={{
              fill: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
              fontSize: 12,
            }}
          />
          <Tooltip
            content={<CustomTooltipAverage />}
            cursor={{
              stroke: 'rgba(0, 0, 0, 0.1)',
              strokeWidth: 79,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            activeDot={{
              fill: 'white',
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 8,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartLineAverage
