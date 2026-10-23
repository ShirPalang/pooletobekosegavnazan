import SectionProvider from "./SectionProvider"
import type React from "react"

interface StatCardProps {
  title: string
  children: React.ReactNode
  verdict: string
  verdictColor: string
  discription: string
  icon: React.ReactNode
}

const StatCard = ({ children, title, verdict, verdictColor, discription , icon}: StatCardProps) => {
  return (
    <SectionProvider>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            {icon}
            <span className="text-sm text-gray-300">{title}</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-sm"
            style={{ background: `${verdictColor}44`, color: verdictColor }}>
            {verdict}
          </span>
        </div>
        {children}

        <p className="text-xs text-gray-400">
          {discription}
        </p>
      </div>
    </SectionProvider >
  )
}

export default StatCard