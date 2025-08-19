import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, createRoutesFromElements,  Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Resume from './components/Resume-Show/Resume.jsx'

// import Login from './components/Login/Login.jsx'


// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {path:"about",
//         element:<About />
//       },
//       {path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' element={<Home />}/> */}
      <Route path='' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      {/* <Route path='user/:userid' element={<User />}/> */}
      <Route path='github' element={<Github />}/>
      <Route path='resume' element={<Resume />}/>
      
      {/* <Route path='login' element={<Login />}/> */}
      


    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
