import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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

interface PostTypeChartProps {
  posts: Post[];
}

const COLORS: Record<string, string> = {
  Video: '#a78bfa',
  Image: '#10b981',
  Sidecar: '#f59e0b',
};

const PostTypeChart = ({ posts }: PostTypeChartProps) => {

  const { t } = useTranslation()

  const LABELS: Record<string, string> = {
    Video: t('Video'),
    Image: t('Image'),
    Sidecar: t('Sidecar'),
  };


  const counts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.type] = (acc[post.type] || 0) + 1;
    return acc;
  }, {});

  const total = posts.length;

  const data = Object.entries(counts).map(([type, count]) => ({
    name: LABELS[type] || type,
    value: count,
    color: COLORS[type] || '#666',
  }));

  // پیدا کردن بیشترین نوع پست
  const topEntry = [...data].sort((a, b) => b.value - a.value)[0];
  const topPercent = topEntry ? Math.round((topEntry.value / total) * 100) : 0;

  return (
    <SectionProvider>
      <div>
        <h3 className="text-sm text-gray-400 mb-4">{t('postTypesDistribution')}</h3>
        <div className="relative">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #333',
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: 12, color: '#888' }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>

          {/* متن وسط دونات */}
          {topEntry && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span
                className="text-2xl font-bold"
                style={{ color: topEntry.color }}
              >
                {topPercent}%
              </span>
              <span className="text-xs text-gray-400 mt-1">{topEntry.name}</span>
            </div>
          )}
        </div>
      </div>
    </SectionProvider>
  );
};

export default PostTypeChart;