import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className="w-full h-screen bg-[#0f131d] p-4 md:flex md:justify-center overflow-x-hidden">
      <Outlet/>
    </div>
  )
}

export default RootLayout