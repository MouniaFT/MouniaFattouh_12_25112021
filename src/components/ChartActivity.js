import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import CustomToolTipActivity from './CustomToolTipActivity.js'
import PropTypes from 'prop-types'

function ChartActivity({ user }) {
  /**
   * format the date to display only the day number
   * @param { String } day
   * @returns { Number }
   */
  function getDayFromDate(day) {
    const date = new Date(day)
    return date.getDate()
  }

  return (
    <div className="chart_activity">
      <h2 className="chart_activity_title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={user?.sessions}
          margin={{ top: 70, right: 25, left: 25, bottom: 25 }}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dy={15}
            dataKey="day"
            tickLine={false}
            stroke="#9B9EAC"
            tickFormatter={getDayFromDate}
          />
          <YAxis
            tickCount={3}
            axisLine={false}
            tickLine={false}
            orientation="right"
            stroke="#9B9EAC"
          />
          <Tooltip
            content={<CustomToolTipActivity />}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Legend
            style={{ color: '#74798C' }}
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            align="right"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartActivity.prototype = {
  user: PropTypes.array,
}
export default ChartActivity
