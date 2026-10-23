import { Link } from "react-router"
import Input from "../components/common/Input"
import { useEffect, type ChangeEvent } from "react"
import { useLanguageStore, type Language } from "../store/LangStore";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'fa', label: 'فارسی' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

const Home = () => {

  const { language, setLanguage } = useLanguageStore();

  const changeLang = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
    setLanguage(e.target.value as Language)
  }

  useEffect(() => {
    const dir = i18n.dir(language);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const { t } = useTranslation()

  return (
    <div className="h-full w-full container flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center w-full h-full gap-4 text-center">
        <h1 className="text-white font-semibold text-2xl md:text-3xl">{t('mainTitle')}</h1>
        <span className="text-[#C3C6D4] text-sm md:text-base">{t('mainDesc')}</span>

        <Input />

        <div className="flex gap-3">
          <Link to='/analyze/nasa' className="text-[#C3C6ff] px-3 py-2 text-sm rounded-full bg-[#1b1f29] shadow-xl">@nasa</Link>
          <Link to='/analyze/newmamadi' className="text-[#C3C6ff] px-3 py-2 text-sm rounded-full bg-[#1b1f29] shadow-xl">@newmamadi</Link>
        </div>


        <select className="rounded-md bg-[#1b1f29] text-white absolute top-6" onChange={changeLang} value={language}>
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Home