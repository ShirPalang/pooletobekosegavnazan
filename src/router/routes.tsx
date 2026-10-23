import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import Home from '../pages/Home'
import Analyze from "../pages/Analyze";

export const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        index: true, element: <Home/>
      },
      {
        path: '/analyze/:username' , element: <Analyze/>
      }
    ]
  }
])