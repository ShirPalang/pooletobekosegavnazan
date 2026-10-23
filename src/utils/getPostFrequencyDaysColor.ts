import { t } from "i18next"

type PostFrequencyDaysType = {
  color: '#10b981' | '#f59e0b' | '#ef4444' | '#f97316'
  verdict: string
}


export const getPostFrequencyDaysColor = (postFrequencyDays: number): PostFrequencyDaysType => {
  if (postFrequencyDays <= 2) return { color: '#10b981', verdict: t('veryActive') }
  if (postFrequencyDays <= 4) return { color: '#10b981', verdict: t('active') }
  if (postFrequencyDays <= 7) return { color: '#f59e0b', verdict: t('normal') }
  if (postFrequencyDays <= 14) return { color: '#ef4444', verdict: t('lowActivity') }
  return { color: '#f97316', verdict: t('neverMind') }
}