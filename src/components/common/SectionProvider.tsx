import type React from "react"
import type { PropsWithChildren } from "react"

const SectionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-[#1c1f2a] shadow-lg rounded-xl p-4 mb-8 text-white transition-all">
      {children}
    </div>
  )
}

export default SectionProvider