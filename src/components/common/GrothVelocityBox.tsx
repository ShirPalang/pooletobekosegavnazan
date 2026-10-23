import { PiApproximateEqualsBold, PiChartLineUpBold } from "react-icons/pi"
import StatCard from "./StatCard"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"
import { useTranslation } from "react-i18next"

interface GrothVelocityBoxProps {
  growhRate: number
  verdict: string
  verdictColor: string
}


const GrothVelocityBox = ({ growhRate, verdict, verdictColor }: GrothVelocityBoxProps) => {

  const { t } = useTranslation()

  return (
    <StatCard title={t('growthVelocity')} discription={t('postVsPost')} verdict={verdict} verdictColor={verdictColor} icon={<PiChartLineUpBold className="text-[#d0bcff] text-xl" />}>
      <div style={{ color: verdictColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{growhRate}%</span>
        <span className="flex items-center text-xs">
          {
            verdict === 'یا امام خمینی' && <GoArrowUpRight /> ||
            verdict === 'درحال رشد' && <GoArrowUpRight /> ||
            verdict === 'نوسان داره' && <PiApproximateEqualsBold /> ||
            verdict === 'نوسان داره' && <PiApproximateEqualsBold /> ||
            verdict === 'ضعیفه' && <GoArrowDownRight /> ||
            verdict === 'افت شدید' && <GoArrowDownRight />
          }

          {t('postsDelta')}
        </span>
      </div>
    </StatCard>
  )
}

export default GrothVelocityBox