import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Root ,{loader as rootloader,action as rootAction} from './Root'
import ErrorPage from './Error' 
import EditPage from './Edit'
import'./index.css'
import Contact,{loader as contactLoader,action as contactAction} from './Contact'
import {action as editAction} from './Edit'
import {action as deleteAction} from './Delete'
import Index from './Index'

const router  = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:rootloader,
    action:rootAction,
    children:[
      {
        path:'contacts/:contactId',
        element:<Contact/>,
        loader:contactLoader,
        action:contactAction
      },
      {
        path:'contacts/:contactId/edit',
        element:<EditPage/>,
        loader:contactLoader,
        action:editAction
      },
      {
        path:'contacts/:contactId/destroy',
        action:deleteAction,
        errorElement:<div>Oops! There was an error.</div>
      },
      {
        index:true,
        element:<Index/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
