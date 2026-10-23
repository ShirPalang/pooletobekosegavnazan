import { t } from "i18next"

type GrothRateResult = {
  color: '#10b981' | '#f59e0b' | '#ef4444' | '#f97316'
  verdict: string
}

export const getGrowthRateColor = (growhRate: number): GrothRateResult => {

  if (growhRate > 20) return { verdict: t('jesusChrist'), color: '#10b981' }
  if (growhRate > 0) return { verdict: t('growing'), color: '#10b981' }
  if (growhRate > -10) return { verdict: t('fluctuating'), color: '#f59e0b' }
  if (growhRate > -20) return { verdict: t('verdictWeak'), color: '#f97316' }

  return { verdict: t('steepDecline'), color: '#ef4444' }
}