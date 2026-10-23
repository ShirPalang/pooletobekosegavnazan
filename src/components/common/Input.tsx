import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { useLanguageStore } from '../../store/LangStore'

const Input = () => {

  const [usernameInput, setUsernameInput] = useState('')
  const navigate = useNavigate()
  const { language } = useLanguageStore()

  const { t } = useTranslation()

  const handleSubmit = () => {
    navigate(`/analyze/${usernameInput}`)
  }

  return (
    <div className="w-full text-lg text-white p-3 shadow-xl bg-[#1b1f29] rounded-xl justify-between flex my-4 md:w-200">
      <span className="text-[#A078FF] font-semibold text-2xl mx-2">@</span>
      <input type="text" name="" id="" value={usernameInput} onChange={e => setUsernameInput(e.target.value)}
        placeholder={t('placeholder')}
        className="border-none outline-none w-full" />
      <button className={`rounded-lg h-full px-4 cursor-pointer transition-colors ${usernameInput.length >= 4 ? 'bg-[#a078ff]' : 'bg-[#c5aff8]'}`}
        disabled={usernameInput.length >= 4 ? false : true} onClick={handleSubmit}>
        {
          language !== 'fa' ? <RiArrowRightLine /> : <RiArrowLeftLine />
        }
      </button>
    </div>
  )
}

export default Input