import React from 'react'
import ReactDOM from 'react-dom/client'

import PokedexView from './views/PokedexView'
import PokedexDetailsView from './views/PokemonDetailsView'

import './styles/main.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokedexView/>
  },
  {
    path:'/pokemon/:id',
    element: <PokedexDetailsView/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
