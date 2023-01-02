import React from 'react'
import { useRoutes } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <LoginLayout />,
      children: [
        { path: "/page1", element: <Page1 /> },
        { path: "/page2", element: <Page2 /> },
      ]
    },
  ])
}

export default App