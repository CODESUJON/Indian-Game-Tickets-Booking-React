import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import TicketDetails from "./pages/TicketDetails"
import "./index.css"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/:tickitid" element={<TicketDetails/>}/>

    </Route>
  )
)

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
