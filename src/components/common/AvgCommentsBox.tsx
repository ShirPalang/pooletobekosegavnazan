import { LiaCommentsSolid } from "react-icons/lia"
import StatCard from "./StatCard"
import { formatNumber } from "../../utils/formatNumber"
import { RiArrowRightDownLine, RiArrowRightLine } from "react-icons/ri"
import { PiApproximateEqualsBold } from "react-icons/pi"
import { useTranslation } from "react-i18next"

interface AvgCommentsProps {
  avgCommentsCount: number
  verdict: string
  verdictColor: string
}

const AvgCommentsBox = ({ avgCommentsCount, verdict, verdictColor }: AvgCommentsProps) => {

  const { t } = useTranslation()

  return (
    <StatCard title={t('avgComments')} discription={t('avg10Posts')} verdict={verdict} verdictColor={verdictColor} icon={<LiaCommentsSolid className="text-[#d0bcff] text-xl" />}>
      <div style={{ color: verdictColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{formatNumber(avgCommentsCount)}</span>
        <span className="flex items-center text-xs">
          {
            verdict === 'عالی' && <RiArrowRightLine /> ||
            verdict === 'متوسط' && <PiApproximateEqualsBold /> ||
            verdict === 'ضعیف' && <RiArrowRightDownLine />
          }

          {t('Cpost')}
        </span>
      </div>
    </StatCard>
  )
}

export default AvgCommentsBox