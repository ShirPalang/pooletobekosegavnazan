import { useParams } from "react-router"
import useAnalyze from "../hooks/useAnalyze"
import { lazy, Suspense } from "react"
const ThinkingOrb = lazy(() => import('thinking-orbs').then(m => ({ default: m.ThinkingOrb })))
import { formatNumber } from "../utils/formatNumber"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import AnimatedEmoji from "../components/common/AnimatedEmoji"
import SectionProvider from "../components/common/SectionProvider"
import ScoreRadialLoader from "../components/common/ScoreRadialLoader"
import { getScoreColor } from "../utils/getScoreColor"
import { getEngagementColor } from "../utils/getEngagementColor"
import EngagmentBox from "../components/common/EngagmentBox"
import AvgLikeBox from "../components/common/AvgLikeBox"
import { getLikeColor } from "../utils/getAvgLikeColor"
import GrothVelocityBox from "../components/common/GrothVelocityBox"
import { getGrowthRateColor } from "../utils/getGrowthRateColor"
import { getAvgCommentsColor } from "../utils/getAvgCommentsColor"
import AvgCommentsBox from "../components/common/AvgCommentsBox"
import LikeToCommentRatio from "../components/common/LikeToCommentRation"
import { getLikeToCommentRatioColor } from "../utils/getLikeToCommentRatioColor"
import { getPostFrequencyDaysColor } from "../utils/getPostFrequencyDaysColor"
import PostFrequencyDays from "../components/common/PostFrequencyDays"
import { useTranslation } from "react-i18next"
const LikesTrendsChart = lazy(() => import("../components/common/charts/LikesTrendsChart"))
const ScoreRadialChart = lazy(() => import('../components/common/ScoreRadialChart'))
const PostTypeChart = lazy(() => import('../components/common/charts/PostTypeChart'))
const GrowthComparisonChart = lazy(() => import('../components/common/charts/GrowthComparisonChart'))
const LikesPerPostChart = lazy(() => import('../components/common/charts/LikesPerPostChart'))

const Analyze = () => {

  const { username } = useParams<{ username: string }>()
  const { data, isLoading, error } = useAnalyze(username!)
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center md:flex-row gap-5 md:gap-3">
          <Suspense fallback={<h1>شاید باورت نشه ولی حتی لودینگم لود نشد</h1>}>
            <ThinkingOrb state="solving" size={64} />
          </Suspense>
          <span className="text-2xl text-[#ffffffec] select-none animate-pulse">{t('pleaseWait')}</span>
        </div>
      </div>
    )
  }


  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center text-gray-400 text-2xl gap-2 font-semibold md:text-3xl">
        {t('sorry')} <img src="/src/assets/emoji/cry.webp" alt="غم" className="w-7 md:w-10" />
      </div>
    )
  }


  const proxiedImage = `https://images.weserv.nl/?url=${encodeURIComponent(
    (data?.profile.profilePicUrl || '').replace(/^https?:\/\//, '')
  )}`;

  const scoreColor = getScoreColor(data?.metrics.score || 0)
  const engagmentResult = getEngagementColor(data?.metrics.engagementRate || 0, data?.profile.followers || 0)
  const avgLikeResault = getLikeColor(data?.metrics.avgLikes || 0, data?.profile.followers || 0)
  const grothRateResault = getGrowthRateColor(data?.metrics.growthRate || 0)
  const avgCommentsResault = getAvgCommentsColor(data?.metrics.avgComments || 0, data?.profile.followers || 0)
  const likeToCommentRationResult = getLikeToCommentRatioColor(data?.metrics.likeToCommentRatio || 0)
  const postFrequencyDaysResault = getPostFrequencyDaysColor(data?.metrics.postFrequencyDays || 0)



  return (
    <div className="w-full lg:w-300">
      <SectionProvider>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-end">

          <div className="flex items-center">
            <img src={proxiedImage} alt="VPN💔"
              className="rounded-full outline-3 outline-violet-400 border-4 border-[#fff0] w-20 h-20 text-white text-sm md:w-30 md:h-30" />

            <div className="ms-8 text-[14px] text-white flex flex-col gap-3.5 md:text-xl">

              <div className="font-semibold flex items-center gap-1 w-fit" dir="ltr">@{data?.profile.username}{data?.profile.verified && <RiVerifiedBadgeFill className="text-blue-400" />}</div>

              <div className="flex gap-8">

                <div className="flex flex-col">
                  <span className="font-semibold">
                    {formatNumber(data?.profile.postsCount ?? 0)}
                  </span>
                  <span className="text-xs">
                    {t('posts')}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold">
                    {formatNumber(data?.profile.followers ?? 0)}
                  </span>
                  <span className="text-xs">
                    {t('followers')}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold">
                    {formatNumber(data?.profile.following ?? 0)}
                  </span>
                  <span className="text-xs">
                    {t('following')}
                  </span>
                </div>

              </div>

            </div>


          </div>

          <div className="mt-7 text-white">
            <p className="font-semibold md:text-xl">{data?.profile.fullName}</p>

            <p className="text-sm text-gray-400 my-1 md:text-base md:my-3">{data?.profile.businessCategory}</p>

            <p className="text-sm md:text-base">{data?.profile.biography}</p>
          </div>

          <div>

            <div className="text-white mt-3">
              <p className="flex gap-1 md:text-lg">
                {t('businessAccount')}
                {
                  data?.profile.isBusinessAccount ? <span className="flex items-center gap-1">{t('yes')} <AnimatedEmoji src="/src/assets/emoji/like.webp" title="خوشحال" /></span>
                    : <span className="flex items-center gap-1">{t('no')} <AnimatedEmoji src="/src/assets/emoji/brokenheart.webp" title="غم" /></span>
                }
              </p>
            </div>

          </div>
        </div>

      </SectionProvider>


      <SectionProvider>
        <div className="flex h-full items-center">

          <Suspense fallback={<ScoreRadialLoader />}>
            <ScoreRadialChart value={data?.metrics.score || 0} />
          </Suspense>

          <div className="my-4 ms-2 text-sm flex flex-col justify-center gap-3">
            <p className='font-bold px-3 rounded-full py-0.5 w-fit'
              style={{ backgroundColor: `${scoreColor}44`, color: scoreColor }}>
              {
                data?.metrics.score && data?.metrics.score >= 80 && t('excellent') ||
                data?.metrics.score && data?.metrics.score >= 60 && t('good') ||
                data?.metrics.score && data?.metrics.score >= 40 && t('average') ||
                data?.metrics.score && data?.metrics.score < 40 && t('weak')
              }
            </p>

            <p className="text-base md:text-xl">
              {
                data?.metrics.score && data?.metrics.score >= 80 && t('excellentVerdict') ||
                data?.metrics.score && data?.metrics.score >= 60 && t('goodVerdict') ||
                data?.metrics.score && data?.metrics.score >= 40 && t('averageVerdict') ||
                data?.metrics.score && data?.metrics.score < 40 && t('weakVerdict')
              }
            </p>
          </div>
        </div>
      </SectionProvider>

      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
        <EngagmentBox engagementRate={data?.metrics.engagementRate || 0} engagmentResultColor={engagmentResult.color} engagmentResultVerdict={engagmentResult.verdict} />
        <AvgLikeBox avgLikesCount={data?.metrics.avgLikes || 0} verdict={avgLikeResault.verdict} verdictColor={avgLikeResault.color} />
        <AvgCommentsBox avgCommentsCount={data?.metrics.avgComments || 0} verdict={avgCommentsResault.verdict} verdictColor={avgCommentsResault.color} />
        <GrothVelocityBox growhRate={data?.metrics.growthRate || 0} verdict={grothRateResault.verdict} verdictColor={grothRateResault.color} />
        <LikeToCommentRatio likeToCommentRatio={data?.metrics.likeToCommentRatio || 0} verdict={likeToCommentRationResult.verdict} verdictColor={likeToCommentRationResult.color} />
        <PostFrequencyDays postFrequencyDays={data?.metrics.postFrequencyDays || 0} verdict={postFrequencyDaysResault.verdict} verdictColor={postFrequencyDaysResault.color} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <Suspense fallback={<h1 className="w-full h-62.5 flex justify-center items-center">پلیز ویت</h1>}>
          <LikesTrendsChart posts={data?.posts || []} />
        </Suspense>

        <Suspense fallback={<h1 className="w-full h-62.5 flex justify-center items-center">پلیز ویت</h1>}>
          <PostTypeChart posts={data?.posts || []} />
        </Suspense>

        <Suspense fallback={<h1 className="w-full h-62.5 flex justify-center items-center">پلیز ویت</h1>}>
          <GrowthComparisonChart posts={data?.posts || []} />
        </Suspense>

        <Suspense fallback={<h1 className="w-full h-62.5 flex justify-center items-center">پلیز ویت</h1>}>
          <LikesPerPostChart posts={data?.posts || []} />
        </Suspense>
      </div>

      <SectionProvider>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl md:text-2xl">{t('donate')}</h1>
          <p className="text-sm md:text-base">
            {t('supportMeLink')}
            <a href="https://hamibash.com/shirpalang" className="text-purple-300"
              target="_blank"> {t('donateLink')}</a>
          </p>
          <h1 className="text-xl md:text-2xl">{t('anyComments')}</h1>
          <p className="text-sm md:text-base">{t('contactFeedback')}</p>
        </div>
      </SectionProvider>
      <br />
    </div >
  )
}

export default Analyze