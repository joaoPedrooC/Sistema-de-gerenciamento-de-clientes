import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ClientProvider } from './providers/ClientContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>,
)
