import { FaBalanceScale } from "react-icons/fa"
import StatCard from "./StatCard"
import { useTranslation } from "react-i18next"

interface LikeToCommentRatioProps {
  likeToCommentRatio: number
  verdict: string
  verdictColor: string
}

const LikeToCommentRation = ({ likeToCommentRatio, verdict, verdictColor }: LikeToCommentRatioProps) => {

  const { t } = useTranslation()

  return (
    <StatCard title={t('likeComment')} discription={`${t('oneCommentPer')} ${likeToCommentRatio} ${t('like')}`} verdict={verdict} verdictColor={verdictColor} icon={<FaBalanceScale className="text-[#d0bcff] text-xl" />}>
      <div style={{ color: verdictColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{likeToCommentRatio}</span>
        <span className="flex items-center text-xs">
          {t('L1C')}
        </span>
      </div>
    </StatCard>
  )
}

export default LikeToCommentRation