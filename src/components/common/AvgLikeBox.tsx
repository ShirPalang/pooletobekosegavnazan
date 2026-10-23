import { AiOutlineLike } from "react-icons/ai"
import StatCard from "./StatCard"
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri"
import { PiApproximateEqualsBold } from "react-icons/pi"
import { formatNumber } from "../../utils/formatNumber"
import { useTranslation } from "react-i18next"

interface AvgLikeBoxProps {
  avgLikesCount: number
  verdict: string
  verdictColor: string
}

const AvgLikeBox = ({ avgLikesCount, verdict, verdictColor }: AvgLikeBoxProps) => {

  const { t } = useTranslation()

  return (
    <StatCard discription={t('avg10Posts')} icon={<AiOutlineLike className="text-[#d0bcff] text-xl" />} verdict={verdict} title={t('avgLike')} verdictColor={verdictColor}>

      <div style={{ color: verdictColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{formatNumber(avgLikesCount)}</span>
        <span className="flex items-center text-xs">
          {
            verdict === 'عالی' && <RiArrowUpLine /> ||
            verdict === 'متوسط' && <PiApproximateEqualsBold /> ||
            verdict === 'ضعیف' && <RiArrowDownLine /> ||
            verdict === 'خوب' && <RiArrowDownLine />
          }

          {t('Lpost')}
        </span>
      </div>
    </StatCard>
  )
}

export default AvgLikeBox