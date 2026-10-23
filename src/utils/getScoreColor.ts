export const getScoreColor = (score: number): string => {
  if (score >= 80) return '#10b981'; // green
  if (score >= 60) return '#3b82f6'; // blue
  if (score >= 40) return '#f59e0b'; // yellow
  return '#ef4444';                  // red
};