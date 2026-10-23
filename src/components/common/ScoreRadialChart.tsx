import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
import { getScoreColor } from "../../utils/getScoreColor"

type ScoreProps = {
  value: number
}

const ScoreRadialChart = ({ value }: ScoreProps) => {
  return (
    <div className="min-w-30 min-h-30 relative bg-linear-90 md:w-40" >

      <RadialBarChart
        data={[{ name: 'score', value, fill: getScoreColor(value || 0) }]}
        width="100%"
        height="100%"
        innerRadius="75%"
        outerRadius="90%"
        startAngle={90}
        endAngle={-270}
        barSize={20}
      >

        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={getScoreColor(value || 0)} floodOpacity="0.9" />
          </filter>
        </defs>

        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />

        <RadialBar
          background={{ fill: '#2a2a3a' }}
          dataKey="value"
          cornerRadius={10}
          style={{ filter: 'url(#shadow)' }}
        />

      </RadialBarChart>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span
          className="text-xl font-semibold md:text-3xl"
          style={{ color: getScoreColor(value || 0) }}
        >
          {value}
        </span>
        <span className="text-[10px] text-gray-400 md:text-xs" dir="ltr">/100</span>
      </div>
    </div>
  )
}

export default ScoreRadialChart