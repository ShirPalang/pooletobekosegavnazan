import { FaRegClock } from "react-icons/fa"
import StatCard from "./StatCard"
import { useTranslation } from "react-i18next"

interface PostFrequencyDaysProps {
  postFrequencyDays: number
  verdict: string
  verdictColor: string
}

const PostFrequencyDays = ({ postFrequencyDays, verdict, verdictColor }: PostFrequencyDaysProps) => {

  const { t } = useTranslation()

  return (
    <StatCard title={t('PostFrequency')} discription={`${t('avgInterval')} ${postFrequencyDays}`} verdictColor={verdictColor} verdict={verdict} icon={<FaRegClock className="text-[#d0bcff] text-xl" />}>
      <div style={{ color: verdictColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{postFrequencyDays}</span>
        <span className="flex items-center text-xs">
          {t('PostFrequencyDays')}
        </span>
      </div>
    </StatCard>
  )
}

export default PostFrequencyDays