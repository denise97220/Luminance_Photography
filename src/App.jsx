import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ContactUs from './pages/ContactUs'
import ImagePhoto from './pages/ImagePhoto'
import Salon from './pages/Salon'
import Service from './pages/Service'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      { path: 'portfolio/image-photo', element: <ImagePhoto /> },
      { path: 'portfolio/salon', element: <Salon /> },
      { path: 'about', element: <About /> },
      { path: 'service', element: <Service /> },
      { path: 'contact', element: <ContactUs /> }
      // {
      //   path: 'collection',
      //   element: (
      //     <ProtectedRoute>
      //       <Collection />
      //     </ProtectedRoute>
      //   )
      // }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
