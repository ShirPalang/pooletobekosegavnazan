import { t } from "i18next"

interface LikeToCommentRationResult {
  color: '#10b981' | '#f59e0b' | '#f97316' | '#ef4444'
  verdict: string
}


export const getLikeToCommentRatioColor = (likeToCommentRatio: number): LikeToCommentRationResult => {
  if (likeToCommentRatio < 50) return { color: '#10b981', verdict: t('verdictExcellent') }
  if (likeToCommentRatio < 100) return { color: '#10b981', verdict: t('verdictGood') }
  if (likeToCommentRatio < 150) return { color: '#f59e0b', verdict: t('verdictAverage') }
  if (likeToCommentRatio < 250) return { color: '#f97316', verdict: t('verdictWeak') }
  return { color: '#ef4444', verdict: t('disaster') }
}