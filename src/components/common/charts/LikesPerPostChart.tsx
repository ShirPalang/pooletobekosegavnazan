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

interface LikesPerPostChartProps {
  posts: Post[];
}

const LikesPerPostChart = ({ posts }: LikesPerPostChartProps) => {

  const { t } = useTranslation()

  // مرتب‌سازی از قدیم به جدید تا میله‌ها از چپ به راست روند داشته باشن
  const sorted = [...posts].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const maxLikes = Math.max(...sorted.map((p) => p.likesCount));

  const data = sorted.map((post, index) => ({
    name: `${t('post')} ${index + 1}`,
    likes: post.likesCount,
    isTop: post.likesCount === maxLikes,
    shortCode: post.shortCode,
  }));

  return (
    <SectionProvider>
      <div>
        <h3 className="text-sm text-gray-400 mb-4">{t('likesPerPost')}</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis
              dataKey="name"
              stroke="#666"
              tick={{ fontSize: 10, fill: '#888' }}
              interval={0}
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
            <Bar dataKey="likes" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.isTop ? '#f59e0b' : '#a78bfa'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionProvider>
  );
};

export default LikesPerPostChart;