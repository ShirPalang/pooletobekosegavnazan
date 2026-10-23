import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri"
import { PiApproximateEqualsBold } from "react-icons/pi"
import StatCard from "./StatCard"
import { MdEqualizer } from "react-icons/md"
import { useTranslation } from "react-i18next"

interface EngagmentBoxProps {
  engagmentResultColor: string
  engagmentResultVerdict: string
  engagementRate: number
}

const EngagmentBox = ({ engagmentResultColor, engagmentResultVerdict, engagementRate }: EngagmentBoxProps) => {

  const { t } = useTranslation()

  return (
    <StatCard title={t('engagementRate')} verdict={engagmentResultVerdict} verdictColor={engagmentResultColor}
      discription={`${t('outof100followers')} ${engagementRate} ${t('engage')}`}
      icon={<MdEqualizer className="text-[#d0bcff] text-xl" />}>

      <div style={{ color: engagmentResultColor }}
        className="flex items-end gap-1 my-4">
        <span className="text-4xl font-semibold"
        >{engagementRate}%</span>
        <span className="flex items-center text-xs">
          {
            engagmentResultVerdict === 'عالی' && <RiArrowUpLine /> ||
            engagmentResultVerdict === 'متوسط' && <PiApproximateEqualsBold /> ||
            engagmentResultVerdict === 'ضعیف' && <RiArrowDownLine />
          }

          {t('vsBenchmark')}
        </span>
      </div>

    </StatCard>
  )
}

export default EngagmentBox

