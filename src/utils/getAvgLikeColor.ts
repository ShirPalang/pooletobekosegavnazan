import { t } from "i18next"

type AvgLikeResult = {
  color: '#10b981' | '#f59e0b' | '#ef4444'
  verdict: string
}

export const getLikeColor = (avgLikes: number, followers: number): AvgLikeResult => {

  const likeToFollowersRatio = (avgLikes / followers) * 100

  if (likeToFollowersRatio > 5) return { color: "#10b981", verdict: t('verdictExcellent') }
  if (likeToFollowersRatio > 3) return { color: "#10b981", verdict: t('verdictGood') }
  if (likeToFollowersRatio > 1.5) return { color: "#f59e0b", verdict: t('verdictAverage') }

  return { color: '#ef4444', verdict: t('verdictWeak') }

}