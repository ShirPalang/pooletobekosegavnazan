import { t } from "i18next"

interface AvgCommentsResult {
  color: '#10b981' | '#f59e0b' | '#ef4444'
  verdict: string
}


export const getAvgCommentsColor = (avgComments: number, followers: number): AvgCommentsResult => {

  const commentsToFollowersRation = (avgComments / followers) * 100

  if (commentsToFollowersRation > 0.5) return { color: "#10b981", verdict: t('verdictExcellent') }
  if (commentsToFollowersRation > 0.1) return { color: "#f59e0b", verdict: t('verdictAverage') }
  
  return { color: "#ef4444", verdict: t('verdictWeak') }

}