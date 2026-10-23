import {
  ComposedChart,
  Area,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
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

interface LikesTrendsChartProps {
  posts: Post[];
}

const LikesTrendsChart = ({ posts }: LikesTrendsChartProps) => {

  const { t } = useTranslation()


  const chartData = [...posts].reverse().map((post, index) => ({
    name: `${t('post')} ${index + 1}`,
    likes: post.likesCount,
  }));

  return (
    <SectionProvider>
      <div>
        <h3 className="text-sm text-gray-400 mb-4">{t('last10PostsLikeTrend')}</h3>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="likesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis
              dataKey="name"
              stroke="#666"
              tick={{ fontSize: 11, fill: '#888' }}
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
              contentStyle={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #333',
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: '#a78bfa' }}
            />
            <Area
              type="monotone"
              dataKey="likes"
              stroke="none"
              fill="url(#likesGradient)"
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="likes"
              stroke="#a78bfa"
              strokeWidth={2}
              dot={{ fill: '#a78bfa', r: 4 }}
              activeDot={{ r: 6, fill: '#c4b5fd' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </SectionProvider>
  );
};

export default LikesTrendsChart;