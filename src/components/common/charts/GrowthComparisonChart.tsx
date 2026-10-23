import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import SectionProvider from '../SectionProvider';
import { useTranslation } from 'react-i18next';

interface Post {
  id: string;
  shortCode: string;
  type: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  url: string;
  timestamp: string;
}

interface GrowthComparisonChartProps {
  posts: Post[];
}

const GrowthComparisonChart = ({ posts }: GrowthComparisonChartProps) => {

  const { t } = useTranslation()

  // مرتب‌سازی از جدید به قدیم
  const sorted = [...posts].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const latestFive = sorted.slice(0, 5);
  const previousFive = sorted.slice(5, 10);

  const latestAvg = latestFive.length
    ? Math.round(latestFive.reduce((s, p) => s + p.likesCount, 0) / latestFive.length)
    : 0;

  const previousAvg = previousFive.length
    ? Math.round(previousFive.reduce((s, p) => s + p.likesCount, 0) / previousFive.length)
    : 0;

  const data = [
    { name: t('last5Posts'), likes: previousAvg, color: '#666' },
    { name: t('previous5Posts'), likes: latestAvg, color: '#a78bfa' },
  ];

  return (
    <SectionProvider>
      <div>
        <h3 className="text-sm text-gray-400 mb-4">{t('likesGrowthComparison')}</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis
              dataKey="name"
              stroke="#666"
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <YAxis
              stroke="#666"
              tick={{ fontSize: 11, fill: '#888' }}
              tickFormatter={(value) => {
                if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
                if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
                return value.toString();
              }}
            />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #333',
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: '#a78bfa' }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="likes" radius={[10, 10, 0, 0]} barSize={90}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionProvider>
  );
};

export default GrowthComparisonChart;