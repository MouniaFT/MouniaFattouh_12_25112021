import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import DataMockContextProvider from './contexts/DataMockContext'

ReactDOM.render(
  <React.StrictMode>
    <DataMockContextProvider>
      <App />
    </DataMockContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
