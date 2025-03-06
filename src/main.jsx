import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider as ChakraProvider } from './components/ui/provider'
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from './context/ContextProvider.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
      <ContextProvider>

          <App />
          </ContextProvider>

    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
