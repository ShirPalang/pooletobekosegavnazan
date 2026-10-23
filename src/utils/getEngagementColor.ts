import { t } from "i18next";

type EngagementResult = {
  color: '#10b981' | '#f59e0b' | '#ef4444'
  verdict: string
}

export const getEngagementColor = (rate: number, followers: number): EngagementResult => {

  if (followers >= 1_000_000) {
    if (rate >= 1.5) return { color: '#10b981', verdict: t('verdictExcellent') }
    if (rate >= 0.5) return { color: '#f59e0b', verdict: t('verdictAverage') }
    if (rate < 0.5) return { color: '#ef4444', verdict: t('verdictWeak') }
  }

  if (followers >= 500_000) {
    if (rate >= 2) return { color: '#10b981', verdict: t('verdictExcellent') }
    if (rate >= 1) return { color: '#f59e0b', verdict: t('verdictAverage') }
    if (rate < 1) return { color: '#ef4444', verdict: t('verdictWeak') }
  }

  if (followers >= 100_000) {
    if (rate >= 3) return { color: '#10b981', verdict: t('verdictExcellent') }
    if (rate >= 1.5) return { color: '#f59e0b', verdict: t('verdictAverage') }
    if (rate < 1.5) return { color: '#ef4444', verdict: t('verdictWeak') }
  }

  if (followers >= 10_000) {
    if (rate >= 4) return { color: '#10b981', verdict: t('verdictExcellent') }
    if (rate >= 2) return { color: '#f59e0b', verdict: t('verdictAverage') }
    if (rate < 2) return { color: '#ef4444', verdict: t('verdictWeak') }
  }

  if (rate >= 8) return { color: '#10b981', verdict: t('verdictExcellent') }
  if (rate >= 4) return { color: '#f59e0b', verdict: t('verdictAverage') }
  return { color: '#ef4444', verdict: t('verdictWeak') }

};